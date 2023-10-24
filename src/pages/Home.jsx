import React from 'react';
import minhaImgIA from '../images/joao-marcelo-IA.png';
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
        if(entry.isIntersecting) {
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
    return(
      <div id='Home' className="container-home">
        <img src={ minhaImgIA } alt="Joao Marcelo IA" className="img-home hidden" ref={this.homeImgRef}/>
        <div className="container-info hidden" ref={this.homeDivRef}>
          <h1>Olá, eu sou o</h1>
          <h1>João Marcelo</h1>
          <h2>Desenvolvedor web full-stack</h2>
        </div>
      </div>
    );
  }
}

export default Home;