import "./App.css";
import "./components/ProfileImage";
import GridComp, { ProfileImage } from "./components/ProfileImage";
import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid";
import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import image1 from "./assets/resources/mai.png";
import image2 from "./assets/resources/render3.png";
import image3 from "./assets/resources/render4.png";
import image4 from "./assets/resources/render5.png";
import image5 from "./assets/resources/render4.png";
import image6 from "./assets/resources/render4.png";
import Habilidades from "./components/Habilidades";
import Rss from "./components/Rss";
import { InstagramEmbed } from "react-social-media-embed";
import GithubProjects from "./components/GithubProjects";

function App() {
  const imgs = [image1, image2, image3, image4, image5, image6];
  const { unityProvider } = useUnityContext({
    loaderUrl: "src/build/webGlBuild.loader.js",
    dataUrl: "src/build/webGlBuild.data.gz",
    frameworkUrl: "src/build/webGlBuild.framework.js.gz",
    codeUrl: "src/build/webGlBuild.wasm.gz",
  });

  // Lista de publicaciones de Instagram
  const instagramPosts = [
    {
      url: "https://www.instagram.com/p/DDBjPoQu-bl/?img_index=1",
      alt: "Post 1",
      w: 450,
    },
    {
      url: "https://www.instagram.com/p/C8s6R6XNxm6/?img_index=2",
      alt: "Post 2",
      w: 450,
    },
    { url: "https://www.instagram.com/p/C294tWbumVp/", alt: "Post 3", w: 350 },
    {
      url: "https://www.instagram.com/p/C-312WVNukJ/?img_index=1",
      alt: "post 4",
      w: 450,
    },
  ];

  return (
    <>
      {/* Contenido principal */}
      <div className="content">
        <Header />
        <ProfileImage />
        <Habilidades />

        <h2>React + Unity WebGl</h2>
        <div id="projects">
          <Unity
            unityProvider={unityProvider}
            style={{
              width: 640,
              height: 420,
              borderRadius: 25,
            }}
          />
        </div>
        <GithubProjects username={"cristophernicolas"}></GithubProjects>
        <ImageGrid imageList={imgs} />
        <Rss />

        {/* Sección de publicaciones de Instagram */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          {instagramPosts.map((post, index, w) => (
            <>
              <div
                key={index}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <InstagramEmbed
                  url={post.url}
                  width={w}
                  maxWidth={500}
                  alt={post.alt}
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
