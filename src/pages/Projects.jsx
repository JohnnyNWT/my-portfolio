import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../css/Projects.css';

class Projects extends React.Component {
  render() {
    return(
      <div id='Projects' className='container-projects'>
        <h2 className="head-text">Alguns dos <span className="span-my-projects">meus projetos</span><br/> como dev</h2>
        <div className="card">
          <div className="image-card">
            <img src="https://a.imagem.app/ozaYPy.png" alt='imagemfa' className="img-project" style={{ width: "100%", height: "260px" }} />
            <div className="icons">
              <a href="https://project-trybetunes-lovat.vercel.app/" target="_blank">
                <div className="icons-div">
                  <FontAwesomeIcon
                    icon={faEye}
                    size="2xl"
                    style={{ color: 'white', animationDuration: "2s", animationDelay: "1s" }}
                    bounce
                  />
                </div>
              </a>
              <a href="https://github.com/JohnnyNWT/trybe-tunes" target="_blank">
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
            <h4 className="project-name-text">TrybeTunes</h4>
            <p className="description">O Trybe Tunes é uma aplicação capaz de reproduzir músicas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;