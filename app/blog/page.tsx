import React from "react";
import { Clock } from "lucide-react";

const Blog = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center p-8 rounded-2xl shadow-lg">
        <Clock className="mx-auto mb-4 w-16 h-16 text-white" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">No Blogs Yet!</h1>
        <p className="text-lg md:text-2xl italic flex items-center justify-center">
          Check back in{" "}
          <span className="mx-1 font-semibold">3 Eke Market days</span>.
        </p>
      </div>
    </div>
  );
};

export default Blog;
