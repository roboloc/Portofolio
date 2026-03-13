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
      title: "Task Management App",
      longExplanation:
        "A Python project that uses machine learning clustering to group house prices into three ranges: 100jt–16m, 16.1m–32m, and 32.1m–48m. The project uses Pandas for data processing and  clustering algorithms to categorize houses based on their price. The results are visualized using bar charts that show the number of houses in each price range across different areas in Jakarta (Daerah).",
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
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div
      id="portofolio"
      className="min-h-screen bg-[#FFFDF6] flex flex-col items-center justify-center py-16 px-4 sm:px-6"
    >
      <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-black leading-tight drop-shadow-sm mb-4">
        Portfolio
      </p>
      <hr className="w-40 h-1 mx-auto my-4 bg-gray-700 border-0 rounded-sm" />

      <div className="container mx-auto max-w-5xl mt-12">
        <section className="w-full grid gap-10 md:grid-cols-1">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1"
            >
              {project.imageUrl && (
                <div className="p-4 flex items-center">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-auto rounded-lg"
                    width={900}
                    height={700}
                  />
                </div>
              )}
              <div className="p-8 flex flex-col">
                <h2 className="text-3xl font-bold text-cyan-700 mb-4">
                  {project.title}
                </h2>

                <div className="bg-cyan-50 p-6 rounded-md flex-grow flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-cyan-600 mb-3">
                    Detailed Explanation
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    {project.longExplanation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            {/* Previous Button */}
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-cyan-300 text-cyan-700 font-semibold
                         hover:bg-cyan-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              ← Prev
            </button>

            {/* Page Number Buttons */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-10 h-10 rounded-lg font-bold transition-colors border
                  ${
                    currentPage === page
                      ? "bg-cyan-600 text-white border-cyan-600"
                      : "border-cyan-300 text-cyan-700 hover:bg-cyan-100"
                  }`}
              >
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-cyan-300 text-cyan-700 font-semibold
                         hover:bg-cyan-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next →
            </button>
          </div>
        )}

        {/* Page indicator */}
        <p className="text-center text-gray-500 mt-4 text-sm">
          Project {startIndex + 1}–
          {Math.min(startIndex + PROJECTS_PER_PAGE, projects.length)} of{" "}
          {projects.length}
        </p>
      </div>
    </div>
  );
}
