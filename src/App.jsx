import "./App.css";
import "./components/ProfileImage";
import GridComp, { ProfileImage } from "./components/ProfileImage";
import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid";
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
// Imágenes para la grilla
import image1 from "./assets/resources/mai.png";
import image2 from "./assets/resources/render3.png";
import image3 from "./assets/resources/render4.png";
import image4 from "./assets/resources/render5.png";
import image5 from "./assets/resources/render4.png";
import image6 from "./assets/resources/render4.png";
import Habilidades from "./components/Habilidades";
import vid from "../src/assets/resources/bgVid.mp4";
import Rss from "./components/Rss";

function App() {
  const imgs = [image1, image2, image3, image4, image5, image6];
  const { unityProvider } = useUnityContext({
    loaderUrl: "src/build/webGlBuild.loader.js",
    dataUrl: "src/build/webGlBuild.data.gz",
    frameworkUrl: "src/build/webGlBuild.framework.js.gz",
    codeUrl: "src/build/webGlBuild.wasm.gz",
  });

  return (
    <>
      {/* Contenido principal */}

      <div className="content">
        <Header />
        <ProfileImage />
        <Habilidades />
        <Unity
          unityProvider={unityProvider}
          style={{ width: 800, height: 600 }}
        />
        <ImageGrid imageList={imgs} />
        <Rss></Rss>
      </div>
    </>
  );
}

export default App;
