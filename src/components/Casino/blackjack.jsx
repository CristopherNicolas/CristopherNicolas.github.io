import {  useNavigate } from "react-router-dom";
import "../../styles/blackjack.css";

const Blackjack = () => {

     const navigate = useNavigate();

  return (
    <div className="blackjack-page">
      <h1 className="blackjack-title">Blackjack</h1>  
      <p className="blackjack-description">
        Si estas jugando en movil, gira la pantalla para una mejor experiencia.  
      </p>

      <div className="blackjack-embed-wrapper">
     <iframe frameBorder="0" src="https://itch.io/embed-upload/14944524?color=086a00" allowfullscreen="" width="1300" height="760"><a href="https://criztophernicolas.itch.io/blackjack">Play blackjack on itch.io</a></iframe>
      </div>
      <br></br>
       <button onClick={() => navigate("/")}>
      Regresar a portafolio
    </button>
    </div>
  );
};

export default Blackjack;
