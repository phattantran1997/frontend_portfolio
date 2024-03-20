import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./Skills.scss";
import { faJs, faReact } from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <>
      <div className="skill">
        <div className="container mx-auto">
          <div className="skill_wrapper">
            <div className="skill_header w-2/3 flex items-center gap-2">
              <h2 className="title_sub">
                <span className="pr-1 text-white">#</span>skills
              </h2>
              <div className="line w-2/3 h-px "></div>
            </div>

            <div className="skill_content pt-10 flex justify-center">
              <ul className="skill_list">
                <li className="skill_item mb-10 py-3 px-5 flex items-center gap-1">
                  <span className="skill_title title_sub pr-2">
                    <FontAwesomeIcon className="mr-1" icon={faCode} />
                    HTML/CSS
                  </span>
                  <span className="title_item  mx-1 px-4 py-1">HTML5</span>
                  <span className="title_item  mx-1 px-4 py-1">PUG HTML</span>
                  <span className="title_item  mx-1 px-4 py-1">CSS3</span>
                  <span className="title_item  mx-1 px-4 py-1">SASS</span>
                  <span className="title_item  mx-1 px-4 py-1">Bootstrap</span>
                  <span className="title_item  mx-1 px-4 py-1">
                    TailwindCss
                  </span>
                  <span className="title_item  mx-1 px-4 py-1">Responsive</span>
                </li>
                <li className="skill_item mb-10 py-3 px-5 flex items-center gap-1">
                  <span className="skill_title title_sub pr-2">
                    <FontAwesomeIcon className="mr-1" icon={faJs} />
                    JAVASCRIPT
                  </span>
                  <span className="title_item  mx-1 px-4 py-1">ES5/ES6</span>
                  <span className="title_item  mx-1 px-4 py-1">JQUERY</span>
                  <span className="title_item  mx-1 px-4 py-1">
                    RESTFULL API
                  </span>
                  <span className="title_item  mx-1 px-4 py-1">AJAX</span>
                  <span className="title_item  mx-1 px-4 py-1">AXIOS</span>
                </li>
                <li className="skill_item mb-10 py-3 px-5 flex items-center gap-1">
                  <span className="skill_title title_sub pr-2">
                    <FontAwesomeIcon className="mr-1" icon={faReact} />
                    REACTJS
                  </span>
                  <span className="title_item  mx-1 px-4 py-1">
                    ReactJs Basic
                  </span>
                  <span className="title_item  mx-1 px-4 py-1">
                    React Router
                  </span>
                  <span className="title_item  mx-1 px-4 py-1">
                    React Redux
                  </span>
                  <span className="title_item  mx-1 px-4 py-1">React Hook</span>
                  <span className="title_item  mx-1 px-4 py-1">Antd</span>
                </li>
                <li className="skill_item mb-10 py-3 px-5 flex items-center gap-1">
                  <span className="skill_title title_sub pr-2">
                    <FontAwesomeIcon className="mr-1" icon={faCode} />
                    HTML/CSS
                  </span>
                  <span className="title_item  mx-1 px-4 py-1">HTML5</span>
                  <span className="title_item  mx-1 px-4 py-1">PUG HTML</span>
                  <span className="title_item  mx-1 px-4 py-1">CSS3</span>
                  <span className="title_item  mx-1 px-4 py-1">SASS</span>
                  <span className="title_item  mx-1 px-4 py-1">Bootstrap</span>
                  <span className="title_item  mx-1 px-4 py-1">
                    TailwindCss
                  </span>
                  <span className="title_item  mx-1 px-4 py-1">Responsive</span>
                </li>
                <li className="skill_item mb-10 py-3 px-5 flex items-center gap-1">
                  <span className="skill_title title_sub pr-2">
                    <FontAwesomeIcon className="mr-1" icon={faCode} />
                    HTML/CSS
                  </span>
                  <span className="title_item  mx-1 px-4 py-1">HTML5</span>
                  <span className="title_item  mx-1 px-4 py-1">PUG HTML</span>
                  <span className="title_item  mx-1 px-4 py-1">CSS3</span>
                  <span className="title_item  mx-1 px-4 py-1">SASS</span>
                  <span className="title_item  mx-1 px-4 py-1">Bootstrap</span>
                  <span className="title_item  mx-1 px-4 py-1">
                    TailwindCss
                  </span>
                  <span className="title_item  mx-1 px-4 py-1">Responsive</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
