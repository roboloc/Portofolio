import AboutMe from "./contents/about-me/page";
import Hero from "./contents/hero/page";
import Skill from "./contents/skill/page";
import Experience from "./contents/experience/page";
import Contact from "./contents/contact-me/page";
import Client from "./contents/client/page";
import Portfolio from "./contents/portofolio/page";

export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Skill></Skill>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Client></Client>
      <Contact></Contact>
    </main>
  );
}
