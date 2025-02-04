"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectType } from "./HomeProjectItem";

const getGridSpans = (index: number) => {
  const pattern = index % 8;

  switch (pattern) {
    case 0:
      return "md:col-span-2 md:row-span-2";
    case 3:
      return "md:col-span-2";
    case 6:
      return "md:row-span-2";
    default:
      return "";
  }
};

const ProjectsPage = ({ projects }: { projects: ProjectType[] }) => {
  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
        {projects.map((project, idx) => (
          <motion.div
            key={project._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: idx * 0.1,
              ease: "easeOut",
            }}
            className={`group relative ${getGridSpans(idx)}`}
          >
            <Link href={`/projects/${project._id}`} className="h-full">
              <div className="bg-card-foreground rounded-xl overflow-hidden border-2 border-white/30 transition-all duration-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:border-white h-full">
                <div className="p-8 space-y-6 relative z-10 h-full flex flex-col">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-16 -mt-16 transition-all duration-500 group-hover:bg-white/10" />

                  <div>
                    <h3
                      className={`font-bold transition-colors duration-300 text-white group-hover:text-white/90 
                      ${
                        getGridSpans(idx).includes("col-span-2")
                          ? "text-3xl"
                          : "text-2xl"
                      }`}
                    >
                      {project.title}
                    </h3>
                  </div>

                  <p
                    className={`text-white/70 relative z-10 flex-grow
                    ${
                      getGridSpans(idx).includes("span-2")
                        ? "line-clamp-6"
                        : "line-clamp-3"
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 text-white/60 mt-auto">
                    <span className="flex items-center text-sm font-medium">
                      View Project
                      <svg
                        className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>

                    <div className="h-8 w-8 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-white/60 transition-colors duration-300">
                      <span className="text-sm font-medium">{idx + 1}</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
