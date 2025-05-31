import avatar from "./images/avatar2.png";
import quote from "./images/test.jpeg";
import "./about.scss";
import { NavLink } from "react-router-dom";
import resume from './resume/Lincoln-Resume.pdf';


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
                Accomplished Full-Stack Software Engineer with over 4 years of experience designing, building, and optimizing innovative business solutions. Expert in modern software architecture and passionate about delivering high-impact results in fast-paced, deadline-driven environments. Renowned for adaptability, technical depth, and a proactive approach to tackling complex challenges.
                </p>
                <NavLink to="/contact" className="btn_style">
                  Contact me!!
                </NavLink>
                <a href={resume} download className="btn_style">
                  Download my Resume
                </a>
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
