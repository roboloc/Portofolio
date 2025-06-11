import SkillSlider from "@/components/skill-slider";

export default function Skill() {
  const frontend = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "NextJs"];
  const backend = ["Laravel", "Node.js", "Python", "SQL"];
  const devOpsTools = ["Git"];

  return (
    <main id="skill" className="bg-cyan-50 min-h-[100vh] py-8">
      <p
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center
          text-black leading-tight
        text-shadow-sm"
      >
        Skills
      </p>
      <hr
        className="w-40 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm
        md:my-8 dark:bg-gray-700"
      ></hr>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div
            className="bg-[#FFFDF6] rounded-3xl h-40 w-full max-w-sm flex items-center justify-center
            drop-shadow-[0_5px_5px_rgba(0,0,0,0.55)] mb-8"
          >
            <p className="text-center font-bebas-neue text-4xl font-bold">
              Frontend
            </p>
          </div>
          <SkillSlider skills={frontend} />
        </div>

        <div className="flex flex-col items-center">
          <div
            className="bg-[#FFFDF6] rounded-3xl h-40 w-full max-w-sm flex items-center justify-center
            drop-shadow-[0_5px_5px_rgba(0,0,0,0.55)] mb-8"
          >
            <p className="text-center font-bebas-neue text-4xl font-bold">
              Backend
            </p>
          </div>
          <SkillSlider skills={backend} />
        </div>

        <div className="flex flex-col items-center">
          <div
            className="bg-[#FFFDF6] rounded-3xl h-40 w-full max-w-sm flex items-center justify-center
            drop-shadow-[0_5px_5px_rgba(0,0,0,0.55)] mb-8"
          >
            <p className="text-center font-bebas-neue text-4xl font-bold">
              Dev Ops & Tools
            </p>
          </div>
          <SkillSlider skills={devOpsTools} />
        </div>
      </div>
    </main>
  );
}
