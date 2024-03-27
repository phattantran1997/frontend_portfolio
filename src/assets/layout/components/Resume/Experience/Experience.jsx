import React from 'react';
import './Experience.css'; // Import the CSS file for Experience component
import premierductsLogo from './images/premierducts.png';

const Experience = () => {
  return (
    <div className="experience-container">
       <div className="container mx-auto">
       <div className="skill_header w-2/3 flex items-center gap-2">
        <h2 className="title_sub">
          <span className="pr-1 text-black">#</span>Experience
        </h2>
        <div className="line w-2/3 h-px "></div>
      </div>
      <div className="experience-container">
        <div className="experience-item">
          <img src={premierductsLogo} alt="Premierducts Logo" className="company-logo" />
          <div className="experience-details">
            <h3>PREMIERDUCTS | Heathwood, QLD</h3>
            <p>Project Engineer</p>
            <p>12/2023 - Current</p>
            <ul>
              <li>Databases: SQL and NoSQL.</li>
              <li>Cloud Services: AWS.</li>
              <li>DevTools: Git, Linux, Docker, Figma, Jira.</li>
            </ul>
          </div>
        </div>

        <div className="experience-item">
          <img src={premierductsLogo} alt="Premierducts Logo" className="company-logo" />
          <div className="experience-details">
            <h3>PREMIERDUCTS | Heathwood, QLD</h3>
            <p>Software Engineer</p>
            <p>01/2022 - 12/2023</p>
            <ul>
              <li>Conducted business analysis to identify opportunities for improving operational efficiency, including leading the initiative to integrate Odoo enterprise management platform.</li>
              <li>Provided a new add-in library with more debugging improvements.</li>
              <li>Designed materials for industrial or commercial applications.</li>
              {/* Other points */}
            </ul>
          </div>
        </div>
        {/* Repeat the same structure for other experiences */}
      </div>
       </div>
   
    </div>
  );
};

export default Experience;
