import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Nov 2025 - Jan 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">American Express </h2>
            <h3 className="vertical-timeline-element-subtitle">Software Engineer</h3>
            <div className="vertical-timeline-element-subtitle">Phoenix, Arizona, United States</div>
            <p>
              Backend Development, DevOps & Automation, CI/CD
            </p>
          </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="July 2024 - Nov 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">Interlinked</h2>
            <h3 className="vertical-timeline-element-subtitle">Software Engineer</h3>
            <div className="vertical-timeline-element-subtitle">Tempe, Arizona, United States</div>
            <p>
              Backend Development, DevOps & Automation, Networking
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Mar 2023 - Nov 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
             <h2 className="vertical-timeline-element-title">ViaSat</h2>
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <div className="vertical-timeline-element-subtitle">Tempe, Arizona, United States</div>
            <p>
              Backend Development, DevOps & Automation, Networking
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2023 - Mar 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">Diamond Solutions</h2>
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <div className="vertical-timeline-element-subtitle">Tempe, Arizona, United States</div>
            <p>
              Frontend Development, Backend Development, User Experience
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2022 - Aug 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">Meta</h2>
            <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
            <div className="vertical-timeline-element-subtitle">Menlo Park, California, United States</div>
            <p>
              Backend Development, Software Testing, Networking, Security
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2020 - Jun 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">Anarock Property Consultants</h2>
            <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
            <div className="vertical-timeline-element-subtitle">Bengaluru, Karnataka, India</div>
            <p>
              Frontend Development, Customer Relationship Management, User Experience
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2018 - Aug 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">Microsoft</h2>
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <div className="vertical-timeline-element-subtitle">Hyderabad, Telangana, India</div>
            <p>
              Frontend Development, User Experience, Enterprise Search
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2016 - Oct 2018"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">FactSet</h2>
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <div className="vertical-timeline-element-subtitle">Hyderabad, Telangana, India</div>
            <p>
              Full Stack Development, Pipeline Management, Financial Services
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;