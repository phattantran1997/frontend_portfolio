import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./Skills.scss";
import { faJs, faReact, faAngular } from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <>
      <div className="skill">
        <div className="title_header flex items-center">
          <h1>
            <span className="pr-1 text-black"></span>Skills
          </h1>
        </div>

        <div className="skill_content flex justify-center">
          <ul className="skill_list">
            <li className="skill_item mb-10 py-3 px-5 flex items-center gap-1">
              <span className="skill_title title_sub pr-2">
                .NET
              </span>
              <span className="title_item  mx-1 px-4 py-1">EF6</span>
              <span className="title_item  mx-1 px-4 py-1">Rest API</span>
              <span className="title_item  mx-1 px-4 py-1">SOAP</span>
              <span className="title_item  mx-1 px-4 py-1">Repository</span>
              <span className="title_item  mx-1 px-4 py-1">Web Socket</span>
              <span className="title_item  mx-1 px-4 py-1">Swagger</span>
              <span className="title_item  mx-1 px-4 py-1">Serilog</span>
              <span className="title_item  mx-1 px-4 py-1">AutoMapper</span>
            </li>
            <li className="skill_item mb-10 py-3 px-5 flex items-center gap-1">
              <span className="skill_title title_sub pr-2">
                <FontAwesomeIcon className="mr-1" icon={faAngular} />
                ANGULAR
              </span>
              <span className="title_item  mx-1 px-4 py-1">Angular Material</span>
              <span className="title_item  mx-1 px-4 py-1">AG Grid</span>
              <span className="title_item  mx-1 px-4 py-1">NgRx</span>
              <span className="title_item  mx-1 px-4 py-1">RxJS</span>
              <span className="title_item  mx-1 px-4 py-1">Angular CDK</span>
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

          </ul>
        </div>
      </div>
    </>
  );
};

export default Skills;
