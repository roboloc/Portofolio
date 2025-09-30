import SkillSlider from "@/components/skill-slider";

export default function Skill() {
  const frontend = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "NextJs"];
  const backend = ["Laravel", "Node.js", "Python", "SQL"];
  const devOpsTools = ["Git"];

  return (
    <main
      id="skill"
      className="bg-cyan-50 flex flex-col items-center justify-center py-16 px-4 sm:px-6"
    >
      <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-black leading-tight drop-shadow-sm">
        Skills
      </p>
      <hr className="w-40 h-1 mx-auto my-4 bg-gray-700 border-0 rounded-sm"></hr>

      <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start mt-12">
        <div className="flex flex-col items-center">
          <div className="bg-[#FFFDF6] rounded-xl shadow-lg h-32 w-full max-w-xs flex items-center justify-center mb-8">
            <p className="text-center font-bebas-neue text-4xl font-bold">
              Frontend
            </p>
          </div>
          <SkillSlider skills={frontend} />
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-[#FFFDF6] rounded-xl shadow-lg h-32 w-full max-w-xs flex items-center justify-center mb-8">
            <p className="text-center font-bebas-neue text-4xl font-bold">
              Backend
            </p>
          </div>
          <SkillSlider skills={backend} />
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-[#FFFDF6] rounded-xl shadow-lg h-32 w-full max-w-xs flex items-center justify-center mb-8">
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
