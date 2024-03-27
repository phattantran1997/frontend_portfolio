import { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import "./projects.scss";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    async function getListProjectFromGitHub() {
      const octokit = new Octokit({
        auth: import.meta.env.VITE_GIT_HUB_ACCESS_TOKEN
      });

      try {
        const result = await octokit.request(`GET /users/${import.meta.env.VITE_GIT_HUB_ACCOUNT}/repos`, {
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        });
        console.log(result.data);
        setProjectList(result.data);
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      }
    }

    getListProjectFromGitHub();
  }, []);

  return (
    <div className="project pt-20">
      <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="left  w-2/3 flex items-center gap-2">
              <h2 className="text-black">
                <span>#</span>projects GitHub
              </h2>
              <div className="line w-2/3 h-px "></div>
            </div>
        </div>
        <div className="projects-container">
          {projectList.length === 0 ? (<div />) : (
            projectList.map((project) => (
              <div key={project.id} className="card">
                {/* <img src={project.image.url} alt="" className="project-img" /> */}
                <div className="card-body">
                  <div className="content-text">
                    <h2 className="project-name">{project.name.toUpperCase()}</h2>
                    <span className="project-language">{project.language!==null ? project.language : "Unknown"}</span>
                    <br />
                    <span className="project-language">Description: {project.description !==null ? project.description : "Nothing to show"}</span>
                  </div>
                  <Link to={`/projects/${project.id}`}>
                    <div className="btn">View Details</div>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;