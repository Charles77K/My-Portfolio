import React from "react";

interface ShimmerButtonProps {
  title: string;
  isActive: boolean;
  extraStyles?: string;
}

const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  title,
  isActive,
  extraStyles,
}) => {
  return (
    <button
      className={`inline-flex ${
        isActive
          ? "bg-[linear-gradient(110deg,#ffffff,45%,#e4e4e4,55%,#ffffff)] text-black border-transparent shadow-[0_0_4px_2px_rgba(255,255,255,0.8)]"
          : "border-white bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] text-white"
      } h-12 animate-shimmer w-full items-center justify-center border  bg-[length:200%_100%] px-6 font-bold  transition-colors focus:outline-none focus:ring-offset-2 focus:ring-offset-slate-50 ${extraStyles}`}
    >
      {title}
    </button>
  );
};

export default ShimmerButton;
