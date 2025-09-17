import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import Lightbox from './components/Lightbox'
import { useEffect, useState } from 'react'
import CompanyBar from './components/CompanyBar'

function App() {
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
            <div>
              <h2>Hello! I'm Christopher Hosken</h2>
              <p>
                A CG Generalist and Technical Director passionate about 
                creating visually stunning content and solving creative 
                and technical challenges. I enjoy blending artistry with 
                problem-solving across animation, VFX, and interactive media.
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section id="history">
          <h2>History</h2>
          <ul className="timeline">
            <li>
              <strong>R&D Intern</strong> — Electric Theatre Collective
              <br /><em>Jun 2025 – Sep 2025</em>
              <p>Delivered 3D assets, animation, and lighting for commercials and short films.</p>
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

export default App
