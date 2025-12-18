import unityImg from "../assets/images/Unity-Logo.png";
import blenderImg from "../assets/images/blenderLogo.png";
import cSharpImg from "../assets/images/Logo_C_sharp.svg.png";
import substance from "../assets/images/substance.png";
import python from "../assets/images/py.png";
import js from "../assets/images/js.png";
import cmm from "../assets/images/cmm.png";
import github from "../assets/images/github.png";
import css from "../assets/images/css.png";
import html from "../assets/images/html.png";
import node from "../assets/images/node.png";
import ollama from "../assets/images/ollama.png";
import aws from "../assets/images/aws.png";

const skills = [
  { src: unityImg, name: "Unity" },
  { src: cSharpImg, name: "C#" },
  { src: cmm, name: "C++" },
  { src: python, name: "Python" },
  { src: js, name: "JavaScript" },
  { src: css, name: "CSS" },
  { src: html, name: "HTML" },
  { src: blenderImg, name: "Blender" },
  { src: substance, name: "Substance Painter" },
  { src: github, name: "GitHub", light: true },
  { src: node, name: "Node.js" },
  { src: ollama, name: "Ollama" },
  { src: aws, name: "AWS" },
];

export default function Habilidades() {
  return (
    <section className="skills">
      <h1 className="skills-title">Habilidades</h1>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`skill-item ${skill.light ? "light" : ""}`}
            title={skill.name}
          >
            <img src={skill.src} alt={skill.name} />
          </div>
        ))}
      </div>
    </section>
  );
}
