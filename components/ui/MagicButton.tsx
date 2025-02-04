import React, { ReactNode } from "react";

export const MagicButton = ({ title }: { title: string }) => {
  return (
    <button
      className="border-2 bg-foreground border-white/40 hover:border-white text-white 
    px-6 py-3 rounded-full transition-all ease-in-out duration-300 
    flex items-center justify-center
    overflow-hidden
    hover:bg-white/10
    active:bg-white/20
    transform hover:-translate-y-1
    shadow-lg hover:shadow-xl"
    >
      {title}
    </button>
  );
};

export const StackButton: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <button
      className="border-2 border-white/40 hover:border-white text-white 
    px-4 py-3 rounded-full transition-all ease-in-out duration-300 
    flex items-center space-x-3 md:space-x-5 
    overflow-hidden
    hover:bg-white/10
    active:bg-white/20
    transform hover:-translate-y-1
    shadow-lg hover:shadow-xl"
    >
      {children}
    </button>
  );
};
