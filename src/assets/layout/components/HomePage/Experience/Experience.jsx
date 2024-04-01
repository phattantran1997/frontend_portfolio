import React, { useState } from 'react';
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
  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal(content) {
    setIsOpen(true)
  }


  return (
    <div className='experience-container'>
      <div className="title_header flex items-center">
        <h1>
          <span className="pr-1 text-black"></span>Work Experiences & Educations
        </h1>
      </div>
      <VerticalTimeline lineColor={'black'} animate={true}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(83, 178, 252)' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(83, 178, 252)' }}
          date="12/2023 - Today"
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
          icon={
            <div className="icon-image-container">
              <img src={projectengineer} alt="myLogo" className="icon-image" />
            </div>
          }
          onTimelineElementClick={() => openModal('abc')}
        >
          <div>
            <div className="programming-language " role="button">
              <span>Leader</span>
            </div>
            <div className="programming-language" role="button">
              <span>Business analysis</span>
            </div>
            <div className="programming-language " role="button">
              <span>Project architect</span>
            </div>
          </div>
          <h3 className="vertical-timeline-element-title">Project Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">PREMIERDUCTS | Heathwood, QLD</h4>
          <p>Leadership, Agile, Client Collaboration, Project Management, Communication, Mentorship</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="12/2022 - 12/2023"
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
          icon={
            <div className="icon-image-container">
              <img src={csharp} alt="myLogo" className="icon-image" />
            </div>
          }
        >
          <div>
            <div className="programming-language " role="button">
              <span>.NET</span>
            </div>
            <div className="programming-language " role="button">
              <span>Database</span>
            </div>
            <div className="programming-language" role="button">
              <span>Angular JS</span>
            </div>
            <div className="programming-language " role="button">
              <span>AWS</span>
            </div>
          </div>
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">PREMIERDUCTS | Heathwood, QLD</h4>
          <p>Software Development, Mobile Apps, Web Apps, Cross-functional, Testing, Continuous Improvement</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="12/2022 - 06/2023"
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
          icon={
            <div className="icon-image-container">
              <img src={database} alt="myLogo" className="icon-image" />
            </div>
          }
        >
          <div>
            <div className="programming-language " role="button">
              <span>.NET</span>
            </div>
            <div className="programming-language" role="button">
              <span>Database</span>
            </div>
            <div className="programming-language " role="button">
              <span>CI/CD</span>
            </div>
          </div>
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">FPT SOFTWARE | Ho Chi Minh, Viet Nam</h4>
          <p>Backend, Database Optimization, .NET, CI/CD, Code Reviews, Knowledge Sharing</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="09/2020 - 09/2021"
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
          icon={
            <div className="icon-image-container">
              <img src={java} alt="myLogo" className="icon-image" />
            </div>
          }
        >
          <div>
            <div className="programming-language " role="button">
              <span>Spring Boot</span>
            </div>
            <div className="programming-language" role="button">
              <span>Database</span>
            </div>
            <div className="programming-language " role="button">
              <span>CI/CD</span>
            </div>
          </div>
          <h3 className="vertical-timeline-element-title">Backend Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">BEOWULF BLOCKCHAIN | Ho Chi Minh, Viet Nam</h4>
          <p>Blockchain, RESTful APIs, Performance, Scalability, Architecture Design, Technical Insights</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="06/2019 - 08/2020"
          iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
          icon={
            <div className="icon-image-container">
              <img src={erp} alt="myLogo" className="icon-image" />
            </div>
          }
        >
          <div>
            <div className="programming-language " role="button">
              <span>1C Framework</span>
            </div>
            <div className="programming-language" role="button">
              <span>ERP</span>
            </div>
          </div>
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">1C INNOVATION | Ho Chi Minh, Viet Nam</h4>
          <p>1C Framework, ERP, Customization, Technical Support, Product Enhancement, Client Collaboration</p>
        </VerticalTimelineElement>
        {/* education */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Graduation time: 6/2025"
          iconStyle={{ background: 'rgb(245, 0, 87)', color: 'rgb(255, 255, 255)' }}
          icon={
            <div className="icon-image-container">
              <img src={education} alt="myLogo" className="icon-image" />
            </div>
          }
        >
          <div>
            <div className="programming-language " role="button">
              <span>Grades: 6/7</span>
            </div>
          </div>
          <h3 className="vertical-timeline-element-title">Master of Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Queensland University of Technology (QUT)</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Graduated"
          iconStyle={{ background: 'rgb(245, 0, 87)', color: 'rgb(255, 255, 255)' }}
          icon={
            <div className="icon-image-container">
              <img src={education} alt="myLogo" className="icon-image" />
            </div>
          }
        >
          <div>
            <div className="programming-language " role="button">
              <span>Grades: 8.28/10</span>
            </div>
          </div>
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">The University of Information Technology, or VNU-HCM University of Information Technology</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Payment successful
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Your payment has been successfully submitted. We’ve sent
                        you an email with all of the details of your order.
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Got it, thanks!
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>

      </div>
    </div>
  );
};

export default Experience;