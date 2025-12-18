import { useNavigate } from "react-router-dom";
import "../../styles/Casino.css";
import blackjackIMG from "../../assets/casino/blackjack.png";
import tragamonedas3DIMG from "../../assets/casino/Tragamonedas.png";

const gamesPreview = [
  {
    title: "Blackjack",
    image: blackjackIMG,
    route: "/casino/blackjack",
  },
  {
    title: "Tragamonedas 3D",
    image: tragamonedas3DIMG,
    route: "/casino/tragamonedas3d",
  },
];

const BanerCasino = () => {
  const navigate = useNavigate();

  return (
    <section className="casino-section">
      <h2 className="casino-title">🎰 Casino – Proyectos interactivos</h2>

      <div className="banner-casino">
        {gamesPreview.map((game) => (
          <button
            key={game.title}
            className="game-card"
            onClick={() => navigate(game.route)}
            aria-label={`Ir a ${game.title}`}
          >
            <img src={game.image} alt={game.title} />

            <div className="game-overlay">
              <h3>{game.title}</h3>
              <span>Jugar →</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default BanerCasino;
