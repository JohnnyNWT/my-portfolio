import React from 'react';
import "../css/Contact.css"

class Contact extends React.Component {
  render() {
    return(
      <div id="Contact">
        <div className="social">

            <a href="https://www.linkedin.com/in/johnnydev/" target="_blank" className="social-icon">
              <i className="bi bi-linkedin"></i>
            </a>

          <a href="https://github.com/JohnnyNWT" target="_blank" className="social-icon">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.instagram.com/johnnynwt/" target="_blank" className="social-icon">
            <i className="bi bi-instagram"></i>
          </a>
          {/* <a target="_blank" className="social-icon">
            <i className="bi bi-whatsapp"></i>
          </a> */}
        </div>
        <section>
          <h2 className="h2-text">FALA <span className="span-my-projects">COMIGO.</span></h2>
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