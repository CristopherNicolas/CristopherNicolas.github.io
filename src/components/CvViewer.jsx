
const CvViewer = () => {
  const pdfUrl = "/cv.pdf"; // Asegúrate de colocar el PDF en la carpeta "public"

  return (
    <div id="cv" style={{ textAlign: "center" }}>
      <h2>Mi CV</h2>
      <div style={{ width: "600px", height: "820px", margin: "auto", border: "1px solid #ccc" }}>
        <iframe
          src={pdfUrl}
          width="100%"
          height="100%"
          style={{ border: "none" }}
          title="Visor de CV"
        />
      </div>
      <a href={pdfUrl} download="CV.pdf">
        <button style={{ marginTop: "10px", padding: "10px 20px", cursor: "pointer" }}>
          Download CV
        </button>
      </a>
    </div>
  );
};

export default CvViewer;
