import unityImg from "../assets/images/Unity-Logo.png";
import blenderImg from "../assets/images/blenderLogo.png";
import cSharpImg from "../assets/images/Logo_C_sharp.svg.png";
import substance from "../assets/images/substance.png";
import python from "../assets/images/py.png";
import js from "../assets/images/js.png";
import cmm from "../assets/images/cmm.png";
import github from "../assets/images/github.png"
import css from "../assets/images/css.png"
import html from "../assets/images/html.png"
import node from "../assets/images/node.png"
import ollama from "../assets/images/ollama.png"
import aws from "../assets/images/aws.png"
export default function Habilidades() {
  return (
    <>
      <h1>Skills</h1>
      <img src={unityImg} className="logo"></img>
      <img src={cSharpImg} className="logo"></img>
      <img src={cmm} className="logo"></img>
      <img src={python} className="logo"></img>
      <img src={js} className="logo"></img>
      <img src={css} className="logo"></img>
      <img src={html} className="logo"></img>
      <img src={blenderImg} className="logo"></img>
      <img src={substance} className="logo"></img>
      <img src={github} className="logo" style={{backgroundColor:"white", borderRadius:"100px"}}></img>
      <img src={node} className="logo"></img>
        <img src={ollama} className="logo"></img>
      
      <img src={aws} className="logo"></img>
    </>
  );
}
