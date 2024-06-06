import { useState } from "react";
import SkillSelection from "../components/skill-selection";
import PropTypes from "prop-types";

const SkillPlan = () => {
  const [proficiency, setProficiency] = useState("");
  const [selectedPace, setSelectedPace] = useState("");

  const handleProficiencyChange = (e) => {
    setProficiency(e.target.value);
  };

  const handlePaceChange = (e) => {
    setSelectedPace(e.target.value);
  };

  return (
    <div className="w-full bg-white flex flex-col items-center justify-start py-5 px-2 gap-8">
      <SkillSelection />
      <form className="w-full max-w-[800px] flex flex-col items-center gap-4">
        <div className="w-full flex flex-col items-center gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold text-center font-sans">
            What skill do you want to learn?
          </h2>
          <div className="w-full max-w-[500px] shadow-md rounded-lg bg-white flex items-center px-3 py-2 border border-gray-200">
            <input
              className="w-full border-none outline-none text-base bg-transparent text-gray-700 font-sans"
              placeholder="e.g., software engineer"
              type="text"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold text-center font-sans">
            Choose Your Current Proficiency
          </h2>
          <div className="w-full max-w-[500px] flex flex-row items-center justify-between gap-3">
            {["Beginner", "Medium", "Advanced"].map((level, index) => (
              <label
                key={index}
                className={`w-[30%] cursor-pointer p-3 rounded-lg border border-black shadow-sm flex items-center justify-center gap-2 transition ${
                  proficiency === level ? "bg-blue-500 text-white" : "bg-white text-black"
                } font-sans`}
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
                <div className={`w-full h-full flex items-center justify-center text-base font-medium`}>
                  {level}
                </div>
              </label>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold text-center font-sans">
            Choose Your Learning Pace
          </h2>
          <div className="w-full max-w-[500px] flex flex-row items-center justify-between gap-3">
            {["Slow", "Medium", "Fast"].map((pace, index) => (
              <label
                key={index}
                className={`w-[30%] cursor-pointer p-3 rounded-lg border border-black shadow-sm flex items-center justify-center gap-2 transition ${
                  selectedPace === pace ? "bg-blue-500 text-white" : "bg-white text-black"
                } font-sans`}
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
                <div className="w-full h-full flex items-center justify-center text-base font-medium">
                  {pace}
                </div>
              </label>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button className="bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 transition font-sans font-medium text-lg">
            Generate Roadmap
          </button>
        </div>
      </form>
    </div>
  );
};

SkillPlan.propTypes = {
  className: PropTypes.string,
};

export default SkillPlan;
