import React from 'react';
import dataSkills from '../data/Skills';
import '../css/Skills.css';

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.skillsTitleRef = React.createRef();
    this.skillsDivCardRef = React.createRef();
    this.skillsDivExpListRef = React.createRef();
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
    
    if (this.skillsTitleRef.current) {
      intersectionObserver.observe(this.skillsTitleRef.current);
    }

    if (this.skillsDivCardRef.current) {
      intersectionObserver.observe(this.skillsDivCardRef.current);
    }

    if (this.skillsDivExpListRef.current) {
      intersectionObserver.observe(this.skillsDivExpListRef.current);
    }
  }

  render() {
    return (
      <div className='container-skills' id='Skills'>
        <h2 className='head-text hidden' ref={this.skillsTitleRef}>Skills & Experiências</h2>
        <div className="container-skills-exp">
          <div className="all-cards hidden" ref={this.skillsDivCardRef}>
            {dataSkills.map(({ srcImage, skillName }) => (
              <div className="card-skill">
                <div className="skill-image">
                  <img src={ srcImage } alt='html5 icon' />
                </div>
                <p className="p-text">{ skillName }</p>
              </div>
            ))}
          </div>
          <div className="exp-list hidden" ref={this.skillsDivExpListRef}>
            <div className="container-exp">
              <div className="exp-year">
                <p className="p-exp-year">2020/2023</p>
              </div>
              <div className="container-skills-info">
                <h4 className="exp-text">Análise e desenvolvimento de sistemas</h4>
                <p className="p-text">Universidade norte do paraná (Unopar)</p>
              </div>
            </div>
            <div className="container-exp">
              <div className="exp-year">
                <p className="p-exp-year">2022/2023</p>
              </div>
              <div className="container-skills-info">
                <h4 className="exp-text">Desenvolvimento Web</h4>
                <p className="p-text">Trybe</p>
              </div>
            </div>
            <div className="container-exp">
              <div className="exp-year">
                <p className="p-exp-year">2023/2024</p>
              </div>
              <div className="container-skills-info">
                <h4 className="exp-text">UX / Design</h4>
                <p className="p-text">Google</p>
              </div>
            </div>
            <div className="container-exp">
              <div className="exp-year">
                <p className="p-exp-year">2022/2023</p>
              </div>
              <div className="container-skills-info">
                <h4 className="exp-text">React do Zero a Maestria</h4>
                <p className="p-text">Udemy</p>
              </div>
            </div>
            <div className="container-exp">
              <div className="exp-year">
                <p className="p-exp-year">2018/2019</p>
              </div>
              <div className="container-skills-info">
                <h4 className="exp-text">Projetista Gráfico, Operador de micro e Operador de caixa</h4>
                <p className="p-text">Genius Training</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;