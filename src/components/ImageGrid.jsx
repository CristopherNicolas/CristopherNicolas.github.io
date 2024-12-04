import React, { useState } from "react";
import "../styles/ImageGrid.css"; // Importar el archivo CSS

const ImageGrid = ({ imageList }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  // Abrir el modal
  const openModal = (index) => {
    setCurrentImageIndex(index);
  };

  // Cerrar el modal
  const closeModal = () => {
    setCurrentImageIndex(null);
  };

  // Avanzar a la siguiente imagen
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };

  // Retroceder a la imagen anterior
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length
    );
  };

  return (
    <div style={styles.gridContainer}>
      {imageList.length === 0 ? (
        <p style={styles.placeholder}>Hover over a section to see images</p>
      ) : (
        imageList.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`image-${index}`}
            className="image"
            onClick={() => openModal(index)} // Abrir modal al hacer clic
          />
        ))
      )}

      {/* Modal */}
      {currentImageIndex !== null && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img
              src={imageList[currentImageIndex]}
              alt={`image-${currentImageIndex}`}
              className="modal-image"
            />
            <button className="prev" onClick={prevImage}>
              &#8249;
            </button>
            <button className="next" onClick={nextImage}>
              &#8250;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "10px",
    padding: "20px",
  },
  placeholder: {
    textAlign: "center",
    fontSize: "1.2rem",
    color: "#888",
  },
};

export default ImageGrid;
