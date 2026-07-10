import { useState, useEffect, useRef, useCallback } from 'react'
import { FaTimes } from 'react-icons/fa'
import { videos } from '../../data/videos'
import styles from './Lightbox.module.css'

interface LightboxProps {
  isOpen: boolean
  onClose: () => void
}

export function Lightbox({ isOpen, onClose }: LightboxProps) {
  const [selectedVideo, setSelectedVideo] = useState(videos[0].id)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const playerRef = useRef<any>(null)

  const loadPlayer = useCallback(() => {
    if (iframeRef.current && !playerRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const Player = (window as any).Vimeo?.Player
      if (Player) {
        playerRef.current = new Player(iframeRef.current)
      } else {
        const script = document.createElement('script')
        script.src = 'https://player.vimeo.com/api/player.js'
        script.onload = () => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const P = (window as any).Vimeo?.Player
          if (P) playerRef.current = new P(iframeRef.current!)
        }
        document.body.appendChild(script)
      }
    }
  }, [])

  const close = useCallback(async () => {
    if (playerRef.current) {
      try { await playerRef.current.pause() } catch { /* noop */ }
    }
    onClose()
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll')
      loadPlayer()
    } else {
      document.body.classList.remove('no-scroll')
    }
    return () => { document.body.classList.remove('no-scroll') }
  }, [isOpen, loadPlayer])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) close()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, close])

  const handleSelect = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value
    setSelectedVideo(id)
    if (playerRef.current) {
      try { await playerRef.current.loadVideo(id) } catch { /* noop */ }
    }
  }

  const handleBackdrop = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) close()
  }

  return (
    <div className={`${styles.lightbox} ${isOpen ? styles.active : ''}`} onClick={handleBackdrop}>
      <div className={styles.card}>
        <div className={styles.topbar}>
          <select className={styles.select} value={selectedVideo} onChange={handleSelect}>
            {videos.map((v) => (
              <option key={v.id} value={v.id}>{v.title}</option>
            ))}
          </select>
          <button className={styles.closeBtn} aria-label="Close lightbox" onClick={close}>
            <FaTimes size={20} />
          </button>
        </div>
        <div className={styles.videoWrap}>
          <iframe
            ref={iframeRef}
            className={styles.iframe}
            src={`https://player.vimeo.com/video/${selectedVideo}`}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
