import { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./projects.scss";
import { useNavigate } from "react-router-dom";
import { faCodeBranch, faStar } from "@fortawesome/free-solid-svg-icons";
import outsource from "./outsource.json";

const PROJECTS_PER_PAGE = 6;

const Projects = () => {
  const [projectList, setProjectList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("name");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const username = import.meta.env.VITE_GIT_HUB_ACCOUNT;

  useEffect(() => {
    async function getListProjectFromGitHub() {
      setLoading(true);
      const octokit = new Octokit({
        auth: import.meta.env.VITE_GIT_HUB_ACCESS_TOKEN,
      });
      try {
        const result = await octokit.request(
          `GET /users/${username}/repos`,
          {
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
          }
        );
        setProjectList(result.data);
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
      } finally {
        setLoading(false);
      }
    }
    getListProjectFromGitHub();
  }, [username]);

  const filteredProjects = projectList.filter((project) => {
    const searchCriteria =
      filterBy === "name"
        ? project.name.toLowerCase().includes(searchTerm.toLowerCase())
        : project.language
        ? project.language.toLowerCase().includes(searchTerm.toLowerCase())
        : false;
    return searchCriteria;
  });

  // Paging logic
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const pagedProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  const handleViewDetail = (projectId) => {
    const filteredProject = projectList.find((project) => project.id === projectId);
    if (filteredProject) {
      navigate(`/projects/${projectId}`, { state: { projectDetails: filteredProject } });
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="project pt-20">
      <div className="container mx-auto">
        {/* 1. Contribution Section */}
        <div className="contributions-section mt-6 mb-6 p-4 bg-gray-100 rounded-md shadow">
          <h2 className="text-lg font-semibold mb-2">Total Contributions (last year)</h2>
          <div className="mt-4 flex justify-center">
            <img
              src={`http://ghchart.rshah.org/${username}`}
              alt="Lincoln chart"
              style={{ maxWidth: '100%', height: 'auto', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
            />
          </div>
        </div>
        {/* 2. Personal Project Section */}
        <div className="flex justify-between items-center">
          <div className="title_header flex items-center">
            <FontAwesomeIcon icon={faGithub} className="mr-2 text-3xl" />
            <h1 className="text-2xl font-bold">Personal Projects</h1>
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
          {loading ? (
            <div className="text-center text-gray-500 col-span-3">Loading projects...</div>
          ) : pagedProjects.length === 0 ? (
            <div className="text-center text-gray-500 col-span-3">No projects found</div>
          ) : (
            pagedProjects.map((project) => (
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
                  <button
                    className="btn bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
                    onClick={() => handleViewDetail(project.id)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        {/* Paging Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6">
            <nav className="inline-flex rounded-md shadow-sm" aria-label="Pagination">
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx + 1}
                  onClick={() => handlePageChange(idx + 1)}
                  className={`px-4 py-2 border border-gray-300 text-sm font-medium ${currentPage === idx + 1 ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                >
                  {idx + 1}
                </button>
              ))}
            </nav>
          </div>
        )}
        {/* 3. Opensource Section */}
        <div className="opensource-section mt-12">
          <h2 className="text-2xl font-bold mb-6">Opensource</h2>
          <div className="projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outsource.map((item) => (
              <div key={item.id} className="card bg-white shadow-md rounded-md overflow-hidden">
                <div className="card-body p-4">
                  <div className="content-text">
                    <h2 className="project-name text-lg font-semibold mb-2">
                      {item.name}
                    </h2>
                    <p className="project-description mb-4">{item.description}</p>
                    {item.image && (
                      <div className="mb-4 flex justify-center">
                        <img src={item.image} alt={item.name} style={{ maxWidth: '100%', maxHeight: '120px', borderRadius: '8px' }} />
                      </div>
                    )}
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900 transition-colors"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;