import { useState } from 'react';
import './Publication.scss';
import uitMetricsFaculty from './images/uit-metrics-faculty.jpg';
import bestPerformanceBeowulf from './images/best-performance-beowulf.jpg';
import qutInternationalScholarship from './images/qut-international-schoolarship.jpg';
import qutCommunication from './images/qut-communication.jpg';
import awsSaa from './images/aws-saa.jpg';
import awsDva from './images/aws-dva.jpg';

// Local publication data based on images in the images folder
const publicationData = [
  {
    id: 1,
    title: 'UIT Metrics Faculty',
    image: uitMetricsFaculty,
    description: 'UIT Metrics Faculty Award',
  },
  {
    id: 2,
    title: 'Best Performance Beowulf',
    image: bestPerformanceBeowulf,
    description: 'Best Performance at Beowulf',
  },
  {
    id: 3,
    title: 'QUT International Scholarship',
    image: qutInternationalScholarship,
    description: 'QUT International Scholarship',
  },
  {
    id: 4,
    title: 'QUT Communication',
    image: qutCommunication,
    description: 'QUT Communication Award',
  },
  {
    id: 5,
    title: 'AWS SAA',
    image: awsSaa,
    description: 'AWS Solutions Architect Associate',
  },
  {
    id: 6,
    title: 'AWS DVA',
    image: awsDva,
    description: 'AWS Developer Associate',
  },
];

const Publication = () => {
  const [publications] = useState(publicationData);

  return (
    <div className="publication-container pt-20">
      <div className="publications-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {publications.map((pub) => (
          <div key={pub.id} className="publication-card bg-white shadow-md rounded-md overflow-hidden">
            <img src={pub.image} alt={pub.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{pub.title}</h3>
              <p className="text-gray-600">{pub.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publication;
