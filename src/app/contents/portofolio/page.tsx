"use client";
import { useState } from "react";
import Image from "next/image";

const PROJECTS_PER_PAGE = 1;

export default function Portfolio() {
  const [projects] = useState([
    {
      id: 1,
      title: "Property Renting",
      longExplanation:
        "This project is to create a full stack website for renting property. The result of this project is customers can easily find and rent properties through the website. The website is built using Next.js for the frontend, Tailwind CSS for styling, and Node.js with Express.js for the backend. The database used is PostGres to store property data and user information.",
      imageUrl:
        "https://res.cloudinary.com/drarpvqyo/image/upload/v1759260420/Property_Renting_yygx65.png",
    },
    {
      id: 2,
      title: "Game Analytics Dashboard",
      longExplanation:
        "A dashboard built in Tableau to visualize video game analytics data. It shows critic scores, user scores, and sales broken down by genre, platform, and critic score ranges. The dashboard also includes interactive charts and filters so users can explore the data and better understand how critic scores affect game sales.",
      imageUrl:
        "https://res.cloudinary.com/drarpvqyo/image/upload/v1773416416/GameAnalytics_dprkvk.png",
    },
    {
      id: 3,
      title: "House Price Range Clustering",
      longExplanation:
        "A Python project that uses machine learning clustering to group house prices into three ranges: 100jt–16m, 16.1m–32m, and 32.1m–48m. The project uses Pandas for data processing and clustering algorithms to categorize houses based on their price. The results are visualized using bar charts that show the number of houses in each price range across different areas in Jakarta.",
      imageUrl:
        "https://res.cloudinary.com/drarpvqyo/image/upload/v1773417331/House_Price_Range._deznuf.png",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE,
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div
      id="portofolio"
      className="min-h-screen bg-[#FFFDF6] flex flex-col items-center justify-center py-16 px-4 sm:px-6"
    >
      <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-black leading-tight drop-shadow-sm">
        Portfolio
      </p>
      <hr className="w-40 h-1 mx-auto my-4 bg-gray-700 border-0 rounded-sm" />

      <div className="container mx-auto max-w-5xl mt-12">
        {currentProjects.map((project) => (
          <div
            key={project.id}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch"
          >
            {/* Image side */}
            <div className="relative pb-3 pr-3">
              <div className="relative rounded-3xl overflow-hidden shadow-lg z-10 bg-white h-80 sm:h-96">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>

            {/* Text side */}
            <div className="relative pb-3 pr-3">
              <div className="absolute -bottom-0 -right-0 w-full h-full rounded-3xl bg-cyan-300 opacity-60" />
              <div className="relative bg-cyan-100 rounded-3xl shadow-lg p-8 z-10 flex flex-col justify-center h-80 sm:h-96">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
                  {project.title}
                </h2>
                <p className="text-gray-800  text-justify [hyphens:auto] leading-relaxed text-sm sm:text-base overflow-auto">
                  {project.longExplanation}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-16">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-xl border-2 border-cyan-400 text-cyan-700 font-semibold
                         hover:bg-cyan-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              ← Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-10 h-10 rounded-xl font-bold transition-colors border-2
                  ${
                    currentPage === page
                      ? "bg-cyan-600 text-white border-cyan-600"
                      : "border-cyan-400 text-cyan-700 hover:bg-cyan-200"
                  }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-xl border-2 border-cyan-400 text-cyan-700 font-semibold
                         hover:bg-cyan-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next →
            </button>
          </div>
        )}

        <p className="text-center text-gray-500 mt-4 text-sm">
          Project {startIndex + 1}–
          {Math.min(startIndex + PROJECTS_PER_PAGE, projects.length)} of{" "}
          {projects.length}
        </p>
      </div>
    </div>
  );
}
