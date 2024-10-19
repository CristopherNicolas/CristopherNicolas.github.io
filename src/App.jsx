import "./App.css";
import "./components/ProfileImage";
import GridComp, { ProfileImage } from "./components/ProfileImage";
import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid";

//iamgenes para la grilla
import image1 from "./assets/resources/mai.png";
import image2 from "./assets/resources/render3.png";
import image3 from "./assets/resources/render4.png";
import image4 from "./assets/resources/render5.png";
import image5 from "./assets/resources/render4.png";
import image6 from "./assets/resources/render4.png";
import Habilidades from "./components/Habilidades";
function App() {
  const imgs = [image1, image2, image3, image4, image5, image6];
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Header></Header>
        <ProfileImage></ProfileImage>
        <br />
        <Habilidades></Habilidades>
      </div>
      <ImageGrid imageList={imgs}></ImageGrid>
    </>
  );
}

export default App;
