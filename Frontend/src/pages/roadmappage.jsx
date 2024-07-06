import React from "react";
import { useLocation } from "react-router-dom";

const RoadmapPage = () => {
  const location = useLocation();
  const { roadmap } = location.state || {};

  if (!roadmap) {
    return (
      <div className="w-full bg-white flex flex-col items-center justify-center py-5 px-2 gap-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center font-sans">
          No Roadmap Found
        </h2>
      </div>
    );
  }

  return (
    <div className="w-full bg-white flex flex-col items-center justify-start py-5 px-2 gap-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center font-sans">
        Your Learning Roadmap
      </h2>
      <div className="w-full max-w-[800px] flex flex-col items-center gap-4 px-2 md:px-4">
        <div className="w-full bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 font-sans">
            Detailed Roadmap
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 font-sans whitespace-pre-line">
            {roadmap.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
