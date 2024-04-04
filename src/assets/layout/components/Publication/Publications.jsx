import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Publication.scss';
import test from './images/aws-dva.jpg';
const Publication = () => {
    const [publications, setPublications] = useState([]);

    useEffect(() => {
        const fetchPublications = async () => {
            try {
                const response = await axios.get('http://localhost:5146/api/Publications');
                setPublications(response.data);
            } catch (error) {
                console.error('Error fetching publications:', error);
            }
        };

        fetchPublications();
    }, []);

    return (
        <div className="publication-container pt-20">
          <div className="container mx-auto">
            <div className="projects-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {publications.map((publication) => (
                <div key={publication.ID} className="publication-item">
                  <img src={test} alt={publication.name} className="publication-image" />
                  <div className="publication-details">
                    <h3>{publication.name}</h3>
                    <p>{publication.longDescription}</p>
                    <p>Period: {publication.period}</p>
                    <p>Place: {publication.place}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
};

export default Publication;