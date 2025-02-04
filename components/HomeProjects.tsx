import React from "react";
import HomeProjectItem, { ProjectType } from "./HomeProjectItem";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HomeProjects = ({ projects }: { projects: ProjectType[] }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid gap-4 sm:gap-5 md:gap-10 grid-cols-1 sm:grid-cols-2 mt-10 px-1 md:px-10 lg:px-[8rem]">
        {projects.map((project, idx) => (
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            key={project._id}
          >
            <HomeProjectItem projects={project} key={project._id} />
          </motion.li>
        ))}
      </div>
      <div className="mt-6">
        <Link
          href="/projects"
          className="group flex gap-2 items-center text-sm hover:bg-white/5 text-white border border-white/[0.2] px-4 py-2 rounded-full transition duration-300 hover:border-white hover:text-white"
        >
          <span>See More</span>
          <span className="group-hover:scale-x-150 transition-all duration-300 ease-in-out">
            <ArrowRight size={10} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HomeProjects;
