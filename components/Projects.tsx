"use client";

import React, { useEffect, useState, useRef } from "react";
import { ProjectType } from "./HomeProjectItem";
import Image from "next/image";
import { CheckIcon, Github } from "lucide-react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";

const Projects = ({ data }: { data: ProjectType }) => {
  const { description, developers, git, images, link, title, type } = data;
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Refs for smooth scrolling
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentSlideIndex + 1) % images.length;
      setCurrentSlideIndex(nextIndex);
      setSelectedImage(images[nextIndex]);

      // Properly scroll the main carousel
      if (carouselRef.current) {
        carouselRef.current.scrollTo({
          left: nextIndex * carouselRef.current.offsetWidth,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlideIndex, images]);

  // Handle manual image selection
  const handleImageSelect = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentSlideIndex(index);

    // Smooth scroll to selected image
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: index * carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 p-4">
      <div>
        {/* image section */}
        <div className="grid gap-4">
          {type === "web" && (
            <div
              ref={carouselRef}
              className="flex w-full overflow-x-hidden scroll-smooth"
            >
              {images.map((image, index) => (
                <Image
                  key={image}
                  className="w-full h-auto rounded-lg"
                  src={image}
                  alt={`${title} ${index + 1}`}
                  width={800}
                  height={800}
                />
              ))}
            </div>
          )}
          <div className="grid grid-cols-5 gap-4 overflow-x-auto p-2">
            {images.map((image, idx) => (
              <div
                key={image}
                onClick={() => handleImageSelect(image, idx)}
                className="relative flex-shrink-0"
              >
                <Image
                  className={cn(
                    "h-auto max-w-full rounded-sm hover:cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out",
                    type === "web" && selectedImage === image
                      ? "ring-1 ring-white ring-offset-1 p-1"
                      : ""
                  )}
                  src={image}
                  alt={`Thumbnail ${idx + 1}`}
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
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-900 text-white px-3 py-2 rounded-md transition-colors duration-200"
            >
              <span className="text-sm font-medium">Source</span>
              <Github className="size-5" />
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
                    rel="noopener noreferrer"
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
