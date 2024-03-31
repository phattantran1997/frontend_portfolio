import React from 'react';
import './Language.scss';

const Language = () => {
  return (
    <div className="language-container">
      <div className="title_header">
        <h1>
          <span className="pr-1 text-black"></span>Languages
        </h1>
      </div>
      <div className="languages-wrapper">
        <div className="language">
          <div className="languageTitleAndLevel">
            <span className="languageTitle">Vietnamese</span>
            <br />
            <span className="languageLevel">Native</span>
          </div>
          <div className="dots-progress">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="dots-progress-dot dots-progress-dot-active"></div>
            ))}
          </div>
        </div>
        <div className="language">
          <div className="languageTitleAndLevel">
            <span className="languageTitle">English</span>
            <br />
            <span className="languageLevel">Professional working proficiency</span>
          </div>
          <div className="dots-progress">
            {[...Array(7)].map((_, index) => (
              <div key={index} className="dots-progress-dot dots-progress-dot-active"></div>
            ))}
            {[...Array(3)].map((_, index) => (
              <div key={index} className="dots-progress-dot"></div>
            ))}
          </div>
        </div>
        <div className="language">
          <div className="languageTitleAndLevel">
            <span className="languageTitle">Chinese</span>
            <br />
            <span className="languageLevel">Beginner</span>
          </div>
          <div className="dots-progress">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="dots-progress-dot dots-progress-dot-active"></div>
            ))}
            {[...Array(8)].map((_, index) => (
              <div key={index} className="dots-progress-dot"></div>
            ))}
          </div>
        </div>
        <div className="language">
          <div className="languageTitleAndLevel">
            <span className="languageTitle">Korean</span>
            <br />
            <span className="languageLevel">Beginner</span>
          </div>
          <div className="dots-progress">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="dots-progress-dot dots-progress-dot-active"></div>
            ))}
            {[...Array(8)].map((_, index) => (
              <div key={index} className="dots-progress-dot"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;