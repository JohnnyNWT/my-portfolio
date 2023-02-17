import React from 'react';
import logo from '../images/logo.png';

class Header extends React.Component {
  render() {
    return(
      <div>
        <img src={logo} alt="logo" />
        <a>HOME</a>
        <a>SOBRE MIM</a>
        <a>PROJETOS</a>
        <a>SKILLS</a>
        <a>CONTATO</a>
      </div>
    );
  }
}

export default Header;