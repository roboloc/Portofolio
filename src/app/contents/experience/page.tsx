"use client";
import Image from "next/image";

export default function Experience() {
  return (
    <main
      id="experience"
      className="min-h-screen bg-[#ECFEFF] flex flex-col items-center justify-center py-16 px-4"
    >
      <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-[#172B3A] leading-tight drop-shadow-sm mb-4">
        Experience
      </p>
      <hr className="w-16 h-1 mx-auto my-4 bg-[#0891B2] border-0 rounded-full" />

      {/* ─── Deciphex ─── */}
      <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
        {/* Text card */}
        <div className="relative pb-3 pr-3 w-full max-w-lg mx-auto order-2 md:order-1">
          {/* ✅ CHANGED: bg-cyan-300 → bg-[#67E8F9] (brand decorative accent) */}
          <div className="absolute -bottom-0 -right-0 w-full h-full rounded-3xl bg-[#67E8F9] opacity-50" />

          {/* ✅ CHANGED: bg-cyan-100 → bg-white (brand card surface) */}
          {/* ✅ CHANGED: shadow-lg → custom brand shadow via inline style */}
          <div
            className="relative bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-start text-left z-10 min-h-[40vh]"
            style={{
              boxShadow: "0 2px 12px 0 rgba(23,43,58,0.08)",
              border: "1px solid rgba(8,145,178,0.12)",
            }}
          >
            {/* ✅ CHANGED: text-gray-900 → text-[#172B3A] */}
            <p className="font-bebas-neue text-2xl sm:text-3xl font-bold text-[#172B3A] mb-1">
              Software Development Engineer in Test Intern
            </p>

            {/* ✅ CHANGED: text-gray-700 → text-[#0891B2] (company name in primary colour) */}
            <span className="text-base font-semibold text-[#0891B2] mb-0.5">
              Deciphex
            </span>

            {/* ✅ CHANGED: text-gray-600 → text-[#475569] */}
            <span className="text-sm text-[#475569] mb-3">Dublin, Ireland</span>

            {/* ✅ CHANGED: text-gray-800 → text-[#475569], removed font-semibold for lighter feel */}
            <span className="text-sm text-[#475569] mb-4">
              May 2026 – Oct 2026
            </span>

            {/* ✅ CHANGED: text-gray-800 → text-[#475569] */}
            <ul className="list-disc list-outside pl-5 text-left [hyphens:auto] text-sm sm:text-base text-[#475569] space-y-2">
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

        {/* Company logo card */}
        {/* ✅ CHANGED: border-1 border-black → brand border, shadow updated */}
        <div
          className="relative w-full max-w-lg mx-auto bg-white rounded-3xl overflow-hidden order-1 md:order-2 h-64 sm:h-80 md:h-96 flex items-center justify-center"
          style={{
            boxShadow: "0 2px 12px 0 rgba(23,43,58,0.08)",
            border: "1px solid rgba(8,145,178,0.12)",
          }}
        >
          <Image
            src="/Deciphex.png"
            alt="Deciphex"
            width={400}
            height={300}
            className="object-contain"
          />
        </div>
      </div>

      {/* ─── Solutif ─── */}
      <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
        <div className="relative pb-3 pr-3 w-full max-w-lg mx-auto order-2 md:order-1">
          <div className="absolute -bottom-0 -right-0 w-full h-full rounded-3xl bg-[#67E8F9] opacity-50" />
          <div
            className="relative bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-start text-left z-10 min-h-[40vh]"
            style={{
              boxShadow: "0 2px 12px 0 rgba(23,43,58,0.08)",
              border: "1px solid rgba(8,145,178,0.12)",
            }}
          >
            <p className="font-bebas-neue text-2xl sm:text-3xl font-bold text-[#172B3A] mb-1">
              Functional Intern
            </p>
            <span className="text-base font-semibold text-[#0891B2] mb-0.5">
              Solutif
            </span>
            <span className="text-sm text-[#475569] mb-3">
              Jakarta, Indonesia
            </span>
            <span className="text-sm text-[#475569] mb-4">
              Sep 2023 – Feb 2024
            </span>
            <ul className="list-disc list-outside pl-5 text-left [hyphens:auto] text-sm sm:text-base text-[#475569] space-y-2">
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

        <div
          className="relative w-full max-w-lg mx-auto bg-white rounded-3xl overflow-hidden order-1 md:order-2 h-64 sm:h-80 md:h-96 flex items-center justify-center"
          style={{
            boxShadow: "0 2px 12px 0 rgba(23,43,58,0.08)",
            border: "1px solid rgba(8,145,178,0.12)",
          }}
        >
          <Image
            src="/Solutif.png"
            alt="Solutif"
            width={400}
            height={300}
            className="object-contain"
          />
        </div>
      </div>

      {/* OJK  */}
      <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
        <div className="relative pb-3 pr-3 w-full max-w-lg mx-auto order-2 md:order-1">
          <div className="absolute -bottom-0 -right-0 w-full h-full rounded-3xl bg-[#67E8F9] opacity-50" />
          <div
            className="relative bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-start text-left z-10 min-h-[40vh]"
            style={{
              boxShadow: "0 2px 12px 0 rgba(23,43,58,0.08)",
              border: "1px solid rgba(8,145,178,0.12)",
            }}
          >
            <p className="font-bebas-neue text-2xl sm:text-3xl font-bold text-[#172B3A] mb-1">
              System Integration Test Engineer Intern
            </p>
            <span className="text-base font-semibold text-[#0891B2] mb-0.5">
              Otoritas Jasa Keuangan
            </span>
            <span className="text-sm text-[#475569] mb-3">
              Jakarta, Indonesia
            </span>
            <span className="text-sm text-[#475569] mb-4">
              Feb 2023 – Mar 2023
            </span>
            <ul className="list-disc list-outside pl-5 text-left [hyphens:auto] text-sm sm:text-base text-[#475569] space-y-2">
              <li>
                Supported early Katalon adoption and manual testing for an
                internal system
              </li>
            </ul>
          </div>
        </div>

        <div
          className="relative w-full max-w-lg mx-auto bg-white rounded-3xl overflow-hidden order-1 md:order-2 h-64 sm:h-80 md:h-96 flex items-center justify-center"
          style={{
            boxShadow: "0 2px 12px 0 rgba(23,43,58,0.08)",
            border: "1px solid rgba(8,145,178,0.12)",
          }}
        >
          <Image
            src="/OJK.jpeg"
            alt="Otoritas Jasa Keuangan"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </main>
  );
}
