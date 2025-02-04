import React from "react";
import { Clock } from "lucide-react";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center p-8 md:p-12 rounded-2xl shadow-2xl backdrop-blur-sm bg-black/40 transform transition-all duration-300">
        <Clock className="mx-auto mb-6 w-16 h-16 text-white animate-pulse" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
          No Blogs Yet!
        </h1>
        <p className="text-lg md:text-2xl italic flex items-center justify-center space-x-2">
          <span>Check back in</span>
          <span className="font-semibold text-white/80 bg-white/10 px-2 py-1 rounded-md">
            10 working days
          </span>
        </p>
      </div>
    </div>
  );
};

export default Page;
