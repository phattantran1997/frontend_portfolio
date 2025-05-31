import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faDatabase, faCloud, faServer } from "@fortawesome/free-solid-svg-icons";
import "./Skills.scss";
import { faJs, faReact, faAngular, faAws } from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <>
      <div className="skill">
        <div className="title_header flex items-center">
          <h1><span className="pr-1 text-black"></span>Skills</h1>
        </div>

        <div className="skill_content flex justify-center">
          <ul className="skill_list">
            <li className="skill_item mb-10 py-3 px-5 flex items-center gap-1">
              <span className="skill_title title_sub pr-2">.NET / C#</span>
              <span className="title_item mx-1 px-4 py-1">Entity Framework</span>
              <span className="title_item mx-1 px-4 py-1">REST API</span>
              <span className="title_item mx-1 px-4 py-1">JWT / OAuth2</span>
              <span className="title_item mx-1 px-4 py-1">WebSocket</span>
              <span className="title_item mx-1 px-4 py-1">AutoMapper</span>
              <span className="title_item mx-1 px-4 py-1">Serilog</span>
            </li>

            <li className="skill_item mb-10 py-3 px-5 flex items-center gap-1">
              <span className="skill_title title_sub pr-2"><FontAwesomeIcon icon={faReact} /> React</span>
              <span className="title_item mx-1 px-4 py-1">React Router</span>
              <span className="title_item mx-1 px-4 py-1">React Redux</span>
              <span className="title_item mx-1 px-4 py-1">React Hooks</span>
              <span className="title_item mx-1 px-4 py-1">Ant Design</span>
              <span className="title_item mx-1 px-4 py-1">Tailwind CSS</span>
            </li>

            <li className="skill_item mb-10 py-3 px-5 flex items-center gap-1">
              <span className="skill_title title_sub pr-2"><FontAwesomeIcon icon={faAngular} /> Angular</span>
              <span className="title_item mx-1 px-4 py-1">Angular Material</span>
              <span className="title_item mx-1 px-4 py-1">RxJS</span>
              <span className="title_item mx-1 px-4 py-1">NgRx</span>
            </li>

            <li className="skill_item mb-10 py-3 px-5 flex items-center gap-1">
              <span className="skill_title title_sub pr-2"><FontAwesomeIcon icon={faJs} /> JavaScript</span>
              <span className="title_item mx-1 px-4 py-1">ES6+</span>
              <span className="title_item mx-1 px-4 py-1">Axios / Fetch</span>
              <span className="title_item mx-1 px-4 py-1">AJAX</span>
            </li>

            <li className="skill_item mb-10 py-3 px-5 flex items-center gap-1">
              <span className="skill_title title_sub pr-2"><FontAwesomeIcon icon={faDatabase} /> Databases</span>
              <span className="title_item mx-1 px-4 py-1">PostgreSQL</span>
              <span className="title_item mx-1 px-4 py-1">MySQL</span>
              <span className="title_item mx-1 px-4 py-1">SQLite</span>
              <span className="title_item mx-1 px-4 py-1">MongoDB</span>
            </li>

            <li className="skill_item mb-10 py-3 px-5 flex items-center gap-1">
              <span className="skill_title title_sub pr-2"><FontAwesomeIcon icon={faServer} /> DevOps</span>
              <span className="title_item mx-1 px-4 py-1">Linux</span>
              <span className="title_item mx-1 px-4 py-1">Docker</span>
              <span className="title_item mx-1 px-4 py-1">GitHub Actions</span>
              <span className="title_item mx-1 px-4 py-1">Jenkins</span>
              <span className="title_item mx-1 px-4 py-1">CI/CD</span>
            </li>

            <li className="skill_item mb-10 py-3 px-5 flex items-center gap-1">
              <span className="skill_title title_sub pr-2"><FontAwesomeIcon icon={faCloud} /> Cloud & API</span>
              <span className="title_item mx-1 px-4 py-1"><FontAwesomeIcon icon={faAws} /> AWS</span>
              <span className="title_item mx-1 px-4 py-1">GraphQL</span>
              <span className="title_item mx-1 px-4 py-1">RESTful APIs</span>
              <span className="title_item mx-1 px-4 py-1">WebSocket</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Skills;
