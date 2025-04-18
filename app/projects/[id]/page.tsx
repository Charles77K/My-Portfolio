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
  project: ProjectType | ProjectType[];
}

// Fetch the project and reuse data for metadata and main page
const fetchProject = async (
  id?: string
): Promise<ProjectType[] | ProjectType | null> => {
  try {
    const response = await fetchApiData<DynamicResponse>(
      `${apiRoute}/projects${id ? `/${id}` : ""}`
    );
    return response.project;
  } catch (error) {
    console.error("Failed to fetch project data:", error);
    return null;
  }
};

export const generateStaticParams = async () => {
  try {
    const projects = await fetchProject();
    if (Array.isArray(projects)) {
      return projects.map((project: ProjectType) => ({
        id: project._id.toString(),
      }));
    }
    return [];
  } catch (error) {
    console.error("Failed to generate static params:", error);
    return [];
  }
};

export const revalidate = 7200;

// Pass fetched data into metadata
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> => {
  const { id } = await params;
  const project = await fetchProject(id);

  if (!project || Array.isArray(project)) {
    return {
      title: "Project not found",
      description: "Unable to load project details",
    };
  }

  return {
    title: `Project - ${project.title}`,
    description: `Project details for ${project.description}`,
  };
};

// Page component
const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const projectData = await fetchProject(id);

  if (!projectData || Array.isArray(projectData)) {
    return (
      <div className="min-h-screen h-full mt-20 text-white">
        <ErrorModal
          title="Oops! Something went wrong"
          text="We couldn't load the project at this time. Please try again later."
          retry="retry"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen h-full mt-20 text-white">
      <Projects data={projectData} />
    </div>
  );
};

export default Page;
