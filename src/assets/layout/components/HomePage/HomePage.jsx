import About from "../About/About";
import About_detail from "../About_detail/About_detail";
import Projects from "../Projects/ProjectsGithub";
import Education from "./Tools/Tools";
import Experience from "./Experience/Experience";
import SocialActivities from "./Social/SocialActivities";
import Skills from "./Skills/Skills";
import Tools from "./Tools/Tools";
import Language from "./Language/Language";
import Interests from "./Interests/Interests";

const HomePage = () => {
  return (
    <div>
      <About />
      {/* <Projects /> */}
      <Experience />
      <Skills />
      <Tools></Tools>
      <Language></Language>
      <Interests></Interests>
      {/* <About_detail /> */}
    </div>
  );
};

export default HomePage;
