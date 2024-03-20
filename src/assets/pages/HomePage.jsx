import About from "../layout/components/About/About";
import About_detail from "../layout/components/About_detail/About_detail";
import Projects from "../layout/components/Projects/Projects";
import Skills from "../layout/components/Skills/Skills";

const HomePage = () => {
  return (
    <div>
      <About />
      <Projects />
      <Skills />
      <About_detail />
    </div>
  );
};

export default HomePage;
