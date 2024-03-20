import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import first from "./images/img1.png";
import second from "./images/img2.png";
import third from "./images/img3.png";
import "./projects.scss";
import Project_item from "../Project_item/Project_item";
import { Fragment } from "react";
const Projects = () => {
  const projectList = [
    {
      img: first,
      langs: ["html", "css", "javascript", "react", "tailwind css"],
      title: "ChertNodes",
      disc: "Minecraft servers hosting ",
    },
    {
      img: second,
      langs: ["html", "css", "javascript", "Node.js"],
      title: "ProtectX",
      disc: "Discord anti-crash bot ",
    },
    {
      img: third,
      langs: ["html", "css", "javascript", "Node.js", "python"],
      title: "Kahoot Answers Viewer",
      disc: "Get answers to your kahoot quiz ",
    },
  ];

  return (
    <>
      <div className="project pt-20">
        <div className="container mx-auto">
          <div className="project_wrapper">
            <div className="project_header">
              <div className="flex justify-between items-center">
                <div className="left w-2/3 flex items-center gap-2">
                  <h2 className="title_sub">
                    <span className="pr-1 text-white">#</span>projects
                  </h2>
                  <div className="line w-2/3 h-px "></div>
                </div>
                <div className="right">
                  <a className="showMore_btn" href="">
                    View all
                    <FontAwesomeIcon
                      className="logo_icon pl-2"
                      icon={faRightLong}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="project_content">
              <div className="project_list flex flex-wrap justify-between gap-4 py-12">
                {projectList.map(({ img, langs, title, disc }, index) => {
                  return (
                    <Fragment key={index}>
                      <Project_item
                        img={img}
                        langs={langs}
                        title={title}
                        disc={disc}
                      />
                    </Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
