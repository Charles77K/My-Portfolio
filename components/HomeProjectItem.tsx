import React from "react";
import Link from "next/link";

export interface ProjectType {
  _id: string;
  title: string;
  images: string[];
  description: string;
  git: string;
  type: "mobile" | "web";
  link: string;
  developers: {
    name: string;
    github: string;
    stack: string[];
    email: string;
    link: string;
    role: string;
  }[];
  createdAt: Date;
}

const HomeProjectItem = ({ projects }: { projects: ProjectType }) => {
  const { _id, title, description } = projects;
  return (
    <div className="bg-card-foreground w-full hover:bg-white/5 hover:cursor-pointer text-white border-2 border-white/30 rounded-xl p-8 transition-all duration-500 ease-in-out hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:border-white">
      <Link href={`projects/${_id}`} className="space-y-4">
        <p className="font-bold text-xl md:text-2xl">{title}</p>
        <p className="line-clamp-4 text-base">{description}</p>
      </Link>
    </div>
  );
};

export default HomeProjectItem;
