import React from 'react';
import MinhaFoto from '../images/minha-foto.png';

class About extends React.Component {
  render() {
    return(
      <div>
        <h2>Um pouco sobre mim!</h2>
        <img src={ MinhaFoto } alt="minha foto" />
        <p>Meu nome é João Marcelo, tenho 19 anos sou formado em Analise e desenvolvimento de sistemas e dês de criança sempre fui apaixonado pela tecnologia, aos 17 anos conheci a programação e desde o primeiro contato que tive me apaixonei passei um ano estudando desenvolvimento web front-end e atualmente estou estudando desenvolvimento web full-stack</p>
      </div>
    );
  }
}

export default About;