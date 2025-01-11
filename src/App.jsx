import React, { useEffect, useRef } from "react";
import "./App.css";
import "./components/ProfileImage";
import GridComp, { ProfileImage } from "./components/ProfileImage";
import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid";
import Habilidades from "./components/Habilidades";
import Rss from "./components/Rss";
import GPP from "./components/GPP";
import { InstagramEmbed } from "react-social-media-embed";
import image1 from "./assets/resources/mai.png";
import image2 from "./assets/resources/render3.png";
import image3 from "./assets/resources/render4.png";
import image4 from "./assets/resources/render5.png";
import image5 from "./assets/resources/render4.png";
import image6 from "./assets/resources/render4.png";
import ExternalData from "./components/ExternalData";
function App() {
  const imgs = [image1, image2, image3, image4, image5, image6];

  const instagramPosts = [
    {
      url: "https://www.instagram.com/criztopher_nicolas/p/DEgoRz8MXTt/",
      alt: "Post 1",
      w: 450,
    },
    {
      url: "https://www.instagram.com/p/DDBjPoQu-bl/?img_index=1",
      alt: "Post 2",
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
      alt: "Post 4",
      w: 450,
    },
  ];

  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="content">
        <Header />
        <div className="hidden" ref={(el) => elementsRef.current.push(el)}>
          <ProfileImage />
        </div>
        <div className="hidden" ref={(el) => elementsRef.current.push(el)}>
          <Habilidades />
        </div>
        <ExternalData></ExternalData>
        <h1 className="hidden" ref={(el) => elementsRef.current.push(el)}>
          My Projects
        </h1>
        <div className="hidden" ref={(el) => elementsRef.current.push(el)}>
          <GPP username={"cristophernicolas"} />
        </div>
        <div className="hidden" ref={(el) => elementsRef.current.push(el)}>
          <ImageGrid imageList={imgs} />
        </div>
        <div className="hidden" ref={(el) => elementsRef.current.push(el)}>
          <Rss />
        </div>

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
          {instagramPosts.map((post, index) => (
            <div
              key={index}
              className="hidden"
              ref={(el) => elementsRef.current.push(el)}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <InstagramEmbed
                url={post.url}
                width={post.w}
                maxwidth={500}
                alt={post.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
