import {  useNavigate } from "react-router-dom";
import "../../styles/blackjack.css";

const Blackjack = () => {

     const navigate = useNavigate();

  return (
    <div className="blackjack-page">
      <h1 className="blackjack-title">Blackjack</h1>

      <div className="blackjack-embed-wrapper">
        <iframe
          src="https://itch.io/embed-upload/14933378?color=086a00"
          frameBorder="0"
          allowFullScreen
          title="Blackjack"
        ></iframe>
      </div>
      <br></br>
       <button onClick={() => navigate("/")}>
      Regresar a portafolio
    </button>
    </div>
  );
};

export default Blackjack;
