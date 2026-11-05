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
      className="bg-[#FFFDF6] flex items-center justify-center py-16 px-4 sm:px-6"
    >
      <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text card with offset box */}
        <div className="relative pb-3 pr-3 order-2 md:order-1">
          <div className="absolute -bottom-0 -right-0 w-full h-full rounded-2xl bg-cyan-300 opacity-60" />
          <div className="relative bg-cyan-100 border border-cyan-100 rounded-xl shadow-lg p-6 md:p-10 flex flex-col justify-center z-10">
            <p className="font-bold font-bebas-neue text-4xl sm:text-5xl lg:text-6xl text-black mb-6">
              About Me
            </p>
            <p
              className="text-black text-justify [hyphens:auto] sm:text-lg lg:text-xl leading-relaxed max-w-prose mb-6"
              lang="en"
            >
              MSc Computer Science graduate from UCD, with hands-on experience
              in software testing and automation. At Deciphex, I worked with
              Playwright, UI/API testing, CI pipelines, regression testing,
              defect tracking, and UAT. I enjoy building quality into software
              and always give my best to whatever I'm working on.
            </p>
            <div className="mt-6 flex space-x-4">
              {[
                {
                  href: "https://mail.google.com/mail/u/0/?to=rafif1103@gmail.com&su=SUBJECT&body=BODY&fs=1&tf=cm",
                  src: imageUrl.gmail,
                  alt: "gmail",
                },
                {
                  href: "https://www.linkedin.com/in/rafif-krishna-ismail-5b3480252",
                  src: imageUrl.linkedin,
                  alt: "linkedin",
                },
                {
                  href: "https://github.com/roboloc?tab=overview&from=2025-06-01&to=2025-06-01",
                  src: imageUrl.github,
                  alt: "github",
                },
              ].map((link) => (
                <span
                  key={link.alt}
                  className="w-10 h-10 rounded-full border-2 border-black inline-flex items-center justify-center
                  bg-amber-300 relative overflow-hidden flex-shrink-0 shadow-md transform transition-transform duration-200 hover:scale-105"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={link.src}
                      alt={link.alt}
                      fill
                      className="object-cover"
                    />
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Photo */}
        <div
          className="relative w-full rounded-xl shadow-2xl overflow-hidden
             order-1 md:order-2 h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh]
             flex justify-center items-center"
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
