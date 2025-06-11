import Image from "next/image";
export default function Hero() {
  return (
    <main className="min-h-screen bg-cyan-50 flex items-center justify-center py-10 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col justify-center text-center md:text-left order-2 md:order-1">
          <p className="font-bebas-neue text-4xl sm:text-5xl lg:text-7xl font-extrabold text-black leading-tight drop-shadow-md mb-2">
            <span>I&apos;m Rafif Krishna Ismail</span>
          </p>

          <p className="font-bebas-neue text-2xl sm:text-3xl lg:text-5xl font-semibold text-black leading-tight drop-shadow-sm mt-2 md:ml-20">
            Software Engineer
          </p>
        </div>

        <div className="relative flex justify-center md:justify-center order-1 md:order-2">
          <div className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[450px] rounded-xl shadow-2xl overflow-hidden z-20">
            <Image
              src="/profile_head.jpg"
              alt="profile_pitcure"
              fill
              className="object-cover "
            />
          </div>

          <div
            className="absolute top-0.5 left-0.5  w-48 h-48 sm:w-64 sm:h-64 rounded-3xl bg-gradient-to-br
           from-cyan-400 to-cyan-200 opacity-70 z-10 hidden md:block shadow-lg"
          ></div>

          <div
            className="absolute bottom-2 right-0.5 w-48 h-48 sm:w-64 sm:h-64 rounded-3xl bg-gradient-to-tl
           from-cyan-400 to-cyan-200 opacity-70 z-10 hidden md:block shadow-lg"
          ></div>
        </div>
      </div>
    </main>
  );
}
