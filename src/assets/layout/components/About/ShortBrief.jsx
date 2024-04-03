import avatar from "./images/avatar2.png";
import avatar_dots from "./images/avatar_dots.png";
import avatar_logo from "./images/avatar_logo.png";
import quote from "./images/test.jpeg";
import "./about.scss";
import { NavLink } from "react-router-dom";

const ShortBrief = () => {
  return (
    <>
      <div className="about pt-20">
        <div className="container mx-auto">
          <div className="about_wrapper">
            <div className="about_content flex justify-between items-center">
              <div className="about_left w-3/5 pr-20">
                <h5 className="title_sub">Welcome!</h5>
                <h3 className="title_main">
                  I am <span>a </span>
                  <span className="title">Software Engineer</span>
                </h3>
                <p className="title_item">
                Meticulous Software Engineer with more 3 years of experience designing, testing, and developing software solutions. In- depth understanding of software architect technologies focusing on delivering innovative business solutions. Excels in fast-paced, high-energy and deadline-driven environments with a willingness to take on additional tasks.
                </p>
                <NavLink to="/contact" className="btn_style">
                  Contact me!!
                </NavLink>
              </div>

              <div className="about_right w-1/5 ">
                <div className="avatar_wrapper">
                  <img className="avatar " src={avatar} alt="avatar" />
                </div>
              </div>
            </div>
            <div className="about_quote px-5 py-10">
              <img className="mx-auto" src={quote} alt="quote" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortBrief;
