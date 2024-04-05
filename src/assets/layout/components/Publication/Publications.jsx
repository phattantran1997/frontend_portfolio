import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Publication.scss';

const Publication = () => {
    const [publications, setPublications] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        const fetchPublications = async () => {
            try {
                const response = await axios.get('http://localhost:5146/api/Publications');
                setPublications(response.data);
                preloadImages(response.data); // Preload images once publications are fetched
            } catch (error) {
                console.error('Error fetching publications:', error);
            }
        };

        fetchPublications();
    }, []);

    const preloadImages = async (publications) => {
        const urls = await Promise.all(publications.map((publication) => importImage(publication.image)));
        setImageUrls(urls);
    };

    const importImage = async (imageName) => {
        try {
            const image = await import(`./images/${imageName}.jpg`);
            return image.default;
        } catch (error) {
            console.error('Error importing image:', error);
            return null;
        }
    };

    return (
        <div className="publication-container pt-20">
            <div className="container mx-auto">
                <div className="projects-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                    {publications.map((publication, index) => (
                        <div key={publication.ID} className="publication-item">
                            {imageUrls[index] && (
                                <img
                                    src={imageUrls[index]}
                                    alt={publication.name}
                                    className="publication-image"
                                />
                            )}
                            <div className="publication-details">
                                <h3><b>Name:</b> {publication.name}</h3>
                                <p><b>Period:</b> {publication.period}</p>
                                <p><b>Place:</b> {publication.place}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Publication;
