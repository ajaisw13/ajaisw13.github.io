
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/ajaisw13/airbnb_nyc_analytics" target="_blank" rel="noreferrer"><img src={require('../assets/images/Figure1.png')} className="zoom" alt="thumbnail" width="100%" height="70%"/></a>
                <a href="https://github.com/ajaisw13/airbnb_nyc_analytics" target="_blank" rel="noreferrer"><h2>Airbnb NYC Analytics</h2></a>
                <p>Developed an Airbnb NYC Housing Analytics Dashboard using Next.js, Firebase, HTML5, React, FileStack.</p>
            </div>
            <div className="project">
                <a href="https://github.com/ajaisw13/Image-Gallery-fullstack" target="_blank" rel="noreferrer"><img src={require('../assets/images/image1.png')} className="zoom" alt="thumbnail" width="100%" height="70%"/></a>
                <a href="https://github.com/ajaisw13/Image-Gallery-fullstack" target="_blank" rel="noreferrer"><h2>Image Gallery</h2></a>
                <p>Developed an Image Gallery application enabling users to upload images along with titles.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;