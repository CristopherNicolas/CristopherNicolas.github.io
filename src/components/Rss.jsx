import insta from "../assets/resources/instagram.png";
import twitter from "../assets/resources/WhatsApp.svg.webp";
import linkedin from "../assets/resources/linkedin.png";

const Rss = () => {
  return (
    <div className="social-bar">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={insta} alt="Instagram" className="social-icon" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src={twitter} alt="Twitter" className="social-icon" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="LinkedIn" className="social-icon" />
      </a>
    </div>
  );
};

export default Rss;
