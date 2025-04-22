"use client";

import React from "react";
import Skeleton from "react-loading-skeleton";

const getGridSpans = (index: number) => {
  const pattern = index % 8;
  switch (pattern) {
    case 0:
      return "md:col-span-2 md:row-span-2";
    case 3:
      return "md:col-span-2";
    case 6:
      return "md:row-span-2";
    default:
      return "";
  }
};

const ProjectsLoader = () => {
  const skeletonItems = Array.from({ length: 4 }, (_, i) => i);

  return (
    <div className="min-h-screen h-full mt-20 p-4 md:p-8 lg:p-12">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
        {skeletonItems.map((_, idx) => (
          <div key={idx} className={`relative ${getGridSpans(idx)}`}>
            <div className="bg-card-foreground rounded-xl overflow-hidden border-2 border-white/30 h-full">
              <div className="p-8 space-y-6 relative z-10 h-full flex flex-col">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-16 -mt-16" />

                <div>
                  <Skeleton
                    height={getGridSpans(idx).includes("col-span-2") ? 36 : 30}
                    width={
                      getGridSpans(idx).includes("col-span-2") ? "75%" : "66%"
                    }
                    baseColor="#1f2937"
                    highlightColor="#374151"
                  />
                </div>

                <div className="space-y-3 flex-grow">
                  {getGridSpans(idx).includes("span-2") ? (
                    <>
                      <Skeleton
                        height={16}
                        baseColor="#1f2937"
                        highlightColor="#374151"
                      />
                      <Skeleton
                        height={16}
                        width="90%"
                        baseColor="#1f2937"
                        highlightColor="#374151"
                      />
                      <Skeleton
                        height={16}
                        width="85%"
                        baseColor="#1f2937"
                        highlightColor="#374151"
                      />
                      <Skeleton
                        height={16}
                        width="88%"
                        baseColor="#1f2937"
                        highlightColor="#374151"
                      />
                    </>
                  ) : (
                    <>
                      <Skeleton
                        height={16}
                        baseColor="#1f2937"
                        highlightColor="#374151"
                      />
                      <Skeleton
                        height={16}
                        width="85%"
                        baseColor="#1f2937"
                        highlightColor="#374151"
                      />
                    </>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 mt-auto">
                  <Skeleton
                    height={20}
                    width={100}
                    baseColor="#1f2937"
                    highlightColor="#374151"
                  />
                  <Skeleton
                    height={32}
                    width={32}
                    circle
                    baseColor="#1f2937"
                    highlightColor="#374151"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsLoader;
