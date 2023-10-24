import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import dataProjects from '../data/Projects';
import '../css/Projects.css';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.projectCardRef = React.createRef();
    this.projectTitleRef = React.createRef();
  }

  componentDidMount() {
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      })
    });

    if (this.projectCardRef.current) {
      intersectionObserver.observe(this.projectCardRef.current);
    }

    if (this.projectTitleRef.current) {
      intersectionObserver.observe(this.projectTitleRef.current);
    }
  }
  
  render() {
    return(
      <div id='Projects' className='container-projects'>
        <h2 ref={this.projectTitleRef} className="head-text hidden">Alguns dos <span className="span-my-projects">meus projetos</span><br/> como dev</h2>
        <div ref={this.projectCardRef} className="cards-container hidden">
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
