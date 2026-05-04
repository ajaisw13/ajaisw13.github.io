
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/ajaisw13/k8s-troubleshooter" target="_blank" rel="noreferrer">
                    <div className="project-img-wrapper">
                        <img src={require('../assets/images/k8s-troubleshooter.gif')} className="zoom" alt="thumbnail"/>
                    </div>
                </a>
                <a href="https://github.com/ajaisw13/k8s-troubleshooter" target="_blank" rel="noreferrer"><h2>K8s Troubleshooter</h2></a>
                <p>An AI-powered Kubernetes diagnostic agent that diagnoses cluster issues and suggests fixes in real time.</p>
                <div className="project-tags">
                    <span className="tag">Python</span>
                    <span className="tag">FastAPI</span>
                    <span className="tag">Streamlit</span>
                    <span className="tag">AWS Bedrock</span>
                    <span className="tag">Claude AI</span>
                    <span className="tag">Kubernetes</span>
                    <span className="tag">Docker</span>
                </div>
            </div>
            <div className="project">
                <a href="https://github.com/ajaisw13/airbnb_nyc_analytics" target="_blank" rel="noreferrer">
                    <div className="project-img-wrapper">
                        <img src={require('../assets/images/Figure1.png')} className="zoom" alt="thumbnail"/>
                    </div>
                </a>
                <a href="https://github.com/ajaisw13/airbnb_nyc_analytics" target="_blank" rel="noreferrer"><h2>Airbnb NYC Analytics</h2></a>
                <p>Developed an Airbnb NYC Housing Analytics Dashboard with interactive visualizations and real-time data.</p>
                <div className="project-tags">
                    <span className="tag">Next.js</span>
                    <span className="tag">React</span>
                    <span className="tag">Firebase</span>
                    <span className="tag">HTML5</span>
                    <span className="tag">FileStack</span>
                </div>
            </div>
            <div className="project">
                <a href="https://github.com/ajaisw13/Image-Gallery-fullstack" target="_blank" rel="noreferrer">
                    <div className="project-img-wrapper">
                        <img src={require('../assets/images/image1.png')} className="zoom" alt="thumbnail"/>
                    </div>
                </a>
                <a href="https://github.com/ajaisw13/Image-Gallery-fullstack" target="_blank" rel="noreferrer"><h2>Image Gallery</h2></a>
                <p>Developed a full-stack Image Gallery application enabling users to upload and browse images with titles.</p>
                <div className="project-tags">
                    <span className="tag">React</span>
                    <span className="tag">Node.js</span>
                    <span className="tag">Express</span>
                    <span className="tag">MongoDB</span>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Project;