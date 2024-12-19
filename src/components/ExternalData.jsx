import React, { useState } from "react";

const ExternalData = () => {
  const [url, setUrl] = useState(""); // Almacena la URL ingresada
  const [images, setImages] = useState([]); // Guarda las imágenes extraídas
  const [error, setError] = useState(""); // Guarda errores en caso de fallo

  const handleAttack = async () => {
    setError(""); // Resetea el error previo
    setImages([]); // Limpia la lista de imágenes anteriores

    if (!url) {
      setError("Por favor ingresa una URL válida.");
      return;
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error al acceder al sitio: ${response.statusText}`);
      }

      const html = await response.text(); // Obtén el HTML como texto
      const parser = new DOMParser(); // Crea un parser de DOM
      const doc = parser.parseFromString(html, "text/html");

      // Encuentra todas las etiquetas <img> y extrae sus URLs
      const imgTags = doc.querySelectorAll("img");
      const imgUrls = Array.from(imgTags).map((img) => img.src);

      if (imgUrls.length === 0) {
        setError("No se encontraron imágenes en el sitio proporcionado.");
      } else {
        setImages(imgUrls);
      }
    } catch (err) {
      setError(`Error al procesar la solicitud: ${err.message}`);
    }
  };

  return (
    <>
      <h2>Site Scraping</h2>
      <input
        placeholder="Enter URL of site to scrape"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{
          padding: "8px",
          width: "300px",
          marginRight: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={handleAttack}
        style={{
          padding: "8px 16px",
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Attack
      </button>
      <div style={{ marginTop: "20px" }}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {images.length > 0 && (
          <>
            <h3>Found Images:</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {images.map((src, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  <img
                    src={src}
                    alt={`Imagen ${index + 1}`}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default ExternalData;
