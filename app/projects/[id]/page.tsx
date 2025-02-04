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
    return response.projects.map((project) => ({
      id: project._id.toString(),
    }));
  } catch (error: unknown) {
    console.log("failed to generate static params", error);
    return [];
  }
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> => {
  const id = (await params).id;
  try {
    const project = await fetchApiData<DynamicResponse>(
      `${apiRoute}/projects/${id}`
    );
    return {
      title: `Project - ${project.project.title}`,
      description: `Project details for ${project.project.description}`,
    };
  } catch (error: unknown) {
    console.error("Failed to fetch project data", error);
    return {
      title: "Project not found",
      description: "Unable to load Project details",
    };
  }
};

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  try {
    const id = (await params).id;
    const project = await fetchApiData<DynamicResponse>(
      `${apiRoute}/projects/${id}`
    );
    const data = project.project;
    return (
      <div className="min-h-screen h-full mt-20 text-white">
        <Projects data={data} />
      </div>
    );
  } catch (error: unknown) {
    console.error("Failed to fetch project data", error);
    return (
      <div className="min-h-screen h-full mt-20">
        <ErrorModal
          title="Oops! Something went wrong"
          text="We couldn't load the project at this time please try again later"
          retry="Retry"
        />
      </div>
    );
  }
};

export default page;
