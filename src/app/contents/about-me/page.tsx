import Image from "next/image";

export default function AboutMe() {
  const imageUrl = {
    gmail: "https://logowik.com/content/uploads/images/gmail-new-icon5198.jpg",
    linkedin:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png",
    github:
      "https://static.vecteezy.com/system/resources/previews/016/833/872/non_2x/github-logo-git-hub-icon-on-white-background-free-vector.jpg",
  };
  return (
    <main
      id="about-me"
      className="min-h-screen bg-[#FFFDF6] flex items-center justify-center py-10 px-4 "
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div
          className=" bg-cyan-50 border border-cyan-100 rounded-xl shadow-lg p-6 md:p-10 flex flex-col justify-center
                     order-2 md:order-1 min-h-[50vh] md:min-h-[60vh]"
        >
          <p className="font-bold font-bebas-neue text-4xl sm:text-5xl lg:text-6xl text-black mb-6">
            About Me
          </p>
          <p className="text-black text-base sm:text-lg lg:text-xl leading-relaxed max-w-prose mb-6">
            A resilient and strong-willed individual who is strongly interested
            in machine learning and deep learning. A Computer Science graduate
            with a GPA of 3.44 and practical experience as an intern for testing
            applications. Good technical skills, such as problem-solving and
            programming skills.
          </p>

          <div className="mt-6 flex space-x-4">
            {" "}
            <span
              className="w-10 h-10 rounded-full border-2 border-black inline-flex items-center justify-center
                         bg-amber-300 relative overflow-hidden flex-shrink-0 shadow-md transform transition-transform duration-200 hover:scale-105"
            >
              <a
                href="https://mail.google.com/mail/u/0/?to=rafif1103@gmail.com&su=SUBJECT&body=BODY&fs=1&tf=cm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={imageUrl.gmail}
                  alt="gmail"
                  fill
                  className="object-cover"
                />
              </a>
            </span>
            <span
              className="w-10 h-10 rounded-full border-2 border-black inline-flex items-center justify-center
                         bg-amber-300 relative overflow-hidden flex-shrink-0 shadow-md transform transition-transform duration-200 hover:scale-105"
            >
              <a
                href="https://www.linkedin.com/in/rafif-krishna-ismail-5b3480252"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={imageUrl.linkedin}
                  alt="linkedin"
                  fill
                  className="object-cover"
                />
              </a>
            </span>
            <span
              className="w-10 h-10 rounded-full border-2 border-black inline-flex items-center justify-center
                         bg-amber-300 relative overflow-hidden flex-shrink-0 shadow-md transform transition-transform duration-200 hover:scale-105"
            >
              <a
                href="https://github.com/roboloc?tab=overview&from=2025-06-01&to=2025-06-01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={imageUrl.github}
                  alt="github"
                  fill
                  className="object-cover"
                />
              </a>
            </span>
          </div>
        </div>

        <div
          className="relative w-full rounded-xl shadow-2xl overflow-hidden
                     order-1 md:order-2 h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] flex justify-center items-center"
        >
          <Image
            src="/profile_about.jpg"
            alt="picture_aboutme"
            fill
            className="object-cover object-right"
          />
        </div>
      </div>
    </main>
  );
}
