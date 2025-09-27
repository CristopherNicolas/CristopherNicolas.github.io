import pdf from "../assets/resources/titulo.pdf";
import "../styles/Titulo.css"; // Importamos el CSS

const TituloViewer = () => {
  return (
    <div id="titulo" className="titulo-container">
      <h2 className="titulo-header">🎓 Universidad Uniacc</h2>

      <div className="pdf-wrapper">
        <iframe
          src={`${pdf}#toolbar=1&navpanes=0`}
          title="Visor de Diploma"
        />
      </div>

      <a href={pdf} download="Diploma-Uniacc.pdf">
        <button className="download-button">
          Descargar licencia
        </button>
      </a>
    </div>
  );
};

export default TituloViewer;
