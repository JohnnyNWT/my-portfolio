import React from 'react';
import minhaImgIA from '../images/joao-marcelo-IA.png';
import { TypeAnimation } from 'react-type-animation';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../css/Home.css"

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.homeImgRef = React.createRef();
    this.homeDivRef = React.createRef();
  }

  componentDidMount() {
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      })
    });

    if (this.homeImgRef.current) {
      intersectionObserver.observe(this.homeImgRef.current);
    }

    if (this.homeDivRef.current) {
      intersectionObserver.observe(this.homeDivRef.current);
    }
  }

  render() {
    return (
      <div id="Home" className="container-home">
        <img src={minhaImgIA} alt="Joao Marcelo IA" className="img-home hidden" ref={this.homeImgRef} />
        <div className="home-info hidden" ref={this.homeDivRef}>
          <h3 className="text-home">Olá, Me Chamo</h3>
          <h1 className="text-home2">João Marcelo</h1>
          <TypeAnimation
            sequence={[
              `Desenvolvedor de Software!`,
              1500,
              'Designer!',
              1500,
              'Freelancer!',
              1500,
              'Analista de Dados! ',
              1500
            ]}
            className="highlights"
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
          <p className="paragraph">
            Apaixonado por desafios, estou em constante busca pela excelência no desenvolvimento de software.
            Sou comprometido em criar soluções eficazes e inovadoras.
            Trabalho muito bem em equipe e sou orientado para gerar resultados.
          </p>

          <div className="container-social-icons">
            <a href="https://github.com/JohnnyNWT" target="_blank" className="icon-home">
              <i className="bi bi-github"></i>
            </a>
            <a href="mailto:jooaaooskt@gmail.com" target="_blank" className="icon-home">
              <i className="bi bi-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/johnnydev/" target="_blank" className="icon-home">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        <a href="#Home">
          <div className="iconTop">
            <i className="bi bi-arrow-up"></i>
          </div>
        </a>
        </div>
    );
  }
}

export default Home;