import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.scss';
const Navbar = () => {
  const [navbarClass, setNavbarClass] = useState("");
  const [showMenu, setShowMenu] = useState(false);

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

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`${navbarClass} fixed top-0 left-0 right-0 z-50`}>
      <nav>
        <div className="nav-items container">
          <div className="logo">
            <a href="/">
              <h1>Lincoln{"'"}s Tran 🌸 </h1>
            </a>
          </div>
          <div className="navbar-toggle" onClick={toggleMenu}>
            <i className={`fas fa-${showMenu ? "times" : "bars"}`}></i>
          </div>
          <ul className={`navbar_content ${showMenu ? "show" : ""}`}>
            <li>
              <NavLink to="/" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={toggleMenu}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/publication" onClick={toggleMenu}>
                Publications
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={toggleMenu}>
                About
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/blog" onClick={toggleMenu}>
                Blogs
              </NavLink> */}
            {/* </li> */}
            <li>
              <NavLink to="/contact" onClick={toggleMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;