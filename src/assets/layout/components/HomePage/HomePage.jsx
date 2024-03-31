import About from "../About/About";
import About_detail from "../About_detail/About_detail";
import Projects from "../Projects/ProjectsGithub";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import SocialActivities from "./Social/SocialActivities";
import Skills from "../Skills/Skills";

const HomePage = () => {
  return (
    <div>
      <About />
      {/* <Projects /> */}
      <Experience />
      <SocialActivities />
      <Skills />
      {/* <About_detail /> */}
    </div>
  );
};

export default HomePage;
