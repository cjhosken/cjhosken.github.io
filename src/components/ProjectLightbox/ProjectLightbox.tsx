import { useEffect, useCallback } from 'react'
import { FaTimes, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa'
import type { Project } from '../../data/projects'
import styles from './ProjectLightbox.module.css'

interface ProjectLightboxProps {
  project: Project | null
  onClose: () => void
}

export function ProjectLightbox({ project, onClose }: ProjectLightboxProps) {
  const isOpen = project !== null

  const close = useCallback(() => {
    onClose()
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
    return () => { document.body.classList.remove('no-scroll') }
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) close()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, close])

  const handleBackdrop = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) close()
  }

  if (!project) return null

  return (
    <div className={`${styles.lightbox} ${isOpen ? styles.active : ''}`} onClick={handleBackdrop}>
      <div className={styles.card}>
        <button className={styles.closeBtn} aria-label="Close lightbox" onClick={close}>
          <FaTimes size={20} />
        </button>
        <div className={styles.coverWrap}>
          {project.youtubeId ? (
            <iframe
              className={styles.videoIframe}
              src={`https://www.youtube.com/embed/${project.youtubeId}?rel=0`}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={project.title}
            />
          ) : (
            <img src={project.coverImage} alt={project.title} />
          )}
        </div>
        <div className={styles.content}>
          <span className={styles.role}>{project.role}</span>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          {(project.pdfs.length > 0 || project.links.length > 0) && (
            <div className={styles.actions}>
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkBtn}
                >
                  <FaExternalLinkAlt size={13} />
                  {link.label}
                </a>
              ))}
              {project.pdfs.map((pdf) => (
                <a
                  key={pdf.label}
                  href={pdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.pdfLink}
                >
                  <FaFilePdf size={14} />
                  {pdf.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
