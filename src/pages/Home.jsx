import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'
import imagemMacaco from '../images/imagem-para-home.png'

class Home extends React.Component {
  render() {
    return(
      <div id='Home'>
        <img src={imagemMacaco} alt="imagem do macaco programador" />
        <h1>Olá, eu sou o</h1>
        <h1>João Marcelo</h1>
        <h2>Desenvolvedor web full-stack</h2>
        <a href="https://github.com/JohnnyNWT" target="_blank">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/johnnydev/" target="_blank">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    );
  }
}

export default Home;