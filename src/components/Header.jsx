import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGamepad,
  faCode,
  faEnvelope,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <a href="#home" className="nav-link">
              <FontAwesomeIcon icon={faHome} />
              Home
            </a>
          </li>

          <li>
            <a href="#projects" className="nav-link">
              <FontAwesomeIcon icon={faGamepad} />
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="nav-link">
              <FontAwesomeIcon icon={faCode} />
              Skills
            </a>
          </li>

          <li>
            <a href="#contact" className="nav-link">
              <FontAwesomeIcon icon={faEnvelope} />
              Contact
            </a>
          </li>

          <li>
            <a href="#cv" className="nav-link nav-cta">
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
