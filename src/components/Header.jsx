import React from "react";

const Header = ({ onLinkHover }) => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Cris | Game Developer & Programmer</h1>
      <nav aria-label="Main Navigation">
        <ul style={styles.navList}>
          <li></li>
          <li>
            <a
              href="#home"
              style={styles.navLink}
              onMouseEnter={() => onLinkHover("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              style={styles.navLink}
              onMouseEnter={() => onLinkHover("projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              style={styles.navLink}
              onMouseEnter={() => onLinkHover("skills")}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              style={styles.navLink}
              onMouseEnter={() => onLinkHover("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "rgba(26, 26, 46, 0.8)",
    padding: "21px",
    color: "white",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  },
  title: {
    margin: 0,
    fontSize: "2.5rem",
    fontFamily: "'Poppins', sans-serif",
  },
  navList: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    marginTop: "20px",
  },
  navLink: {
    color: "#fff",
    fontSize: "1.2rem",
    textDecoration: "none",
    fontFamily: "'Roboto', sans-serif",
    transition: "color 0.3s ease, transform 0.3s ease",
  },
  navLinkHover: {
    color: "#ff6f61",
    transform: "scale(1.1)",
  },
};

export default Header;
