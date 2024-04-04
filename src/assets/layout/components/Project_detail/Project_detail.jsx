import React from "react";
import { useLocation } from "react-router-dom";

const ProjectDetail = () => {
  const location = useLocation();
  const projectName = location.pathname.split("/")[2]; // Extracting project name from URL
  const htmlUrl = `https://github.com/phattantran1997/${projectName}`; // Constructing GitHub repository URL

  console.log(htmlUrl);
  return (
	<div></div>
  );
};

export default ProjectDetail;
