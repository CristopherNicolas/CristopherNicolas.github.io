// src/components/HomePage.jsx
import "../App.css";
import { useEffect, useRef } from "react";

import Header from "./Header";
import Habilidades from "./Habilidades";
import BanerCasino from "./Casino/BanerCasino";
import GPP from "./GPP";
import CvViewer from "./CvViewer";
import Titulo from "./Titulo";
import ImageGrid from "./ImageGrid";
import SketchfabGrid from "./SketchfabGrid";
import Rss from "./Rss";

import { InstagramEmbed } from "react-social-media-embed";

import image1 from "../assets/resources/mai.png";
import image2 from "../assets/resources/render3.png";
import image3 from "../assets/resources/render4.png";
import image4 from "../assets/resources/render5.png";
import image5 from "../assets/resources/image.png";
import image6 from "../assets/resources/image2.png";
import video1 from "../assets/resources/bgVid.mp4";
import video2 from "../assets/resources/intro.mp4";
import HeroProfile from "./HeroProfile";

const imgs = [image1, image2, image3, image4, image5, image6];

const instagramPosts = [
   { url: "https://www.instagram.com/p/DOaZEHHDtpQ/?img_index=1", alt: "Post 1", w: 340 },
    { url: "https://www.instagram.com/p/DPoigW1kX-A/?img_index=1", alt: "Post 2", w: 340 },
    { url: "https://www.instagram.com/p/DMmLJQysqkg/?img_index=1", alt: "Post 4", w: 340 },
];

export default function HomePage() {
  const elementsRef = useRef([]);

  const observeRef = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    elementsRef.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="content">
      <Header />

      {/* HERO */}
      <section className="section hidden" ref={observeRef}>
        <HeroProfile />
      </section>

      {/* SKILLS */}
      <section id="skills" className="section hidden skills-section" ref={observeRef}>
        <Habilidades />
      </section>

      {/* PROJECTS */}
      <section className="section hidden" ref={observeRef}>
        <h1 id="projects">Mis proyectos</h1>
        <BanerCasino />
      </section>

      {/* NETCODE */}
      <section className="section hidden" ref={observeRef}>
        <h2>Desarrollo multiplayer online (Netcode for GameObjects)</h2>
        <div className="video-container">
          <video autoPlay loop muted>
            <source src={video2} type="video/mp4" />
          </video>
        </div>
      </section>

      {/* GITHUB */}
      <section className="section hidden" ref={observeRef}>
        <GPP username="cristophernicolas" />
      </section>

      {/* CV */}
      <section className="viewer-container section hidden" ref={observeRef}>
        <CvViewer />
        <Titulo />
      </section>

      {/* 3D & ANIMATION */}
      <section className="section hidden" ref={observeRef}>
        <h2>Modelado 3D, Texturizado, Rigging y Rendering</h2>
        <ImageGrid imageList={imgs} />
        <SketchfabGrid />

        <h2>Animación 2D en Unity</h2>
        <div className="video-container">
          <video autoPlay loop muted>
            <source src={video1} type="video/mp4" />
          </video>
        </div>
      </section>

      {/* INSTAGRAM */}
        <h2>Tambien soy cosplayer, mis publicaciones en Instagram</h2>
      <section className="section social-grid">
        {instagramPosts.map((post, i) => (
          <div key={i} className="hidden" ref={observeRef}>
            <InstagramEmbed
              url={post.url}
              width={post.w}
              height={post.w * 1.5}
              maxwidth={350}
            />
          </div>
        ))}
      </section>

      {/* CONTACT */}
      <section id="contact" className="section hidden" ref={observeRef}>
        <Rss />
      </section>
    </main>
  );
}
