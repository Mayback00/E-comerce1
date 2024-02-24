import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section-padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h4>Cafecito</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/ambiental">
              <p>Protección Ambiental</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Recursos</h4>
            <a href="/resources">
              <p>Centro de Recursos</p>
            </a>
            <a href="/resources">
              <p>Declaraciones</p>
            </a>
            <a href="/resources">
              <p>Cafetaleras</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Participación</h4>
            <a href="/employer">
              <p>El Ezi</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4>Compañia</h4>
            <a href="/about">
              <p>Sobre Nosotros</p>
            </a>
            <a href="/employer">
              <p>Prensa</p>
            </a>
            <a href="/career">
              <p>Carreras</p>
            </a>
            <a href="/contact">
              <p>Contacto</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
                <h4>Muy pronto en</h4>
                <div className="socialmedia">
                    <p><FaFacebook /></p>
                    <p><FaInstagram /></p>
                    <p><FaWhatsapp /></p>
                    <p><FaLinkedin /></p>
                </div>
            </div>
          <hr></hr>

          <div className="sb_footer-below">
            <div className="sb_footer-copyright">
                <p>
                    @{new Date().getFullYear()} Mayback. All right reserved.
                </p>
            </div>
            <div className="sb_footer-below-links">
                <a href="/termns"><div><p>Terminos y Condiciones</p></div></a>
                <a href="/provacy"><div><p>Privacidad</p></div></a>
                <a href="/security"><div><p>Seguridad</p></div></a>
                <a href="/cookie"><div><p>Declaración de Cookies</p></div></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
