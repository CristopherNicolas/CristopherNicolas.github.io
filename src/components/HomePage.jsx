// src/components/HomePage.jsx
import "../App.css";
import  { useEffect, useRef } from "react";
import Header from "./Header";
import ImageGrid from "./ImageGrid";
import Habilidades from "./Habilidades";
import Rss from "./Rss";
import GPP from "./GPP";
import { InstagramEmbed } from "react-social-media-embed";
import image1 from "../assets/resources/mai.png";
import image2 from "../assets/resources/render3.png";
import image3 from "../assets/resources/render4.png";
import image4 from "../assets/resources/render5.png";
import image5 from "../assets/resources/image.png";
import image6 from "../assets/resources/image2.png";
import video1 from "../assets/resources/bgVid.mp4";
import video2 from "../assets/resources/intro.mp4";
import SketchfabGrid from "./SketchfabGrid";
import ProfileImage from "./ProfileImage";
import CvViewer from "./CvViewer";
import Titulo from "./Titulo";
import BanerCasino from "./Casino/BanerCasino";
import Hero from "./Hero";

const HomePage = () => {
  const imgs = [image1, image2, image3, image4, image5, image6];

  const instagramPosts = [
    { url: "https://www.instagram.com/criztopher_nicolas/p/DEgoRz8MXTt/", alt: "Post 1", w: 340 },
    { url: "https://www.instagram.com/p/DDBjPoQu-bl/?img_index=1", alt: "Post 2", w: 340 },
    { url: "https://www.instagram.com/p/C-312WVNukJ/?img_index=1", alt: "Post 4", w: 340 },
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
    <div className="content">
      <Header />
      <div className="hidden" ref={(el) => elementsRef.current.push(el)}>
        <ProfileImage />
      </div>
      <div id="home" className="hidden" ref={(el) => elementsRef.current.push(el)}>
      </div>
         <Hero />
      
     



      <div id="skills" className="hidden" ref={(el) => elementsRef.current.push(el)}>
        <Habilidades />
      </div>


      <h1 id="projects" className="hidden" ref={(el) => elementsRef.current.push(el)}>
        Mis proyectos
      </h1>
      <div className="hidden" ref={(el) => elementsRef.current.push(el)}>
        <BanerCasino />
      </div>

       <div className="hidden" ref={(el) => elementsRef.current.push(el)}>
        <h2>Desarrollo multiplyaer online (netcode for game objects)</h2>
        <div className="video-container">
            <video autoPlay loop muted style={{ width: "90vw", maxHeight: "500px" }}>
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

       </div>
        <br></br>
      <div className="hidden" ref={(el) => elementsRef.current.push(el)}>
        <GPP username={"cristophernicolas"} />
      </div>

      <div className="viewer-container">
        <CvViewer />
        <Titulo />
      </div>

      <div className="hidden" ref={(el) => elementsRef.current.push(el)}>
        <h2>Modelado 3D, Texturizado, rigging y rendering</h2>
        <ImageGrid imageList={imgs} />
        <SketchfabGrid />
        <h2>Animación 2D unity</h2>
        <div className="video-container">
          <video autoPlay loop muted style={{ width: "90vw", maxHeight: "500px" }}>
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      


      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "5px",
          justifyContent: "center",
          alignItems: "center",
          padding: "25px",
        }}
      >
        {instagramPosts.map((post, index) => (
          <div
            key={index}
            className="hidden"
            ref={(el) => elementsRef.current.push(el)}
            style={{ display: "flow", justifyContent: "center" }}
          >
            <InstagramEmbed
              url={post.url}
              width={post.w}
              height={post.w * 1.5}
              maxwidth={350}
              alt={post.alt}
            />
          </div>
        ))}
      </div>
      
      <div id="contact" className="hidden" ref={(el) => elementsRef.current.push(el)}>
        <Rss />
      </div>
    </div>
  );
};

export default HomePage;
