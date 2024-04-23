import React from "react";
import { useLocation , useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faStar,
  faCalendarAlt,
  faArrowLeft,
  faExclamationTriangle,
  faCode,
  faBookOpen,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import "./Project_detail.scss";

const ProjectDetail = () => {
  const location = useLocation();
  const projectDetails = location.state?.projectDetails;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="project-detail pt-20 container mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button
          className="btn bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors flex items-center"
          onClick={handleGoBack}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back
        </button>
      </div>
      {projectDetails && (
        <div className="card bg-white shadow-md rounded-md overflow-hidden p-4">
          <h1 className="text-2xl font-bold mb-2">{projectDetails.name}</h1>
          <div className="flex items-center mb-2">
            <span className="project-language bg-gray-200 text-gray-700 py-1 px-2 rounded-md mr-2">
              {projectDetails.language !== null ? projectDetails.language : "Unknown"}
            </span>
            <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1" />
            <span>{projectDetails.stargazers_count}</span>
            <FontAwesomeIcon icon={faCodeBranch} className="text-purple-600 ml-2 mr-1" />
            <span>{projectDetails.forks_count}</span>
          </div>
          <p className="project-description mb-4">{projectDetails.description || "No description provided."}</p>
          <div className="flex items-center text-gray-600 mb-2">
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
            <span>Created: {new Date(projectDetails.created_at).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center text-gray-600 mb-2">
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
            <span>Last Updated: {new Date(projectDetails.updated_at).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center text-gray-600 mb-2">
            <FontAwesomeIcon icon={faCode} className="mr-1" />
            <span>Default Branch: {projectDetails.default_branch}</span>
          </div>
          {projectDetails.homepage && (
            <div className="flex items-center text-gray-600 mb-2">
              <FontAwesomeIcon icon={faBookOpen} className="mr-1" />
              <a href={projectDetails.homepage} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
                Homepage
              </a>
            </div>
          )}
          {projectDetails.has_issues && (
            <div className="flex items-center text-gray-600 mb-2">
              <FontAwesomeIcon icon={faExclamationTriangle} className="mr-1" />
              <span>{projectDetails.open_issues_count} Open Issues</span>
            </div>
          )}
          {projectDetails.has_wiki && (
            <div className="flex items-center text-gray-600 mb-2">
              <FontAwesomeIcon icon={faBookOpen} className="mr-1" />
              <span>Wiki Available</span>
            </div>
          )}
          <div className="flex items-center text-gray-600 mb-2">
            <FontAwesomeIcon icon={faUserFriends} className="mr-1" />
            <span>{projectDetails.watchers_count} Watchers</span>
          </div>
          <a
            href={projectDetails.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
          >
            Go to Repository
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;