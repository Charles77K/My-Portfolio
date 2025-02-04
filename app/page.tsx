import HeroSection from "@/components/HeroSection";
import Proficiencies from "@/components/Proficiencies";
import { ProjectType } from "@/components/HomeProjectItem";
import { fetchApiData } from "@/lib/apiHelper";
import { apiRoute } from "@/lib/static";
import ErrorModal from "@/components/ui/ErrorModal";

export interface ResponseType {
  message: string;
  status: string;
  length: number;
  projects: ProjectType[];
}

export default async function Home() {
  let projects: ProjectType[] = [];

  try {
    const res = await fetchApiData<ResponseType>(
      `${apiRoute}/projects?limit=4`
    );
    projects = res.projects;
  } catch (error) {
    console.error("Failed to fetch projects:", error);
  }

  return (
    <div className="mt-10">
      <HeroSection />

      {projects.length > 0 ? (
        <Proficiencies project={projects} />
      ) : (
        <div className="mt-5 h-full">
          <ErrorModal
            title="Oops! Something went wrong"
            text="We couldn't load the project at this time please try again later"
            retry="Retry"
          />
        </div>
      )}
    </div>
  );
}
