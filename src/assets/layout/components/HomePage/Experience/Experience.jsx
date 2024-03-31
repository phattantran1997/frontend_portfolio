import React from 'react';
import './Experience.css'; // Import the CSS file for Experience component
import premierductsLogo from './images/premierducts.png';
import angularJs from './images/angularjs.png';
import csharp from './images/c-sharp.png';
import database from './images/database.png';
import java from './images/java.png';
import erp from './images/erp.png';
import projectengineer from './images/projectengineer.png'
import workIcon from './images/work.png';
import education from './images/education.png';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

const Experience = () => {
  let listOfExperience = [
    {
      name: 'PremierDucts',
      date: '1/2/3',
      description: `• Conducted business analysis to identify opportunities for improving operational efficiency, including leading the initiative to integrate Odoo enterprise management platform.
      • Provided a new add-in library with more debugging improvements.
      • Designed materials for industrial or commercial applications.
      • Collaborated with stakeholders to identify opportunities for process improvement in the delivery of projects.
      • Monitored work performance against established milestones, ensuring adherence to approved schedules.
      • Delivered detailed and concise directives to team members and worked closely with organisational managers to facilitate project success.`
    },
    {
      name: 'PremierDucts',
      date: '1/2/3',
      description: `• Conducted business analysis to identify opportunities for improving operational efficiency, including leading the initiative to integrate Odoo enterprise management platform.
      • Provided a new add-in library with more debugging improvements.
      • Designed materials for industrial or commercial applications.
      • Collaborated with stakeholders to identify opportunities for process improvement in the delivery of projects.
      • Monitored work performance against established milestones, ensuring adherence to approved schedules.
      • Delivered detailed and concise directives to team members and worked closely with organisational managers to facilitate project success.`
    }
  ];
  function handleShowCustomDialog(event) {
    // let el = event.target;
    console.log(event);
  }

  return (
    <div> 
      <div className="container mx-auto">
      <div className="skill_header w-2/3 flex items-center gap-2">
              <h2 className="title_sub">
                <span className="pr-1 text-black">#</span>Experience
              </h2>
              <div className="line w-2/3 h-px "></div>
            </div>
    <VerticalTimeline lineColor={'black'} animate={true}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="12/2023 - Present"
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
        icon={<img src={projectengineer} alt="myLogo" />}
        onTimelineElementClick={() => handleShowCustomDialog('abc')}
      >
        <div>
          <div class="programming-language " role="button">
            <span>Leader</span>
          </div>
          <div class="programming-language" role="button">
            <span >Business analysis</span>
          </div>
          <div class="programming-language " role="button">
            <span>Project architect</span>
          </div>
        </div>
        <h3 className="vertical-timeline-element-title"> <b>Project Engineer</b></h3>
        <h4 className="vertical-timeline-element-subtitle">PREMIERDUCTS | Heathwood, QLD</h4>
        <p /*style={{ color: 'white' }}*/>
          Creative Direction, User Experience, Visual Design, Project Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="12/2022 - 12/2023"
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
        icon={<img src={csharp} alt="myLogo" />}
      >
        <div>
          <div class="programming-language " role="button">
            <span>.NET</span>
          </div>
          <div class="programming-language " role="button">
            <span>Database</span>
          </div>
          <div class="programming-language" role="button">
            <span >Angular JS</span>
          </div>
          <div class="programming-language " role="button">
            <span>AWS</span>
          </div>
        </div>
        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">PREMIERDUCTS | Heathwood, QLD</h4>
        <p style={{ color: '' }}>
          Mobile developer, Website Management Developer, Full-stack Developer, Business Analysis, Devops.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="12/2022 - 06/2023"
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
        icon={<img src={database} alt="myLogo" />}
      >
        <div>
          <div class="programming-language " role="button">
            <span>.NET</span>
          </div>
          <div class="programming-language" role="button">
            <span >Database</span>
          </div>
          <div class="programming-language " role="button">
            <span>CI/CD</span>
          </div>
        </div>
        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">FPT SOFTWARE | Ho Chi Minh, Viet Nam</h4>
        <p>
          Backend Developer, Database Optimal.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="09/2020 - 09/2021"
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
        icon={<img src={java} alt="myLogo" />}
      >
        <div>
          <div class="programming-language " role="button">
            <span>Spring Boot</span>
          </div>
          <div class="programming-language" role="button">
            <span >Database</span>
          </div>
          <div class="programming-language " role="button">
            <span>CI/CD</span>
          </div>
        </div>

        <h3 className="vertical-timeline-element-title">Backend Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">BEOWULF BLOCKCHAIN | Ho Chi Minh, Viet Nam</h4>
        <p>
          Backend Developer, API Architecture.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="06/2019 - 08/2020"
        iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
        icon={<img src={erp} alt="myLogo" />}
      >
        <div>
          <div class="programming-language " role="button">
            <span>1C Framework</span>
          </div>
          <div class="programming-language" role="button">
            <span >ERP</span>
          </div>
        </div>
        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">1C INNOVATION | Ho Chi Minh, Viet Nam</h4>
        <p>
          Strategy, Social Media
        </p>
      </VerticalTimelineElement>
      {/* education */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Graduation time: 6/2025"
        contentStyle={{ background: 'rgb(245, 0, 87)' }}
        iconStyle={{ background: 'rgb(245, 0, 87)', color: 'rgb(255, 255, 255)' }}
        icon={<img src={education} alt="myLogo" />} >
        <div>
          <div class="programming-language " role="button">
            <span>Grades: 6/7</span>
          </div>
        </div>
        <h3 className="vertical-timeline-element-title">Master of Software Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">Queensland University of Technology (QUT)</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Graduation time: 12/2020"
        iconStyle={{ background: 'rgb(245, 0, 87)', color: 'rgb(255, 255, 255)' }}
        icon={<img src={education} alt="myLogo" />} >
        <div>
          <div class="programming-language " role="button">
            <span>Grades: 8.28/10</span>
          </div>
        </div>
        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">The University of Information Technology, or VNU-HCM University of Information Technology</h4>
      </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
    </div>
  );
};

export default Experience;
