import React from "react";
import { StackButton } from "./ui/MagicButton";

export interface TechStackItemProps {
  icon: React.ReactNode;
  text: string;
}

const TechStackItem: React.FC<TechStackItemProps> = ({ icon, text }) => {
  return (
    <div>
      <StackButton>
        <span>{icon}</span>
        <p className="text-xs md:text-sm font-base text-white">{text}</p>
      </StackButton>
    </div>
  );
};

export default TechStackItem;
