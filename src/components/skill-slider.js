"use client";
import React, { useState } from "react";

function SkillSlider({ skills }) {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  const goToNextSkill = () => {
    setCurrentSkillIndex((prevIndex) =>
      prevIndex === skills.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSkill = () => {
    setCurrentSkillIndex((prevIndex) =>
      prevIndex === 0 ? skills.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center relative">
      <div
        className="bg-black w-32 h-32 rounded-3xl overflow-hidden
        relative flex items-center justify-center text-white text-xl font-bold text-center p-2
        transition-all duration-500 ease-in-out transform hover:scale-105"
      >
        {skills[currentSkillIndex]}
      </div>
      <div className="h-10 w-24 bg-gradient-to-l from-[#118B50] relative -mt-4 z-10 rounded-b-lg"></div>
      <p className="text-center mt-2 font-semibold text-gray-700">
        {skills[currentSkillIndex]}
      </p>
      <div className="absolute inset-x-0 bottom-0 top-0 flex items-center justify-between p-2">
        <button
          onClick={goToPreviousSkill}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
          aria-label="Previous skill"
        >
          &larr;
        </button>
        <button
          onClick={goToNextSkill}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
          aria-label="Next skill"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}

export default SkillSlider;
