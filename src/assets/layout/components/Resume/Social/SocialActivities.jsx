import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-chrono';
import './Timeline.css'; // Import CSS for Timeline component

// const SocialActivities = () => {
//   return (
//     <div>
//       <h2>Activities and Honors</h2>
//       <ul>
//         <li>President of Vietnamese Community at QUT (2023-2024)</li>
//         <li>Member of the Learning Committee of the Faculty of Software at UIT (2015-2020)</li>
//         <li>Co-founder of a fund for the poor in Tay Ninh province, Vietnam</li>
//       </ul>
//       <h2>Accomplishments</h2>
//       <ul>
//         <li>QUT International Scholarship (2023 - 2025)</li>
//         <li>UIT annually scholarships. (2015, 2016, 2018, 2019)</li>
//         <li>2 prizes for Students of 5 merits of the Faculty and 1 prize for Students of 5 merits of the School. (UIT)</li>
//       </ul>
//     </div>
//   );
// };

// export default SocialActivities;

const SocialActivities = () => {
  return (
    <VerticalTimeline animate={false}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#f9f9f9', color: '#333' }}
        contentArrowStyle={{ borderRight: '7px solid  #f9f9f9' }}
        date="1990"
        iconStyle={{ background: '#007bff', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Birth</h3>
        <p>Born in a small town.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#007bff', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #007bff' }}
        date="1995"
        iconStyle={{ background: '#f9f9f9', color: '#333' }}
      >
        <h3 className="vertical-timeline-element-title">First Day of School</h3>
        <p>Started schooling at ABC Elementary School.</p>
      </VerticalTimelineElement>
      {/* Add more VerticalTimelineElement for other milestones */}
    </VerticalTimeline>
  );
};

export default SocialActivities;