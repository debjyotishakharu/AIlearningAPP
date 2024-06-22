import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SkillSelection from "../components/header-navigation";
import PropTypes from "prop-types";

const SkillPlan = () => {
  const [proficiency, setProficiency] = useState("");
  const [selectedPace, setSelectedPace] = useState("");
  const [skill, setSkill] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleProficiencyChange = (e) => {
    setProficiency(e.target.value);
  };

  const handlePaceChange = (e) => {
    setSelectedPace(e.target.value);
  };

  const handleSkillChange = (e) => {
    setSkill(e.target.value);
  };

  const handleGenerateRoadmap = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/generate-roadmap/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ skill, proficiency, selectedPace }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate roadmap");
      }

      const data = await response.json();
      navigate("/roadmap", { state: { roadmap: data } });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full bg-white flex flex-col items-center justify-start py-5 px-2 gap-8">
      <SkillSelection />
      <form className="w-full max-w-[800px] flex flex-col items-center gap-4 px-2 md:px-4" onSubmit={handleGenerateRoadmap}>
        <div className="w-full flex flex-col items-center gap-3">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center font-sans">
            What skill do you want to learn?
          </h2>
          <div className="w-full max-w-[500px] sm:max-w-[400px] md:max-w-[350px] lg:max-w-[300px] shadow-md rounded-lg bg-white flex items-center px-3 py-2 border border-gray-200">
            <input
              className="w-full border-none outline-none text-xs sm:text-sm md:text-base bg-transparent text-gray-700 font-sans"
              placeholder="e.g., software engineer"
              type="text"
              value={skill}
              onChange={handleSkillChange}
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-3">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center font-sans">
            Choose Your Current Proficiency
          </h2>
          <div className="w-full max-w-[500px] flex flex-wrap items-center justify-between gap-3">
            {["Beginner", "Medium", "Advanced"].map((level, index) => (
              <label
                key={index}
                className={`flex-1 min-w-[100px] cursor-pointer p-2 sm:p-3 rounded-lg border border-black shadow-sm flex items-center justify-center transition ${
                  proficiency === level ? "bg-blue-500 text-white" : "bg-white text-black"
                } font-sans text-xs sm:text-sm md:text-base`}
              >
                <input
                  type="radio"
                  id={level}
                  name="proficiency"
                  value={level}
                  checked={proficiency === level}
                  onChange={handleProficiencyChange}
                  className="hidden"
                />
                <div className="w-full h-full flex items-center justify-center">
                  {level}
                </div>
              </label>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-3">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center font-sans">
            Choose Your Learning Pace
          </h2>
          <div className="w-full max-w-[500px] flex flex-wrap items-center justify-between gap-3">
            {["Slow", "Medium", "Fast"].map((pace, index) => (
              <label
                key={index}
                className={`flex-1 min-w-[100px] cursor-pointer p-2 sm:p-3 rounded-lg border border-black shadow-sm flex items-center justify-center transition ${
                  selectedPace === pace ? "bg-blue-500 text-white" : "bg-white text-black"
                } font-sans text-xs sm:text-sm md:text-base`}
              >
                <input
                  type="radio"
                  id={pace}
                  name="learningPace"
                  value={pace}
                  checked={selectedPace === pace}
                  onChange={handlePaceChange}
                  className="hidden"
                />
                <div className="w-full h-full flex items-center justify-center">
                  {pace}
                </div>
              </label>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button className="bg-blue-600 text-white px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-lg hover:bg-blue-700 transition font-sans font-medium text-sm sm:text-base md:text-lg">
            Generate Roadmap
          </button>
        </div>
        {error && (
          <div className="w-full flex justify-center text-red-500">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

SkillPlan.propTypes = {
  className: PropTypes.string,
};

export default SkillPlan;
