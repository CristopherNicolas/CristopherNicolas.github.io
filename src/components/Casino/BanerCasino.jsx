import { useNavigate } from "react-router-dom";
import "../../styles/Casino.css";
import blackjackIMG from "../../assets/casino/blackjack.png";
import tragamonedas3DIMG from "../../assets/casino/Tragamonedas.png";

const gamesPreview = [
  {
    title: "Blackjack",
    image: blackjackIMG, // imagen del juego
    route: "/casino/blackjack",        // ruta interna React
  },
  {
    title: "Tragamonedas 3D",
    image: tragamonedas3DIMG,
    route: "/casino/tragamonedas3d",      
  }
  // Puedes agregar más juegos siguiendo el mismo formato
];

const BanerCasino = () => {
  const navigate = useNavigate();

  return (
    <div className="banner-casino">
      {gamesPreview.map((game, index) => (
        <div
          key={index}
          className="game-card"
          onClick={() => navigate(game.route)}
        >
          <img src={game.image} alt={game.title} />
          <div className="game-card-info">
            <h3>{game.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BanerCasino;
