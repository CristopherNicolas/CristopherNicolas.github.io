import {  useNavigate } from "react-router-dom";
import "../../styles/blackjack.css";

const Tragamonedas = () => {

     const navigate = useNavigate();

  return (
    <div className="blackjack-page">
      <h1 className="blackjack-title">Tragamonedas 3D</h1>  
      <p className="blackjack-description">
        Si estas jugando en movil, gira la pantalla para una mejor experiencia.  
      </p>

      <div className="blackjack-embed-wrapper">
     <iframe frameBorder="0" src="https://itch.io/embed-upload/15184214?color=111111" allowfullscreen="" width="1300" height="760"><a href="https://criztophernicolas.itch.io/tragamonedas-3d">Play Tragamonedas on itch.io</a></iframe>
      </div>
      <br></br>
       <button onClick={() => navigate("/")}>
      Regresar a portafolio
    </button>
    </div>
  );
};

export default Tragamonedas;
