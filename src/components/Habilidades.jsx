import unityImg from "../assets/images/Unity-Logo.png";
import blenderImg from "../assets/images/blenderLogo.png";
import cSharpImg from "../assets/images/Logo_C_sharp.svg.png";
import substance from "../assets/images/substance.png";
import python from "../assets/images/py.png";
export default function Habilidades() {
  return (
    <>
      <img src={unityImg} className="logo"></img>
      <img src={cSharpImg} className="logo"></img>
      <img src={blenderImg} className="logo"></img>
      <img src={substance} className="logo"></img>
      <img src={python} className="logo"></img>
    </>
  );
}
