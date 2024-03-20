import avatar from "./images/avatar.png";
import avatar_dots from "./images/avatar_dots.png";
import avatar_logo from "./images/avatar_logo.png";
import quote from "./images/steve_quote.jpg";
import "./about.scss";

const About = () => {
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
                <a href="" className="btn_style">
                  Contact me!!
                </a>
              </div>

              <div className="about_right w-2/5 relative">
                <div className="avatar_wrapper">
                  <img className="avatar relative" src={avatar} alt="avatar" />
                  <img
                    className="avatar_dots absolute"
                    src={avatar_dots}
                    alt="avatar_dots"
                  />
                  <img
                    className="avatar_logo absolute"
                    src={avatar_logo}
                    alt="avatar_logo"
                  />
                </div>
              </div>
            </div>
            <div className="about_quote px-5 py-10">
              <img width={300} className="mx-auto" src={quote} alt="quote" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
