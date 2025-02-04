"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import TechStackItem from "./TechStackItem";
import { techStack } from "@/lib/static";

const TechStack: React.FC = () => {
  const containerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      // Calculate rotation based on mouse position
      const xRotation = ((y - height / 2) / height) * -20;
      const yRotation = ((x - width / 2) / width) * 20;

      container.style.transform = `
        perspective(1000px)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)
        scale3d(1.05, 1.05, 1.05)
      `;
    };

    const handleMouseLeave = () => {
      container.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        scale3d(1, 1, 1)
      `;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <ul
      ref={containerRef}
      className={`flex flex-wrap justify-center items-center mt-5 max-w-xl mx-auto gap-6 md:gap-5 md:space-y-4 p-2 md:p-4 transition-transform duration-200 ease-out`}
    >
      {techStack.map((item, idx) => (
        <motion.li
          key={idx}
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.1, duration: 0.2 }}
        >
          <TechStackItem {...item} />
        </motion.li>
      ))}
    </ul>
  );
};

export default TechStack;
