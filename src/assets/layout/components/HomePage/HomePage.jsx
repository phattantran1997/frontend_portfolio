import Experience from "./Experience/Experience";
import Skills from "./Skills/Skills";
import Tools from "./Tools/Tools";
import Language from "./Language/Language";
import Interests from "./Interests/Interests";
import ShortBrief from "../About/ShortBrief";

const HomePage = () => {
  return (
    <div>
      <ShortBrief />
      <Experience />
      <Skills />
      <Tools></Tools>
      <Language></Language>
      <Interests></Interests>
    </div>
  );
};

export default HomePage;
