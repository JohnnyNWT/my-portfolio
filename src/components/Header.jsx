import React from 'react';
import logo from '../images/logo.png';

class Header extends React.Component {
  render() {
    return(
      <div>
        <img src={logo} alt="logo" />
        <a href='#Home'>HOME</a>
        <a href='#About'>SOBRE MIM</a>
        <a href='#Projects'>PROJETOS</a>
        <a href='#Skills'>SKILLS</a>
        <a href='#Contact'>CONTATO</a>
      </div>
    );
  }
}

export default Header;