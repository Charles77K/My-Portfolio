"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MagicButton } from "./ui/MagicButton";

const HeroSection = () => {
  return (
    <div className="px-4 md:px-8 lg:px-28 p-4 py-40 flex gap-10 md:gap-10 flex-col items-center md:items-start  md:mx-auto justify-center">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl sm:text-7xl text-center md:text-start font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
      >
        Turning Ideas into Interactive <br />
        Masterpieces
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="sm:text-xl text-center text-base md:text-start text-primary-foreground max-w-2xl"
      >
        Hi there, I&apos;m <span className="font-bold">Charles Obiora</span>, a
        passionate software developer. I specialize in creating amazing websites
        and mobile applications that bring ideas to life. Whether it&apos;s
        designing user-friendly interfaces or building reliable backend systems,
        I&apos;m dedicated to delivering top-notch digital experiences.
      </motion.p>

      <Link href={"/about"} className="flex mx-auto sm:mx-0">
        <motion.p
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <MagicButton title=" Learn More About Me" />
          {/* Gradient overlay */}
        </motion.p>
      </Link>
    </div>
  );
};

export default HeroSection;
