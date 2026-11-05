import Image from "next/image";

export default function Hero() {
  return (
    <main
      id="hero"
      className="bg-cyan-50 flex flex-col items-center justify-center py-16 px-4 sm:px-6"
    >
      <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text card */}
        <div className="relative pb-3 pl-3 order-2 md:order-1 w-full">
          <div className="absolute -bottom-0 -left-0 w-full h-full rounded-3xl bg-cyan-300 opacity-60" />

          <div
            className="relative bg-white rounded-3xl shadow-lg 
                          px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10
                          z-10 flex flex-col justify-center text-left"
          >
            <p className="font-extrabold text-gray-800 leading-tight">
              <span className="block text-3xl sm:text-4xl lg:text-5xl">
                Rafif
              </span>
              <span className="block text-xl sm:text-2xl lg:text-3xl">
                Krishna Ismail
              </span>
            </p>

            <hr className="w-full max-w-80 h-1 bg-cyan-500 border-0 rounded my-4" />

            <p
              className="text-base sm:text-lg lg:text-xl font-semibold 
                          text-cyan-700 leading-snug"
            >
              Software Development Engineer in Test
            </p>
          </div>
        </div>

        {/* Photo side */}
        <div className="relative flex justify-center order-1 md:order-2 py-8 px-8">
          <div className="absolute top-0 left-0 w-36 h-36 sm:w-48 sm:h-48 rounded-3xl bg-cyan-300 opacity-60 z-0" />

          <div className="absolute bottom-0 right-0 w-36 h-36 sm:w-48 sm:h-48 rounded-3xl bg-cyan-300 opacity-60 z-0" />

          <div className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[450px] rounded-2xl shadow-2xl overflow-hidden z-10">
            <Image
              src="/profile_head.jpg"
              alt="profile picture"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
