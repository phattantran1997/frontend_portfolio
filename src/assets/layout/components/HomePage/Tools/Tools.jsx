import React from 'react';
import './Tools.scss'; // Import the CSS file for styling

const Tools = () => {
  return (
    <div className="tools-container"> 
      <div className="title_header flex items-center">
        <h1>
          <span className="pr-1 text-black"></span>Tools
        </h1>
        
      </div>
      <div className="content">
        <ul>
          <li><strong>Operating System:</strong> Linux (over 2 years)</li>
          <li><strong>IDE:</strong> Visual Studio Code</li>
          <li><strong>Containerization:</strong> Docker / Rancher</li>
          <li><strong>Continuous Integration Software:</strong> Jenkins / Gitlab-CI / Travis</li>
          <li><strong>Project Management Software:</strong> Jira / Gitlab</li>
          <li><strong>Version Control System Software:</strong> Gitlab / Github</li>
        </ul>
      </div>
    </div>
  );
};

export default Tools;
