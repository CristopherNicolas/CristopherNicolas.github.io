// src/components/HeroProfile.jsx
import ProfileImage from "./ProfileImage";
import "./HeroProfile.css";

export default function HeroProfile() {
  return (
    <div className="hero-profile">
      <div className="hero-image">
        <ProfileImage />
      </div>

      <div className="hero-text">
        <h1>
          Cristopher <span>Nicolás</span>
        </h1>

        <h2>Game Developer & 3D Artist</h2>

       <p>
  Desarrollador de videojuegos y <strong>desarrollador web</strong> con enfoque en
  <strong> Unity</strong>, <strong>C#</strong> y tecnologías modernas de frontend y backend.
  Especializado en <strong>multiplayer</strong>, <strong>experiencias interactivas</strong> y
  aplicaciones web robustas y escalables.
</p>

      </div>
    </div>
  );
}
