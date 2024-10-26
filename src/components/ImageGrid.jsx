import React from "react";

const ImageGrid = ({ imageList }) => {
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
            style={styles.image}
          />
        ))
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
  image: {
    width: "90%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  placeholder: {
    textAlign: "center",
    fontSize: "1.2rem",
    color: "#888",
  },
};

export default ImageGrid;
