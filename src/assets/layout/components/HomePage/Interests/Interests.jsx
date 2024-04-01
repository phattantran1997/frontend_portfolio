import { useState } from 'react';
import cooking from './images/cooking.png';
import music from './images/music.png';
import reading from './images/reading.png';
import trip from './images/trip.png';
import gym from './images/gym.png';
import './Interests.scss';

const SquareBlock = ({ image, frontText, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div
      className={`square-block ${isFlipped ? 'flipped' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="square-block-inner">
        <div className="square-block-front">
          <div className="front-content">
            <img src={image} alt="icon" className="front-icon" />
            <p className="front-text">{frontText}</p>
          </div>
        </div>
        <div className="square-block-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const Interests = () => {
  const blocks = [
    { image: cooking, frontText: 'Cooking', description: 'I love cooking and experimenting with new recipes.' },
    { image: music, frontText: 'Music', description: 'Listening to music and playing instruments is my passion.' },
    { image: reading, frontText: 'Reading', description: 'I enjoy reading books and gaining knowledge.' },
    { image: trip, frontText: 'Traveling', description: 'Exploring new places and cultures is my hobby.' },
    { image: gym, frontText: 'Working Out', description: 'Staying fit and healthy is important to me.' },
  ];

  return (
    <div className='interests-container'>
      <div className="title_header flex items-center">
        <h1>
          <span className="pr-1 text-black"></span>Interests
        </h1>
      </div>
      <div className="multi-square-blocks">
        {blocks.map((block, index) => (
          <SquareBlock
            key={index}
            image={block.image}
            frontText={block.frontText}
            description={block.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Interests;