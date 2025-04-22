import React from "react";

import { fetchApiData } from "@/lib/apiHelper";
import { apiRoute } from "@/lib/static";
import { ResponseType } from "../page";
import ProjectsPage from "@/components/ProjectsPage";
import ErrorModal from "@/components/ui/ErrorModal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "All Projects",
};

const page = async () => {
  try {
    const response = await fetchApiData<ResponseType>(`${apiRoute}/projects`);
    const projects = response.projects;
    return (
      <div className="h-full mt-20 p-4 ">
        <ProjectsPage projects={projects} />
      </div>
    );
  } catch (error: unknown) {
    console.log(error);
    return (
      <div className="min-h-screen h-full mt-20 text-white">
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
