import React from 'react';
import dataSkills from '../data/Skills';
import '../css/Skills.css';

class Skills extends React.Component {
  render() {
    return (
      <div className='container-skills' id='Skills'>
        <h2 className='head-text'>Skills & Experiências</h2>
        <div className="container-skills-exp">
          <div className="all-cards">
            {dataSkills.map(({ srcImage, skillName }) => (
              <div className="card-skill">
                <div className="skill-image">
                  <img src={ srcImage } alt='html5 icon' />
                </div>
                <p className="p-text">{ skillName }</p>
              </div>
            ))}
          </div>
          <div className="exp-list">
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