import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'
import styles from './Hero.module.css'

const BASE = import.meta.env.BASE_URL

interface HeroProps {
  onShowreel: () => void
}

export function Hero({ onShowreel }: HeroProps) {
  return (
    <section id="hero" className={styles.hero}>
      <video className={styles.backdrop} autoPlay muted loop>
        <source src={`${BASE}videos/cover.mov`} type="video/mp4" />
      </video>
      <div className={styles.cover}>
        <h1>Christopher Hosken</h1>
        <p>Generalist TD</p>
        <button className={styles.showreelBtn} onClick={onShowreel}>
          Watch My Showreel
        </button>
      </div>
      <div className={styles.iconBar}>
        <a href="https://www.linkedin.com/in/christopher-hosken/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/cjhosken" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={24} />
        </a>
        <a href="https://www.youtube.com/@cjhosken" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube size={24} />
        </a>
      </div>
    </section>
  )
}
