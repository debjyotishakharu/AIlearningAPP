// src/RoadmapPage.js

import React from "react";
import { useLocation } from "react-router-dom";

const RoadmapPage = () => {
  const location = useLocation();
  const { roadmap } = location.state || {};

  return (
    <div className="w-full bg-white flex flex-col items-center justify-start py-5 px-2 gap-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center font-sans">
        Your Learning Roadmap
      </h2>
      <div className="w-full max-w-[800px] flex flex-col items-center gap-4 px-2 md:px-4">
        <div className="w-full bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 font-sans">
            GPT-4 Recommended Roadmap
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 font-sans">
            {roadmap?.gpt_roadmap}
          </p>
        </div>
        <div className="w-full bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 font-sans">
            Additional Resources from Google
          </h3>
          <ul className="list-disc pl-5 text-sm sm:text-base md:text-lg text-gray-700 font-sans">
            {roadmap?.google_results?.map((result, index) => (
              <li key={index}>
                <a href={result.link} target="_blank" rel="noopener noreferrer">
                  {result.title}
                </a>{" "}
                - {result.snippet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
