import React, { useEffect, useState } from "react";

const GitHubProjects = ({ username }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        if (!response.ok) throw new Error("Error fetching repositories");
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [username]);

  if (loading) return <div>Loading projects...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={styles.container}>
      <div style={styles.headerContainer}>
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub Logo"
          style={styles.logo}
        />
        <h2 style={styles.header}>GitHub Projects</h2>
      </div>
      <button
        onClick={() => setIsVisible(!isVisible)}
        style={styles.toggleButton}
      >
        {isVisible ? "Hide Projects" : "Show Projects"}
      </button>
      {isVisible && (
        <div style={styles.projectList}>
          {projects.map((project) => (
            <div key={project.id} style={styles.projectCard}>
              <h3 style={styles.projectName}>{project.name}</h3>
              <p style={styles.projectDescription}>
                {project.description || "No description available"}
              </p>
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "15px",
  },
  logo: {
    width: "40px",
    height: "40px",
  },
  header: {
    color: "#333",
    fontSize: "20px",
  },
  toggleButton: {
    padding: "10px 15px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007acc",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "15px",
  },
  projectList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  projectCard: {
    padding: "15px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "100%", // Para dispositivos pequeños
    maxWidth: "300px", // Limita el ancho en pantallas grandes
    boxSizing: "border-box",
  },
  projectName: {
    fontSize: "18px",
    margin: "0 0 10px 0",
    color: "#007acc",
  },
  projectDescription: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px",
  },
  link: {
    fontSize: "14px",
    color: "#007acc",
    textDecoration: "none",
  },
  "@media (min-width: 600px)": {
    projectCard: {
      width: "calc(50% - 20px)", // Dos columnas en pantallas medianas
    },
  },
};

export default GitHubProjects;
