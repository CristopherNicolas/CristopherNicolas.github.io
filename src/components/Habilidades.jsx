import unityImg from "../assets/images/Unity-Logo.png";
import blenderImg from "../assets/images/blenderLogo.png";
import cSharpImg from "../assets/images/Logo_C_sharp.svg.png";
import substance from "../assets/images/substance.png";
import python from "../assets/images/py.png";
import js from "../assets/images/js.png";
import cmm from "../assets/images/cmm.png";
export default function Habilidades() {
  return (
    <>
      <h1>Skills</h1>
      <img src={unityImg} className="logo"></img>
      <img src={cSharpImg} className="logo"></img>
      <img src={cmm} className="logo"></img>
      <img src={blenderImg} className="logo"></img>
      <img src={substance} className="logo"></img>
      <img src={python} className="logo"></img>
      <img src={js} className="logo"></img>
    </>
  );
}
