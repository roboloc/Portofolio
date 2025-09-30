"use client";
import Image from "next/image";

export default function Experience() {
  return (
    <main
      id="experience"
      className="min-h-screen  bg-cyan-50 flex flex-col items-center justify-center py-16 px-4"
    >
      <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-black leading-tight drop-shadow-sm mb-4">
        Experience
      </p>

      <hr className="w-40 h-1 mx-auto my-4 bg-gray-700 border-0 rounded-sm"></hr>

      <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
        <div
          className="w-full max-w-lg mx-auto  bg-cyan-100
                     rounded-3xl shadow-lg p-6 sm:p-8 flex flex-col justify-center text-left
                     order-2 md:order-1 min-h-[40vh]"
        >
          <p className="font-bebas-neue text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Functional Intern
          </p>
          <span className="text-base text-gray-700 mb-1">Solutif</span>
          <span className="text-sm text-gray-600 mb-4">Jakarta, Indonesia</span>
          <p className="font-semibold text-base text-gray-800 mb-4">
            Sep 2023 - Feb 2024
          </p>

          <ul className="list-disc list-inside text-left text-sm sm:text-base text-gray-800 space-y-2">
            <li>Conduct manual testing</li>
            <li>Create a manual testing document</li>
            <li>Assisted in User Acceptance Testing</li>
            <li>
              Support clients to assist them if there is an error in the app
            </li>
          </ul>
        </div>

        <div
          className="relative w-full max-w-lg mx-auto bg-white
                     rounded-3xl shadow-lg overflow-hidden
                     order-1 md:order-2 h-64 sm:h-80 md:h-96 flex items-center justify-center"
        >
          <Image
            src="/Solutif.png"
            alt="Solutif"
            width={400}
            height={300}
            className="object-cover"
          ></Image>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
        <div
          className="w-full max-w-lg mx-auto bg-cyan-100
                     rounded-3xl shadow-lg p-6 sm:p-8 flex flex-col justify-center text-left
                     order-2 md:order-1 min-h-[40vh]"
        >
          <p className="font-bebas-neue text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            System Integration Test Engineer Intern
          </p>
          <span className="text-base text-gray-700 mb-1">
            Otoritas Jasa Keuangan
          </span>
          <span className="text-sm text-gray-600 mb-4">Jakarta, Indonesia</span>
          <p className="font-semibold text-base text-gray-800 mb-4">
            Feb 2023 - Mar 2023
          </p>
          <ul className="list-disc list-inside text-left text-sm sm:text-base text-gray-800 space-y-2">
            <li>
              Assisted testing using Katalon for the project to reduce
              repetition testing
            </li>
            <li>Assisted in documenting for manual testing</li>
            <li>Assisted manual testing</li>
          </ul>
        </div>
        <div
          className="relative w-full max-w-lg mx-auto 
                     rounded-3xl shadow-lg overflow-hidden
                     order-1 md:order-2 h-64 sm:h-80 md:h-96 flex items-center justify-center"
        >
          <Image
            src="/OJK.jpeg"
            alt="Otoritas Jasa Keuangan"
            fill
            className="object-fit"
          ></Image>
        </div>
      </div>
    </main>
  );
}
