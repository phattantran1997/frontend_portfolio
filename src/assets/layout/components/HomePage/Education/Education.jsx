import React from 'react';
import './Education.css'; // Import the CSS file for Education component

const Education = () => {
  return (
    <div className="education-container">
      <h1>Education and Training</h1>
      <div className="education-item">
        <h3>QUEENSLAND UNIVERSITY OF TECHNOLOGY (QUT) | Brisbane QLD</h3>
        <p>Master of Science in Information Technology (Grades: 6/7)</p>
        <p>Graduation time: 6/2025</p>
      </div>
      <div className="education-item">
        <h3>UNIVERSITY OF INFORMATION TECHNOLOGY VNU-HCM (UIT) | Ho Chi Minh</h3>
        <p>Software Engineer in Information Technology (Grades: 8.28/10)</p>
        <p>Graduation time: 12/2020</p>
      </div>
    </div>
  );
};

export default Education;
