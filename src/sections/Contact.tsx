import { useState, type FormEvent } from 'react'
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { useInView } from '../hooks/useInView'
import styles from './Contact.module.css'

export function Contact() {
  const { ref, inView } = useInView()
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('idle')
      }
    } catch {
      setStatus('idle')
    }
  }

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={`${styles.wrapper} reveal ${inView ? 'visible' : ''}`}>
        <h2 className={styles.title}>Get in Touch</h2>

        <div className={styles.infoRow}>
          <div className={styles.infoItem}>
            <FaMapMarkerAlt size={14} className={styles.infoIcon} />
            <span>London, UK</span>
          </div>
          <div className={styles.infoItem}>
            <FaEnvelope size={14} className={styles.infoIcon} />
            <a href="mailto:hoskenchristopher@gmail.com">hoskenchristopher@gmail.com</a>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="d26e944b-e198-429e-9d3e-f191f2589f9b" />
          <input type="hidden" name="subject" value="New Message fromPortfolio" />
          <input type="hidden" name="from_name" value="cjhosken.github.io" />
          <input type="checkbox" name="botcheck" className={styles.botcheck} />

          <input type="text" name="name" placeholder="Your Name" required className={styles.input} />
          <input type="email" name="email" placeholder="your.email@example.com" required className={styles.input} />
          <input type="text" name="subject" placeholder="Regarding..." required className={styles.input} />
          <textarea name="message" placeholder="Your message here..." rows={5} required className={styles.textarea} />

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
