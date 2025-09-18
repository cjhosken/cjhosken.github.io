import './HomePage.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import Lightbox from '../components/Lightbox'
import { useEffect, useState } from 'react'
import CompanyBar from '../components/CompanyBar'

export default function HomePage() {
  const [showLightbox, setShowLightbox] = useState<boolean>(false);

  const openLightbox = () => {
    window.scrollTo(0, 0);
    setShowLightbox(true);
  }

  const closeLightbox = () => {
    setShowLightbox(false);
  }

  useEffect(() => {
    const html = document.querySelector("html");

    if (!html) return;

    if (showLightbox) {
      html.style.overflowY = "hidden";
    } else {
      html.style.overflowY = "scroll";
    }
    
    return () => {
      html.style.overflowY = "scroll";
    };
  }, [showLightbox]);


  return (
    <>
      {showLightbox && <Lightbox closeLightbox={closeLightbox}/>}
      <Navbar />
      <main>
        <div id="hero">
          <video id="backdrop" autoPlay loop muted playsInline>
            <source src="/videos/cover.mov" type="video/mp4" />
          </video>
          <div id="cover">
            <h1>Christopher Hosken</h1>
            <p> CG Generalist | Generalist TD </p>
            <button onClick={openLightbox}> Showreel </button>
          </div>
          <div id="icon-bar">
            <a href="https://www.linkedin.com/in/christopher-hosken/" className="icon" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/cjhosken" className="icon" target="_blank"><FaGithub/></a>
            <a href="https://www.youtube.com/@cjhosken" className="icon" target="_blank"><FaYoutube/></a>
          </div>
        </div>
        {/* About Section */}
        <section id="about">
          <div className="about-container">
            <img src="/images/headshot.jpg" alt="Christopher Hosken" className="headshot" />
            <div id="info">
              <h2>Hello! I'm Christopher Hosken</h2>
              <p>
                I'm a Generalist TD currently studying Computer Animation Technical Arts at Bournemouth University.
                With experience in all aspects of the CG/VFX pipeline, I am able to fit into whatever role given to me.
                My passions include Artificial Intelligence, Web Development, and all things Universal Scene Description (USD).
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section id="experience">
          <h2>Experience</h2>
          <ul className="timeline">
            <li>
              <strong>R&D Intern</strong> — Electric Theatre Collective
              <br /><em id="date">Jun 2025 – Sep 2025</em>
              <p id="description">Delivered 3D assets, animation, and lighting for commercials and short films.</p>
            </li>
            <li>
              <strong>Computer Animation Technical Arts</strong> — Bournemouth University  
              <br /><em>Sep 2023 – Current</em>
              <p>Specialized in 3D production, rendering, and technical direction.</p>
            </li>
          </ul>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2>Skills</h2>
          <div className="skills">
            <span className="skill">Maya</span>
            <span className="skill">Houdini</span>
            <span className="skill">Blender</span>
            <span className="skill">Unreal Engine</span>
            <span className="skill">Python</span>
            <span className="skill">Nuke</span>
            <span className="skill">Substance Painter</span>
          </div>
        </section>
        <CompanyBar/>
      </main>
      <Footer />
    </>
  )
}
