import { ResponseType } from "@/app/page";
import { ProjectType } from "@/components/HomeProjectItem";
import Projects from "@/components/Projects";
import ErrorModal from "@/components/ui/ErrorModal";
import { fetchApiData } from "@/lib/apiHelper";
import { apiRoute } from "@/lib/static";
import { Metadata } from "next";
import React from "react";

interface DynamicResponse {
  message: string;
  status: string;
  project: ProjectType;
}

export const generateStaticParams = async () => {
  try {
    const response = await fetchApiData<ResponseType>(`${apiRoute}/projects`);
    return (
      response.projects?.map((project) => ({
        id: project._id.toString(),
      })) || []
    );
  } catch (error) {
    console.error("Failed to generate static params:", error);
    return [];
  }
};

export const revalidate = 7200;

// ✅ Fetch the project **inside page.tsx** and reuse data for metadata and main page
const fetchProject = async (id: string): Promise<ProjectType | null> => {
  try {
    const response = await fetchApiData<DynamicResponse>(
      `${apiRoute}/projects/${id}`
    );
    return response.project;
  } catch (error) {
    console.error("Failed to fetch project data:", error);
    return null;
  }
};

// ✅ Pass fetched data into metadata
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> => {
  const { id } = await params;
  const project = await fetchProject(id);

  return project
    ? {
        title: `Project - ${project.title}`,
        description: `Project details for ${project.description}`,
      }
    : {
        title: "Project not found",
        description: "Unable to load project details",
      };
};

// ✅ Page fetches
const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const projectData = await fetchProject(id);

  return (
    <div className="min-h-screen h-full mt-20 text-white">
      {projectData ? (
        <Projects data={projectData} />
      ) : (
        <ErrorModal
          title="Oops! Something went wrong"
          text="We couldn't load the project at this time. Please try again later."
          retry="retry" //
        />
      )}
    </div>
  );
};

export default Page;
