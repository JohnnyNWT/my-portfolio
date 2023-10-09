import React from 'react';
import minhaImgIA from '../images/joao-marcelo-IA.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../css/Home.css"

class Home extends React.Component {
  render() {
    return(
      <div id='Home' className="container-home">
        <img src={ minhaImgIA } alt="Joao Marcelo IA" className="img-home"/>
        <div className="container-info">
          <h1>Olá, eu sou o</h1>
          <h1>João Marcelo</h1>
          <h2>Desenvolvedor web full-stack</h2>
        </div>
        {/* <a href="https://github.com/JohnnyNWT" target="_blank">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/johnnydev/" target="_blank">
          <i className="bi bi-linkedin"></i>
        </a> */}
      </div>
    );
  }
}

export default Home;