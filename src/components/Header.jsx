import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGamepad,
  faCode,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css"; // Asegúrate de crear este archivo para los estilos
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              <FontAwesomeIcon icon={faHome} /> Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">
              <FontAwesomeIcon icon={faGamepad} /> Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">
              <FontAwesomeIcon icon={faCode} /> Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </a>
          </li>
          
          <li className="nav-item"> 

              <a href="#cv" className="nav-link">
                CV
                <FontAwesomeIcon icon={faDownload} />
              </a>
            
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
