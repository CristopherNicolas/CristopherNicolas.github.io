import { useEffect, useState } from "react";
import "./GPP.css";

const GPP = ({ username }) => {
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

  if (loading) return <div className="gpp-status">Loading GitHub projects...</div>;
  if (error) return <div className="gpp-status error">Error: {error}</div>;

  return (
    <section className="gpp">
      <header className="gpp-header">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub"
        />
        <h2>GitHub Projects</h2>
      </header>

      <button
        className="gpp-toggle"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide projects" : "Show projects"}
      </button>

      {isVisible && (
        <div className="gpp-grid">
          {projects.map((project) => (
            <article key={project.id} className="gpp-card">
              <h3>{project.name}</h3>
              <p>{project.description || "No description available"}</p>

              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default GPP;
