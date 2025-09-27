// src/components/Hero.jsx
import "../App.css";

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "45vh",
        background: "linear-gradient(135deg, #0f0f0f, #1a1a1a)",
        color: "white",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
        Hola, soy <span style={{ color: "crimson" }}>Cristopher Nicolás</span>
      </h1>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>
        Desarrollador, programador <span style={{ color: "crimson" }}>full stack </span> & Artista 3D
      </h2>
      <p style={{ maxWidth: "300px", marginBottom: "30px" }}>
        Diseño y construyo experiencias interactivas, combinando{" "}
        <strong>programación</strong>, <strong>desarrollo de videojuegos</strong> y{" "}
        <strong>arte 3D</strong>. Tambien me encanta el cosplay!
      </p>
      <a
        href="#projects"
        style={{
          background: "crimson",
          color: "white",
          padding: "12px 24px",
          borderRadius: "8px",
          fontSize: "1.1rem",
          textDecoration: "none",
          transition: "0.3s",
        }}
      >
        Ver mis proyectos
      </a>
    </section>
  );
};

export default Hero;
