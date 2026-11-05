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
        {/* Solutif - text card only */}
        <div className="relative pb-3 pr-3 w-full max-w-lg mx-auto order-2 md:order-1">
          <div className="absolute -bottom-0 -right-0 w-full h-full rounded-3xl bg-cyan-300 opacity-60" />
          <div className="relative bg-cyan-100 rounded-3xl shadow-lg p-6 sm:p-8 flex flex-col justify-start text-left z-10 min-h-[40vh]">
            <p className="font-bebas-neue text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Software Development Engineer in Test Intern
            </p>
            <span className="text-base text-gray-700 mb-1">Deciphex</span>
            <span className="text-sm text-gray-600 mb-4">Dublin, Ireland</span>
            <p className="font-semibold text-base text-gray-800 mb-4">
              May 2026 - Oct 2026
            </p>
            <ul className="list-disc list-outside  pl-5 text-left [hyphens:auto] text-sm sm:text-base text-gray-800 space-y-2">
              <li>
                Implemented an agentic AI workflow to generate and integrate
                Playwright test plans and code, reviewing and refactoring all
                output before merging
              </li>
              <li>
                Increased UI and API test coverage from 25% to 100% across a
                healthcare web app, writing around 300 test cases with reusable
                helpers
              </li>
              <li>
                Investigated test failures in GitLab CI pipeline and refactored
                affected tests to run correctly in the environment
              </li>
              <li>
                Performed manual and automated regression testing, tracking
                confirmed defects end-to-end in ClickUp
              </li>
            </ul>
          </div>
        </div>
        {/* Deciphex image */}
        <div
          className="relative w-full max-w-lg mx-auto bg-white
                rounded-3xl shadow-lg overflow-hidden border-1 border-black
                order-1 md:order-2 h-64 sm:h-80 md:h-96 flex items-center justify-center"
        >
          <Image
            src="/Deciphex.png"
            alt="Deciphex"
            width={400}
            height={300}
            className="object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
        {/* Solutif - text card only */}
        <div className="relative pb-3 pr-3 w-full max-w-lg mx-auto order-2 md:order-1">
          <div className="absolute -bottom-0 -right-0 w-full h-full rounded-3xl bg-cyan-300 opacity-60" />
          <div className="relative bg-cyan-100 rounded-3xl shadow-lg p-6 sm:p-8 flex flex-col justify-start text-left z-10 min-h-[40vh]">
            <p className="font-bebas-neue text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Functional Intern
            </p>
            <span className="text-base text-gray-700 mb-1">Solutif</span>
            <span className="text-sm text-gray-600 mb-4">
              Jakarta, Indonesia
            </span>
            <p className="font-semibold text-base text-gray-800 mb-4">
              Sep 2023 - Feb 2024
            </p>
            <ul className="list-disc list-outside pl-5 text-left text-sm sm:text-base [hyphens:auto] text-gray-800 space-y-2">
              <li>
                Tested a B2B e-commerce web app manually using test cases,
                logging and tracking defects in Jira
              </li>
              <li>
                Investigated customer-reported bugs, triaged confirmed issues
                and handed them to the dev team with clear documentation in Jira
              </li>
              <li>
                Supported UAT sessions with end users, checking behaviour before
                releases
              </li>
            </ul>
          </div>
        </div>
        {/* Solutif image */}
        <div
          className="relative w-full max-w-lg mx-auto bg-white
                rounded-3xl shadow-lg overflow-hidden border-1 border-black
                order-1 md:order-2 h-64 sm:h-80 md:h-96 flex items-center justify-center"
        >
          <Image
            src="/Solutif.png"
            alt="Solutif"
            width={400}
            height={300}
            className="object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
        {/* OJK - text card only */}
        <div className="relative pb-3 pr-3 w-full max-w-lg mx-auto order-2 md:order-1">
          <div className="absolute -bottom-0 -right-0 w-full h-full rounded-3xl bg-cyan-300 opacity-60" />
          <div className="relative bg-cyan-100 rounded-3xl shadow-lg p-6 sm:p-8 flex flex-col justify-start text-left z-10 min-h-[40vh]">
            <p className="font-bebas-neue text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              System Integration Test Engineer Intern
            </p>
            <span className="text-base text-gray-700 mb-1">
              Otoritas Jasa Keuangan
            </span>
            <span className="text-sm text-gray-600 mb-4">
              Jakarta, Indonesia
            </span>
            <p className="font-semibold text-base text-gray-800 mb-4">
              Feb 2023 - Mar 2023
            </p>
            <ul className="list-disc list-outside pl-5 text-left [hyphens:auto] text-sm sm:text-base text-gray-800 space-y-2">
              <li>
                Supported early Katalon adoption and manual testing for an
                internal system
              </li>
            </ul>
          </div>
        </div>

        {/* OJK image */}
        <div
          className="relative w-full max-w-lg mx-auto
                rounded-3xl shadow-lg overflow-hidden border-1 border-black
                order-1 md:order-2 h-64 sm:h-80 md:h-96 flex items-center justify-center"
        >
          <Image
            src="/OJK.jpeg"
            alt="Otoritas Jasa Keuangan"
            fill
            className="object-fit"
          />
        </div>
      </div>
    </main>
  );
}
