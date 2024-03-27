import About from "../layout/components/About/About";
import About_detail from "../layout/components/About_detail/About_detail";
import Projects from "../layout/components/Projects/ProjectsGithub";
import Education from "../layout/components/Resume/Education/Education";
import Experience from "../layout/components/Resume/Experience/Experience";
import SocialActivities from "../layout/components/Resume/Social/SocialActivities";
import Skills from "../layout/components/Skills/Skills";

const HomePage = () => {
  return (
    <div>
      <About />
      {/* <Projects /> */}
      <Education />
      <Experience />
      <SocialActivities />
      <Skills />
      {/* <About_detail /> */}
    </div>
  );
};

export default HomePage;
