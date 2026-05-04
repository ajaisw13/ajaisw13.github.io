import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express",
    "FastAPI",
    "Flask",
    "Python",
    "Material UI",
    "HTML5",
    "CSS3",
    "SASS",
    "MongoDB",
    "Firebase",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "Kubernetes",
    "Vercel",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "OpenAI",
    "ChatGPT",
    "AWS Bedrock",
    "Strands Agents",
    "Streamlit",
    "MCP",
    "Copilot"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
    <FontAwesomeIcon icon={faPython} size="3x"/>
    <h3>AI Tools & Platforms</h3>
    <p>
        Experience building and integrating AI-powered features using modern tools and frameworks.
        Worked with large language models, agent-based systems, and retrieval-augmented generation
        to develop intelligent and scalable applications.
    </p>
    <div className="flex-chips">
        <span className="chip-title">Tech stack:</span>
        {labelsThird.map((label, index) => (
            <Chip key={index} className='chip' label={label} />
        ))}
    </div>
</div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;