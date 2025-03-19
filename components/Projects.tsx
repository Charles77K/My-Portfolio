"use client";

import React, { useEffect, useState } from "react";
import { ProjectType } from "./HomeProjectItem";
import Image from "next/image";
import { CheckIcon, Code } from "lucide-react";
import { FaEnvelope, FaGithub } from "react-icons/fa";

const Projects = ({ data }: { data: ProjectType }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { description, developers, git, images, link, title, type } = data;
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 p-8">
      <div>
        {/* image section */}
        <div className="grid gap-4">
          {type === "web" && (
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={selectedImage}
                alt=""
                width={800}
                height={800}
              />
            </div>
          )}
          <div className="grid grid-cols-5 gap-4">
            {images.map((image) => (
              <div
                key={image}
                onClick={() => setSelectedImage(image)}
                className="relative"
              >
                <Image
                  className={`h-auto max-w-full rounded-sm hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out
          ${
            type === "web" && selectedImage === image
              ? "ring-2 ring-white ring-offset-gray-800 p-1"
              : ""
          }`}
                  src={image}
                  alt=""
                  width={200}
                  height={200}
                />
                {type === "web" && selectedImage === image && (
                  <div className="absolute top-1 right-1">
                    <CheckIcon className="w-4 h-4 text-blue-500 bg-white rounded-full" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* git link and website section */}
        <div className="bg-card-foreground bg-opacity-50 border border-gray-700 border-opacity-50 rounded-lg mt-5 p-4 flex flex-col space-y-3">
          <div className="flex items-center justify-between">
            <a
              href={git}
              target="_blank"
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-md transition-colors duration-200"
            >
              <Code className="w-5 h-5" />
              <span className="text-sm font-medium">Get Code</span>
            </a>

            {link && (
              <>
                {link === "pending" ? (
                  <p className="bg-red-500 text-white p-2 rounded-lg text-sm font-medium">
                    Deployment Pending
                  </p>
                ) : (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 hover:underline text-sm truncate max-w-[200px]"
                  >
                    {link}
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* description */}
      <div className="flex flex-col space-y-6 bg-card-foreground p-4 rounded-lg border border-gray-700/50 shadow-md">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
            {title}
          </h2>
          <p className="text-gray-300 text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* development team */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">
            Development Team
          </h3>
          <div className="space-y-4">
            {developers.map((dev, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between bg-zinc-900/50 p-4 rounded-md transition-all duration-300 hover:bg-zinc-900"
              >
                <div>
                  <p className="text-white font-medium text-lg">
                    {dev.name}
                    {dev.name.startsWith("Charles") ? " (Me)" : ""}{" "}
                  </p>
                  <p className="text-gray-400 text-sm">{dev.role} Developer</p>
                  <p className="space-x-3">
                    {dev.stack.map((stack, idx) => (
                      <span key={idx} className="text-xs md:text-sm text-white">
                        {stack}
                      </span>
                    ))}
                  </p>
                </div>
                {/* email and github */}
                <div className="flex items-center space-x-3">
                  <a
                    href={`mailto:${dev.email}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaEnvelope className="w-5 h-5" />
                  </a>
                  <a
                    href={dev.github}
                    target="_blank"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
