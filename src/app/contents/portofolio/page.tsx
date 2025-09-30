"use client";
import { useState } from "react";
import Image from "next/image";

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
  ]);

  return (
    <div
      id="portofolio"
      className="min-h-screen bg-[#FFFDF6] flex flex-col items-center justify-center py-16 px-4 sm:px-6"
    >
      <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-black leading-tight drop-shadow-sm mb-4">
        Portfolio
      </p>
      <hr className="w-40 h-1 mx-auto my-4 bg-gray-700 border-0 rounded-sm"></hr>

      <div className="container mx-auto max-w-5xl mt-12">
        <section className="w-full grid gap-10 md:grid-cols-1">
          {projects.map((project) => (
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
      </div>
    </div>
  );
}
