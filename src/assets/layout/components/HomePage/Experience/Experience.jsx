import React, { useState, useEffect } from 'react';
import './Experience.scss';
import premierductsLogo from './images/premierducts.png';
import angularJs from './images/angularjs.png';
import csharp from './images/c-sharp.png';
import database from './images/database.png';
import java from './images/java.png';
import erp from './images/erp.png';
import projectengineer from './images/projectengineer.png';
import workIcon from './images/work.png';
import education from './images/education.png';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const response = await fetch('http://localhost:5146/api/Experiences');
      const data = await response.json();
      console.log(data);
      setExperiences(data);
    } catch (error) {
      console.error('Error fetching experiences:', error);
    }
  };

  const openModal = (experience) => {
    setSelectedExperience(experience);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedExperience(null);
  };

  const getImagePath = (imageName) => {
    if (imageName === 'premierductsLogo') return premierductsLogo;
    else if (imageName === 'angularJs') return angularJs;
    else if (imageName === 'csharp') return csharp;
    else if (imageName === 'database') return database;
    else if (imageName === 'java') return java;
    else if (imageName === 'erp') return erp;
    else if (imageName === 'projectengineer') return projectengineer;
    else if (imageName === 'workIcon') return workIcon;
    else if (imageName === 'education') return education;
    else return null; // or you can return a default image path
  };

  return (
    <div className='experience-container'>
      <div className="title_header flex items-center">
        <h1>
          <span className="pr-1 text-black"></span>Work Experiences & Educations
        </h1>
      </div>
      <VerticalTimeline lineColor={'black'} animate={true}>
        {experiences.map((experience) => (
          <VerticalTimelineElement
            key={experience.id}
            className={`vertical-timeline-element--${experience.type.toLowerCase()}`}
            contentStyle={{ background: 'rgb(83, 178, 252)' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(83, 178, 252)' }}
            date={experience.period}
            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
            icon={
              <div className="icon-image-container">
                <img src={getImagePath(experience.image)} alt="myLogo" className="icon-image" />
              </div>
            }
            onTimelineElementClick={() => openModal(experience)}
          >
            <div>
              {experience.highlightSkills.split(',').map((skill) => (
                <div key={skill} className="programming-language" role="button">
                  <span>{skill.trim()}</span>
                </div>
              ))}
            </div>
            <h3 className="vertical-timeline-element-title">{experience.role}</h3>
            <h4 className="vertical-timeline-element-subtitle">{experience.nameOfCompany}</h4>
            <p>{experience.shortDescription}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {selectedExperience?.role}
                </Dialog.Title>
                <div className="mt-4">
                  {selectedExperience?.longDescription.split('.').map((sentence, index) => (
                    <div key={index} className="flex items-start mb-2">
                      <span className="mr-2 text-xl font-bold text-blue-500">&#8226;</span>
                      <p className="text-sm text-gray-700">
                        {sentence.trim().split('**').map((part, i) =>
                          i % 2 === 0 ? (
                            part
                          ) : (
                            <span key={i} className="font-bold">
                              {part.replace(/\*\*/g, '')}
                            </span>
                          )
                        )}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Experience;