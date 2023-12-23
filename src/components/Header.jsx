import React from 'react';
import logo from '../images/logo.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../css/Header.css';

class Header extends React.Component {
  state = {
    show: true,
  };

  handleClickMenuToggle = (event) => {
    const { show } = this.state;
    document.body.style.overflow = show ? "hidden" : "initial";
    event.currentTarget.parentNode.classList.toggle('on', show);
    this.setState({ show: !this.state.show });
  }

  handleClickNavLink = (event) => {
    const { show } = this.state;
    if (!show) {
      document.body.style.overflow = show ? "hidden" : "initial";
      event.currentTarget.parentNode.classList.remove('on', show);
      this.setState({ show: !this.state.show })
    }
  }

  render() {

    return(
      <div className="container-principal">
        <a href='#Home'>
          <img src={ logo } alt="logo" className="img-logo" style={{ cursor: "pointer" }} />
        </a>
        <div className="menu-section">
          <div onClick={ this.handleClickMenuToggle } className="menu-toggle">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
          <div onClick={ this.handleClickNavLink } className="nav-links">
            <a href='#Home' className="nav-link">HOME</a>
            <a href='#Projects' className="nav-link">PROJETOS</a>
            <a href='#Skills' className="nav-link">SKILLS</a> 
            <a href='#Contact' className="nav-link">CONTATO</a>
          </div>
        <div className="menu-social-icons">
          <a href="https://www.linkedin.com/in/johnnydev/" target="_blank" className="social-icon">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/JohnnyNWT" target="_blank" className="social-icon">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.instagram.com/johnnynwt/" target="_blank" className="social-icon">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/johnnydev/" target="_blank" className="social-link">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/johnnynwt/" target="_blank" className="social-link">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://github.com/JohnnyNWT" target="_blank" className="social-link">
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;