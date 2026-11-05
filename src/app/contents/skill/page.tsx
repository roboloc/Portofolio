import SkillSlider from "@/components/skill-slider";

const categories = [
  {
    label: "Hard Skills",
    skills: [
      { name: "Python", icon: "https://cdn.simpleicons.org/python/black" },
      {
        name: "TypeScript",
        icon: "https://cdn.simpleicons.org/typescript/black",
      },
      { name: "SQL", icon: "https://cdn.simpleicons.org/postgresql/black" },
      { name: "Tableau", icon: "/Tableau.png" },
      { name: "React", icon: "https://cdn.simpleicons.org/react/black" },
      { name: "Express.js", icon: "https://cdn.simpleicons.org/express/black" },
    ],
  },
  {
    label: "Testing & Tools",
    skills: [
      { name: "Jira", icon: "https://cdn.simpleicons.org/jira/black" },
      { name: "ClickUp", icon: "https://cdn.simpleicons.org/clickup/black" },
      { name: "GitLab", icon: "https://cdn.simpleicons.org/gitlab/black" },
      {
        name: "Playwright",
        icon: "/Playwright.png", // drop playwright.png in /public
      },
      { name: "Katalon", icon: "/Katalon.png" }, // drop katalon.png in /public
    ],
  },
];

export default function Skill() {
  return (
    <main
      id="skill"
      className="bg-cyan-50 flex flex-col items-center justify-center py-16 px-4 sm:px-6"
    >
      <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-black leading-tight drop-shadow-sm">
        Skills
      </p>
      <hr className="w-40 h-1 mx-auto my-4 bg-gray-700 border-0 rounded-sm" />

      <div className="container mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
        {categories.map((cat) => (
          <div key={cat.label} className="flex flex-col items-center gap-8">
            {/* Category header with cyan offset box */}
            <div className="relative w-full">
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl bg-cyan-300 opacity-60" />
              <div className="relative bg-cyan-100 rounded-2xl shadow-lg h-24 w-full flex items-center justify-center z-10">
                <p className="font-bebas-neue text-4xl font-bold">
                  {cat.label}
                </p>
              </div>
            </div>

            <SkillSlider skills={cat.skills} />
          </div>
        ))}
      </div>
    </main>
  );
}
