import Projects from "../Projects/ProjectsGithub";
import Education from "./Tools/Tools";
import Experience from "./Experience/Experience";
import SocialActivities from "./Social/SocialActivities";
import Skills from "./Skills/Skills";
import Tools from "./Tools/Tools";
import Language from "./Language/Language";
import Interests from "./Interests/Interests";
import ShortBrief from "../About/ShortBrief";

const HomePage = () => {
  return (
    <div>
      <ShortBrief />
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
