import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import dataProjects from '../data/Projects';
import '../css/Projects.css';

class Projects extends React.Component {
  render() {
    return(
      <div id='Projects' className='container-projects'>
        <h2 className="head-text">Alguns dos <span className="span-my-projects">meus projetos</span><br/> como dev</h2>
        <div className="cards-container">
          {dataProjects.map(({srcImage, projectName, projectDescription, linkGitHubProject, linkViewProject}) => (
            <div className="card">
              <div className="image-card">
                <img src={ srcImage } alt='imagemfa' className="img-project" style={{ width: "100%", height: "260px" }} />
                <div className="icons">
                  <a href={ linkViewProject } target="_blank">
                    <div className="icons-div">
                      <FontAwesomeIcon
                        icon={faEye}
                        size="2xl"
                        style={{ color: 'white', animationDuration: "2s", animationDelay: "1s" }}
                        bounce
                      />
                    </div>
                  </a>
                  <a href={ linkGitHubProject } target="_blank">
                    <div className="icons-div">
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="2xl"
                        style={{ color: "white", animationDuration: "2s", animationDelay: "1s" }}
                        bounce
                      />
                    </div>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="project-name-text">{ projectName }</h4>
                <p className="description">{ projectDescription }</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
