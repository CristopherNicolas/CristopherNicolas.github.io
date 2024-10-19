import unityImg from "../assets/images/Unity-Logo.png";
import nintendoImg from "../assets/images/nintendoLogo.png";
import blenderImg from "../assets/images/blenderLogo.png";
import cSharpImg from "../assets/images/Logo_C_sharp.svg.png";

export default function Habilidades() {
  return (
    <>
      <img src={unityImg} className="logo"></img>
      <img src={blenderImg} className="logo"></img>
      <img src={cSharpImg} className="logo"></img>
    </>
  );
}
