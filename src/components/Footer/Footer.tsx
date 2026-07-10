import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'
import styles from './Footer.module.css'

const BASE = import.meta.env.BASE_URL

export function Footer() {
  return (
    <footer>
      <div className={styles.grid}>
        <div className={styles.column}>
          <p className={styles.sectionTitle}>Links</p>
          <div className={styles.columnContent}>
            <a href="#hero">Home</a>
            <a href="#features">Projects</a>
            <a href="#about">Contact</a>
          </div>
        </div>

        <div className={styles.column}>
          <p className={styles.sectionTitle}>Socials</p>
          <div className={styles.socialRow}>
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
        </div>

        <div className={styles.column}>
          <p className={styles.sectionTitle}>Contact</p>
          <ul className={styles.contactList}>
            <li>
              <a href="mailto:hoskenchristopher@gmail.com">
                <span className={styles.desktopOnly}>hoskenchristopher@gmail.com</span>
                <span className={styles.mobileOnly}>Email</span>
              </a>
            </li>
            <li>
              <a href="tel:+447393979912">
                <span className={styles.desktopOnly}>(+44)7393979912</span>
                <span className={styles.mobileOnly}>Phone</span>
              </a>
            </li>
            <li>
              <a href={`${BASE}ChristopherHosken_CurriculumVitae_2026.pdf`} target="_blank" rel="noopener noreferrer">
                <span className={styles.desktopOnly}>Download CV</span>
                <span className={styles.mobileOnly}>CV</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.copyright}>&copy; {new Date().getFullYear()} Christopher Hosken</p>
    </footer>
  )
}
