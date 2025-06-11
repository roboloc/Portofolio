"use client";
import { useState } from "react";
import Image from "next/image";

export default function Portfolio() {
  const [projects] = useState([
    {
      id: 1,
      title: "Share Stories Website",
      longExplanation:
        "This project is made to empower individual author to write their story. The tools that are used in this project is react and the framework is nextJS. The result of this project is individual author can post their stories and be seen on the website",
      imageUrl:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);

  return (
    <div
      id="portofolio"
      className="min-h-screen bg-[#FFFDF6] mt-25 text-gray-900 antialiased
     flex flex-col items-center  sm:px-6 lg:px-8"
    >
      <section className="w-full grid gap-10 md:grid-cols-1">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden relative grid grid-cols-2"
          >
            {project.imageUrl && (
              <Image
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-[33vw] col-start-1 col-end-2 flex object-cover rounded-l-xl"
                width={200}
                height={300}
              />
            )}
            <div className="p-8 col-start-2 col-end-3">
              <h2 className="text-3xl font-bold text-cyan-700 mb-4">
                {project.title}
              </h2>

              <div className="bg-cyan-50 mt-20 p-6 rounded-md">
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
  );
}
