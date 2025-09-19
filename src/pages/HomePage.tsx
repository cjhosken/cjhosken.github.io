import './HomePage.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaCode, FaFire, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import Lightbox from '../components/Lightbox'
import { useEffect, useState } from 'react'
import CompanyBar from '../components/CompanyBar'
import { FaGear } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

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
      {showLightbox && <Lightbox closeLightbox={closeLightbox} />}
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
            <a href="https://github.com/cjhosken" className="icon" target="_blank"><FaGithub /></a>
            <a href="https://www.youtube.com/@cjhosken" className="icon" target="_blank"><FaYoutube /></a>
          </div>
        </div>
        {/* About Section */}
        <section id="about">
          <div className="about-container">
            <img src="/images/headshot.jpg" alt="Christopher Hosken" className="headshot" />
            <div id="info">
              <h2>Hey! I'm Christopher Hosken</h2>
              <p>
                I'm an aspiring Generalist TD currently studying Computer Animation at Bournemouth University. I love all aspects of the VFX/Animation pipeline and am adaptable and willing to fit multiple positions. I am passionate about all things tech and am currently exploring Artificial Intelligence, Web Applications, and all things USD! I am currently looking for TD roles in pipeline, FX and RnD.
              </p>
            </div>
          </div>
        </section>

        <section id="features">
          <div className="container">
            <a href="https://github.com/cjhosken-studio" target="_blank" className="feature">
              <FaGear/>
              <h1> Pipeline </h1>
              <p> 
                My experience as both an artist and a developer has allowed me to write complex, user-friendly tools in production.
                Currently, I am experimenting and with how USD can be used to streamline and create modern studio pipelines.
              </p>
            </a>
            <Link to="/projects" className="feature">
              <FaFire/>
              <h1> FX </h1>
              <p> 
                Primarily working in Houdini, I love working with fluids, pyro, vellum, and muscles.
                I'm growing an interest in CFX but love working on a variety of shots! 
              </p>
            </Link>
            <a href="https://github.com/cjhosken" target="_blank" className="feature">
              <FaCode/>
              <h1> R&D </h1>
              <p> I have a strong mathematics, physics, and programming background with knowledge of Python, C++, Qt, OpenGL, and USD.
                I'm currently learning web development with Vite and React and seeing how the future of VFX can be web-based.
                </p>
            </a>
          </div>
          <Link to="/projects" id="portfolio"> See Portfolio </Link>
        </section>

        <section id="history">
          {/* History Section */}
          <section id="experience" className="history-container">
            <h2 className="experience">Experience</h2>
            <ul className="timeline">
              <li>
                <a href="https://electrictheatre.tv" target="_blank">
                  <div className="header">
                    <img src="/logos/etc.png" />
                    <div className="title">
                      <h1>R&D Intern</h1>
                      <h2>Electric Theatre Collective</h2>
                    </div>
                  </div>
                  <em id="date">Jun 2025 – Sep 2025</em>
                  <p id="description">
                    - Responsible for FX elements on live projects <br/>
                    - Developed user-friendly AI tools for motion capture and camera tracking <br/>
                    - Built a web app to rent AWS machines for rendering <br/>
                    - Integrated Blender into ETC’s pipeline <br/>
                  </p>
                </a>
              </li>
            </ul>
          </section>
          <section id="education" className="history-container">
            <h2 className='experience'>Education</h2>
            <ul className="timeline">
              <li>
                <a href="https://www.bournemouth.ac.uk/about/our-faculties/faculty-media-communication/national-centre-computer-animation" target="_blank">
                  <div className="header">
                    <img src="/logos/bu.jpg" />
                    <div className="title">
                      <h1>(BA) Computer Animation Technical Arts</h1>
                      <h2>Bournemouth University</h2>
                    </div>
                  </div>
                  <em id="date">Expected Jun 2026</em>
                  <p id="description">Level 6</p>
                </a>
              </li>
            </ul>
          </section>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2>Skills</h2>
          <div className="skills">
            <a href="https://www.sidefx.com/products/houdini/" target="_blank" className="skill"><img src="/software/houdini.png"/></a>
            <a href="https://www.blender.org/" target="_blank" className="skill"><img src="/software/blender.png"/></a>
            <a href="https://www.autodesk.com/uk/products/maya/overview" target="_blank" className="skill"><img src="/software/maya.png"/></a>
            <a href="https://www.adobe.com/creativecloud/3d-ar/campaign/pricing.html" target="_blank" className="skill"><img src="/software/substance.png"/></a>
            <a href="https://www.foundry.com/products/mari" target="_blank" className="skill"><img src="/software/mari.png"/></a>
            <a href="https://www.foundry.com/products/nuke-family/nuke/" target="_blank" className="skill"><img src="/software/nuke.png"/></a>
            <a href="https://www.maxon.net/en/zbrush" target="_blank" className="skill"><img src="/software/zbrush.png"/></a>
            <a href="https://unity.com/" target="_blank" className="skill"><img src="/software/unity.png"/></a>
            <a href="https://www.unrealengine.com/en-US" target="_blank" className="skill"><img src="/software/unreal.png"/></a>

            <a href="https://www.pixar.com/openusd" target="_blank" className="skill"><img src="/software/usd.png"/></a>
            <a href="https://www.qt.io/" target="_blank" className="skill"><img src="/software/qt.png"/></a>
            <a href="https://www.opengl.org/" target="_blank" className="skill"><img src="/software/opengl.png"/></a>
            <a href="https://www.linux.org/" target="_blank" className="skill"><img src="/software/linux.png"/></a>
            <a href="https://www.microsoft.com/en-gb/windows" target="_blank" className="skill"><img src="/software/windows.png"/></a>
            <a href="https://www.android.com/intl/en_uk/" target="_blank" className="skill"><img src="/software/android.svg"/></a>

            <a href="https://www.python.org/" target="_blank" className="skill"><img src="/software/python.png"/></a>
            <a href="https://cplusplus.com/" target="_blank" className="skill"><img src="/software/cpp.png"/></a>
            <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank" className="skill"><img src="/software/c.png"/></a>
            <a href="https://dotnet.microsoft.com/en-us/languages/csharp" target="_blank" className="skill"><img src="/software/csharp.svg"/></a>
            <a href="https://www.java.com/en/" target="_blank" className="skill"><img src="/software/java.png"/></a>
            <a href="https://www.rust-lang.org/" target="_blank" className="skill"><img src="/software/rust.png"/></a>
            <a href="https://www.itonlinelearning.com/blog/html-css-and-javascript-essential-front-end-languages-explained/" target="_blank" className="skill"><img src="/software/web.png"/></a>
            <a href="https://vite.dev/" target="_blank" className="skill"><img src="/software/vite.png"/></a>
            <a href="https://react.dev/" target="_blank" className="skill"><img src="/software/react.png"/></a>
            <a href="https://flutter.dev/" target="_blank" className="skill"><img src="/software/flutter.png"/></a>

          </div>
          <p>git, npm, Docker, rez, VEX, MEL, ComfyUI, Qube, Davinci Resolve, Premiere Pro, Karma, Arnold, VRay, Renderman </p>
          <p> Leadership Initiative, Communication, Problem Solving </p>
          <p> French (Niveau B1), Audio Tech, Graphic Design, Calculus, Statistics, Physics</p>

        </section>
        <CompanyBar />
      </main>
      <Footer />
    </>
  )
}
