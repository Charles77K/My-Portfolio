"use client";
import { TextGenerateEffect } from "./text-generate-effect";

const words = `Hi there, I’m Charles Obiora, a
        passionate software developer. I specialize in creating stunning
        websites and mobile application that bring ideas to life. Whether it’s
        crafting intuitive user interfaces or building robust backend systems, I
        thrive on delivering exceptional digital experiences`;

export function TextGenerateEffectDemo() {
  return (
    <TextGenerateEffect
      className="text-white"
      duration={2}
      filter={false}
      words={words}
    />
  );
}
