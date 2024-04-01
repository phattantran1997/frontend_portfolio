import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Octokit } from "@octokit/rest";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProjectDetails() {
      setLoading(true);
      setError(null);

      const octokit = new Octokit({
        auth: import.meta.env.VITE_GIT_HUB_ACCESS_TOKEN,
      });

      try {
        const result = await octokit.request(
          `GET /repos/${import.meta.env.VITE_GIT_HUB_ACCOUNT}/${projectId}`,
          {
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
          }
        );
        setProject(result.data);
      } catch (error) {
        console.error("Error fetching project details:", error);
        setError("Failed to fetch project details.");
      }

      setLoading(false);
    }

    getProjectDetails();
  }, [projectId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details">
      <div className="container mx-auto">
        <div className="project-header">
          <h1 className="project-name">{project.name}</h1>
          <div className="project-language">
            <span>Language: </span>
            {project.language || "Unknown"}
          </div>
        </div>
        <div className="project-description">
          <h2>Description</h2>
          <p>{project.description || "No description provided."}</p>
        </div>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default ProjectDetails;