import { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.scss';
import teachingIcon from './images/employments/teaching.png';
import researchIcon from './images/employments/research.png';
import projectEngineerIcon from './images/employments/project_engineer.png';
import softwareEngineerIcon from './images/employments/software_engineer.png';
import backendIcon from './images/employments/backend.png';
import blockchainIcon from './images/employments/blockchain.png';
import erpIcon from './images/employments/erp.png';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import experienceData from './experience.json';
const Experience = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const getImagePath = (experience) => {
    switch (experience.role) {
      case 'Sessional Practical Teaching':
        return teachingIcon;
      case 'Research Engineering':
        return researchIcon;
      case 'Project Engineer':
        return projectEngineerIcon;
      case 'Software Engineer':
        if (experience.nameOfCompany === 'Premier Ducts') return softwareEngineerIcon;
        if (experience.nameOfCompany === 'FPT Software') return backendIcon;
        if (experience.nameOfCompany === '1C Innovation') return erpIcon;
        break;
      case 'Backend Developer':
        return blockchainIcon;
      default:
        return null;
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

  return (
    <div className='experience-container'>
      <div className="title_header flex items-center">
        <h1>
          <span className="pr-1 text-black"></span>Work Experiences & Educations
        </h1>
      </div>
      <VerticalTimeline className="position-relative" lineColor={'#000'} animate={true}>
        {experienceData.experiences.map((experience) => (
          <VerticalTimelineElement
            key={experience.id}
            className={`vertical-timeline-element--${experience.type.toLowerCase()}`}
            contentStyle={{ background: experience.period.includes('Present') ? '#e0e7ff' : '#fff' }}
            contentArrowStyle={{ borderRight: experience.period.includes('Present') ? '7px solidrgb(0, 0, 0)' : '7px solid #fff' }}
            date={experience.period}
            iconStyle={{ background: '#fff', color: '#222', border: '2px solid #222' }}
            icon={
              <div className="icon-image-container">
                <img src={getImagePath(experience)} alt="employment-icon" className="icon-image" />
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
                  {selectedExperience?.longDescription
                    .split('.')
                    .map(sentence => sentence.trim())
                    .filter(sentence => sentence.length > 0)
                    .map((sentence, index) => (
                      <div key={index} className="flex items-start mb-2">
                        <span className="mr-2 text-xl font-bold text-blue-500">&#8226;</span>
                        <p className="text-sm text-gray-700">{sentence}.</p>
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