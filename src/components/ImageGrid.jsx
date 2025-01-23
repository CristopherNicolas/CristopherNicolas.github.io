import React, { useState } from "react";
import "../styles/ImageGrid.css"; // Importar el archivo CSS

const ImageGrid = ({ imageList }) => {
  const [currentIndex, setCurrentIndex] = useState(null);

  // Función para determinar si el archivo es una imagen
  const isImage = (file) => file.match(/\.(jpeg|jpg|gif|png)$/i);
  const isVideo = (file) => file.match(/\.(mp4|webm|ogg)$/i);

  // Abrir el modal
  const openModal = (index) => {
    setCurrentIndex(index);
  };

  // Cerrar el modal
  const closeModal = () => {
    setCurrentIndex(null);
  };

  // Avanzar a la siguiente imagen/video
  const nextMedia = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };

  // Retroceder a la imagen/video anterior
  const prevMedia = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length
    );
  };

  return (
    <div style={styles.gridContainer}>
      {imageList.length === 0 ? (
        <p style={styles.placeholder}>Hover over a section to see media</p>
      ) : (
        imageList.map((file, index) => (
          <div
            key={index}
            className="media-container"
            onClick={() => openModal(index)}
          >
            {isImage(file) ? (
              <img src={file} alt={`media-${index}`} className="image" />
            ) : isVideo(file) ? (
              <video
                src={file}
                className="video"
                alt={`media-${index}`}
                muted
                loop
                preload="metadata"
              />
            ) : null}
          </div>
        ))
      )}

      {/* Modal */}
      {currentIndex !== null && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {isImage(imageList[currentIndex]) ? (
              <img
                src={imageList[currentIndex]}
                alt={`image-${currentIndex}`}
                className="modal-image"
              />
            ) : isVideo(imageList[currentIndex]) ? (
              <video
                src={imageList[currentIndex]}
                className="modal-video"
                controls
                autoPlay
              />
            ) : null}
            <button className="prev" onClick={prevMedia}>
              &#8249;
            </button>
            <button className="next" onClick={nextMedia}>
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
