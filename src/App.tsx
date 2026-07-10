import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Lightbox } from './components/Lightbox'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Features } from './sections/Features'
import { Experience } from './sections/Experience'
import { Companies } from './sections/Companies'
import { Contact } from './sections/Contact'
import { Portfolio } from './sections/Portfolio'
import styles from './App.module.css'

export default function App() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Hero onShowreel={() => setLightboxOpen(true)} />
        <About />
        <Features />
        <Portfolio />
        <Experience />
        <Companies />
        <Contact />
      </main>
      <Footer />
      <Lightbox isOpen={lightboxOpen} onClose={() => setLightboxOpen(false)} />
    </>
  )
}
