import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project_item = ({ img, langs, title, disc }) => {
  return (
    <>
      <div className="project_item border mx-auto w-[90%] md:w-[48%] lg:w-[30%]">
        <div className="project_img">
          <img className="w-full" src={img} alt="" />
        </div>
        <div className="project_tech border py-2">
          {langs.map((index) => {
            return (
              <span key={index} className="pl-1 text-white">
                {index}
                {","}
              </span>
            );
          })}
        </div>
        <div className="project_detail p-4">
          <div className="project_name">
            <h3 className="title_sub text-white">{title}</h3>
          </div>
          <div className="project_desc">
            <h5 className="title_item py-4 text-white">{disc}</h5>
          </div>
          <div className="project_link flex ">
            <div className="link_git">
              <div className="btn_style ">
                Github
                <FontAwesomeIcon className="logo_icon pl-2" icon={faGithub} />
              </div>
            </div>
            <div className="link_deploy">
              <div className="btn_style flex">
                Live Demo{" "}
                <span>
                  <FontAwesomeIcon className="logo_icon pl-2" icon={faGlobe} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Project_item.propTypes = {
  img: PropTypes.string,
  langs: PropTypes.array,
  title: PropTypes.string,
  disc: PropTypes.string,
};

export default Project_item;
