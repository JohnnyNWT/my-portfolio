import React from 'react';
import "../css/Contact.css"

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.contactSocialRef = React.createRef();
    this.contactFormRef = React.createRef();
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

    if (this.contactSocialRef.current) {
      intersectionObserver.observe(this.contactSocialRef.current);
    }

    if (this.contactFormRef.current) {
      intersectionObserver.observe(this.contactFormRef.current);
    }
  }

  render() {
    return(
      <div id="Contact">
        <div className="social hidden" ref={this.contactSocialRef}>
          <a href="https://www.linkedin.com/in/johnnydev/" target="_blank" className="social-icon">
            <i className="bi bi-linkedin"></i>
          </a>
        <a href="https://github.com/JohnnyNWT" target="_blank" className="social-icon">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://wa.me/message/4ZDWT75CEC5XB1" target="_blank" className="social-icon">
          <i className="bi bi-whatsapp"></i>
        </a>
        <a href="https://www.instagram.com/johnnydevdesigner/" target="_blank" className="social-icon">
          <i className="bi bi-instagram"></i>
        </a>
        </div>
        <section className="hidden" ref={this.contactFormRef}>
          <h2 className="h2-text">FALE <span className="span-my-projects">COMIGO.</span></h2>
          <form action="">
            <input type="text" placeholder="Digite seu nome" className="input-text" required />
            <input type="text" placeholder="Digite seu email" className="input-text" required />
            <textarea placeholder="Sua mensagem"></textarea>
            <div className="div-btn-enviar">
              <input className="btn-enviar" type="submit" value="ENVIAR" />
            </div>
          </form>
        </section>
        <div className="copyright">
          <p className="copy-text space">@2023 João Marcelo</p>
          <p className="copy-text">Todos os direitos reservados.</p>
        </div>
      </div>
    );
  }
}

export default Contact;