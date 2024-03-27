import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [navbarClass, setNavbarClass] = useState("");
  const handleScroll = (navbarClass) => {
    if (navbarClass !== "headerScroll" && window.pageYOffset >= 50) {
      setNavbarClass("headerScroll");
    } else if (navbarClass === "headerScroll" && window.pageYOffset < 50) {
      setNavbarClass("");
    }
  };

  useEffect(() => {
    window.onscroll = () => {
      handleScroll(navbarClass);
    };
  }, [navbarClass]);
  return (
    <div className={navbarClass + " fixed top-0 left-0 right-0"}>
      <nav>
        <div className="nav-items container">
          <div className="logo">
            <a href="/">
              <h1>Tan Phat (Lincoln){"'"}s Portfolio</h1>
            </a>
          </div>
          <ul className="navbar_content flex justify-evenly">
            <li >
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li >
              <NavLink to="/publication ">Publications</NavLink>
            </li>
            <li >
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
