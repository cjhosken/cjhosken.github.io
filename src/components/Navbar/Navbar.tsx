import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import styles from './Navbar.module.css'

const BASE = import.meta.env.BASE_URL

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
    return () => { document.body.classList.remove('no-scroll') }
  }, [isOpen])

  const close = () => {
    setIsOpen(false)
  }

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.container}>
          <a href="/" className={styles.brand} onClick={close}>
            <img src={`${BASE}favicon_white.svg`} alt="Logo" height="32" />
          </a>
          <nav className={styles.desktopNav}>
            <a className={styles.navLink} href="#hero" onClick={close}>Home</a>
            <a className={styles.navLink} href="#features" onClick={close}>Projects</a>
            <a className={styles.navLink} href="#about" onClick={close}>Contact</a>
          </nav>
          <button className={styles.menuBtn} onClick={() => setIsOpen(true)} aria-label="Open menu">
            <FaBars size={24} />
          </button>
        </div>
      </header>
      <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`} onClick={() => setIsOpen(false)}>
        <button className={styles.overlayClose} onClick={() => setIsOpen(false)} aria-label="Close menu">
          <FaTimes size={22} />
        </button>
        <div className={styles.overlayContent} onClick={(e) => e.stopPropagation()}>
          <a className={styles.overlayLink} href="#hero" onClick={close}>Home</a>
          <a className={styles.overlayLink} href="#features" onClick={close}>Projects</a>
          <a className={styles.overlayLink} href="#about" onClick={close}>Contact</a>
        </div>
      </div>
    </>
  )
}
