import { useState } from 'react';
import './Publication.scss';
import uitMetricsFaculty from './images/uit-metrics-faculty.jpg';
import qutInternationalScholarship from './images/qut-international-schoolarship.jpg';
import qutCommunication from './images/qut-communication.jpg';
import awsSaa from './images/aws-saa.jpg';
import awsDva from './images/aws-dva.jpg';
import qutCertificatesem1 from './images/qut_cert_sem1.jpg';
import qutCertificatesem2 from './images/qut_cert_sem2.jpg';
import in17 from './images/IN17.jpg';
import in20 from './images/IN20.jpg';

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
    title: 'QUT International Scholarship',
    image: qutInternationalScholarship,
    description: 'QUT International Scholarship',
  },
  {
    id: 3,
    title: 'QUT Communication',
    image: qutCommunication,
    description: 'QUT Communication Award',
  },
  {
    id: 4,
    title: 'AWS SAA',
    image: awsSaa,
    description: 'AWS Solutions Architect Associate',
  },
  {
    id: 5,
    title: 'AWS DVA',
    image: awsDva,
    description: 'AWS Developer Associate',
  },
  {
    id: 6,
    title: 'QUT Certificate Semester 1',
    image: qutCertificatesem1,
    description: 'QUT Certificate Semester 1',
  },
  {
    id: 7 ,
    title: 'QUT Certificate Semester 2',
    image: qutCertificatesem2,
    description: 'QUT Certificate Semester 2',
  },
  {
    id: 8 ,
    title: 'IN17',
    image: in17,
    description: 'IN17',
  },
  {
    id: 9 ,
    title: 'IN20',
    image: in20,
    description: 'IN20',
  },
];

const Publication = () => {
  const [publications] = useState(publicationData);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="publication-container pt-20">
      <div className="publications-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {publications.map((pub) => (
          <div key={pub.id} className="publication-card bg-white shadow-md rounded-md overflow-hidden">
            <div 
              className="image-container cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => handleImageClick(pub.image)}
            >
              <img src={pub.image} alt={pub.title} className="w-full h-48 object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{pub.title}</h3>
              <p className="text-gray-600">{pub.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300 p-4"
          onClick={handleCloseModal}
        >
          <div 
            className="relative max-w-[90vw] max-h-[90vh] transform transition-transform duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <button 
              className="absolute -top-4 -right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors duration-300"
              onClick={handleCloseModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Publication;
