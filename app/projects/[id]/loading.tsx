"use client";

import React from "react";
import Skeleton from "react-loading-skeleton";

const ProjectsLoader = () => {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 p-8">
      {/* Image Section Skeleton */}
      <div>
        <div className="grid gap-4">
          <div>
            <Skeleton height={400} className="rounded-lg" />
          </div>
          <div className="grid grid-cols-5 gap-4">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Skeleton key={idx} height={80} className="rounded-sm" />
            ))}
          </div>
        </div>

        <div className="bg-card-foreground bg-opacity-50 border border-gray-700 border-opacity-50 rounded-lg mt-5 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <Skeleton width={100} height={40} className="rounded-md" />
            <Skeleton width={120} height={20} />
          </div>
        </div>
      </div>

      {/* Project Details Skeleton */}
      <div className="flex flex-col space-y-6 bg-card-foreground/50 p-6 rounded-lg border border-gray-700/50 shadow-md">
        <div>
          <Skeleton width={200} height={32} />
          <Skeleton count={3} />
        </div>

        <div>
          <Skeleton width={150} height={24} className="mb-4" />
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="p-4 rounded-md bg-card-foreground/75">
                <Skeleton width={120} height={20} />
                <Skeleton width={100} height={16} />
                <Skeleton width={150} height={14} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsLoader;
