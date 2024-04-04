import { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./projects.scss";
import { Link } from "react-router-dom";
import { faCodeBranch, faStar } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [projectList, setProjectList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("name");

  useEffect(() => {
    async function getListProjectFromGitHub() {
      const octokit = new Octokit({
        auth: import.meta.env.VITE_GIT_HUB_ACCESS_TOKEN,
      });

      try {
        const result = await octokit.request(
          `GET /users/${import.meta.env.VITE_GIT_HUB_ACCOUNT}/repos`,
          {
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
          }
        );
        setProjectList(result.data);
        console.log(result.data);
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      }
    }

    getListProjectFromGitHub();
  }, []);

  const filteredProjects = projectList.filter((project) => {
    const searchCriteria =
      filterBy === "name"
        ? project.name.toLowerCase().includes(searchTerm.toLowerCase())
        : project.language
        ? project.language.toLowerCase().includes(searchTerm.toLowerCase())
        : false;
    return searchCriteria;
  });

  const handleViewDetail = (projectURL) => {
    window.open(projectURL, "_blank");
  };

  return (
    <div className="project pt-20">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="title_header flex items-center">
            <FontAwesomeIcon icon={faGithub} className="mr-2 text-3xl" />
            <h1 className="text-2xl font-bold">GITHUB</h1>
          </div>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <option value="name">Name</option>
              <option value="language">Language</option>
            </select>
          </div>
        </div>
        <div className="projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center text-gray-500">No projects found</div>
          ) : (
            filteredProjects.map((project) => (
              <div key={project.id} className="card bg-white shadow-md rounded-md overflow-hidden">
                <div className="card-body p-4">
                  <div className="content-text">
                    <h2 className="project-name text-lg font-semibold mb-2">
                      {project.name.toUpperCase()}
                    </h2>
                    <div className="flex items-center mb-2">
                      <span className="project-language bg-gray-200 text-gray-700 py-1 px-2 rounded-md mr-2">
                        {project.language !== null ? project.language : "Unknown"}
                      </span>
                      <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1" />
                      <span>{project.stargazers_count}</span>
                      <FontAwesomeIcon icon={faCodeBranch} className="text-purple-600 ml-2 mr-1" />
                      <span>{project.forks_count}</span>
                    </div>
                    <p className="project-description mb-4">{project.description || "No description provided."}</p>
                  </div>
                  {/* <Link to={`/projects/${project.name}`}>
                    <div className="btn bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
                      View Details
                    </div>
                  </Link> */}

                  <button
                    className="btn bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
                    onClick={() => handleViewDetail(project.html_url)}
                  >
                    View Details
                  </button>
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