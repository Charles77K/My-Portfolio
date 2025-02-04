"use client";

import React from "react";
import ShimmerButton from "./ui/ShimmerButton";
import HomeProjects from "./HomeProjects";
import TechStack from "./TechStack";
import { ProjectType } from "./HomeProjectItem";

const Proficiencies = ({ project }: { project: ProjectType[] }) => {
  const [currentSlide, setCurrentSlide] = React.useState<string>("projects");

  const renderPage = () => {
    if (currentSlide === "projects") {
      return <HomeProjects projects={project} />;
    } else if (currentSlide === "stack") {
      return <TechStack key="stack" />;
    }
  };

  return (
    <div className="h-full p-4 mb-14">
      <div className="flex justify-between border rounded-lg mx-auto max-w-xs">
        <section onClick={() => setCurrentSlide("projects")} className="flex-1">
          <ShimmerButton
            title="Projects"
            isActive={currentSlide === "projects"}
            extraStyles="rounded-l-lg"
          />
        </section>
        <section onClick={() => setCurrentSlide("stack")} className="flex-1">
          <ShimmerButton
            title="Tech Stack"
            isActive={currentSlide === "stack"}
            extraStyles="rounded-r-md"
          />
        </section>
      </div>
      <div>{renderPage()}</div>
    </div>
  );
};

export default Proficiencies;
