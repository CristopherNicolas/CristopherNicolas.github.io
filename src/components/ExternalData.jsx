import React, { useState } from "react";
import "../styles/ExternalData.css";

const ExternalData = () => {
  const [url, setUrl] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleAttack = async () => {
    setError("");
    setImages([]);

    if (!url) {
      setError("Por favor ingresa una URL válida.");
      return;
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error al acceder al sitio: ${response.statusText}`);
      }

      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const imageElements = doc.getElementsByTagName("img");
      const imageUrls = Array.from(imageElements)
        .map((img) => img.src)
        .filter((src) => src && src.startsWith("http"));

      setImages(imageUrls);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="external-data-container">
      <div className="input-section">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Ingresa una URL para obtener las imágenes (algunas URL pueden no funcionar)"
          className="url-input"
        />
        <button onClick={handleAttack} className="fetch-button">
          Obtener Imágenes
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {images.length > 0 && (
        <div className="collapsible-section">
          <div
            className="collapsible-header"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <h3>Imágenes Encontradas ({images.length})</h3>
            <span className={`arrow ${isCollapsed ? "collapsed" : ""}`}>▼</span>
          </div>

          <div
            className={`collapsible-content ${isCollapsed ? "collapsed" : ""}`}
          >
            <div className="image-grid">
              {images.map((imgUrl, index) => (
                <div key={index} className="image-item">
                  <img src={imgUrl} alt={`Scraped ${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExternalData;
