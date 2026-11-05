"use client";
import { useState } from "react";

export default function SkillSlider({ skills }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? skills.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === skills.length - 1 ? 0 : i + 1));

  const skill = skills[current];

  return (
    // pb-3 pr-3 gives the absolute box room to show without being clipped
    <div className="relative w-full max-w-xs pb-3 pr-3">
      <div className="absolute -bottom-0 -right-0 w-full h-full rounded-2xl bg-cyan-300 opacity-70" />

      <div className="relative bg-[#FFFDF6] rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center gap-3 z-10 min-h-[140px]">
        {skill.icon && (
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-12 h-12 object-contain"
            // style={
            //   skill.icon.startsWith("http")
            //     ? { filter: "brightness(0) invert(1)" }
            //     : {}
            // }
          />
        )}
        <p className="text-black font-bold text-lg">{skill.name}</p>

        <div className="flex gap-6 mt-1">
          <button
            onClick={prev}
            className="text-black hover:text-cyan-200 transition-colors text-xl"
          >
            ←
          </button>
          <button
            onClick={next}
            className="text-black hover:text-cyan-200 transition-colors text-xl"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
