import { useInView } from '../hooks/useInView'
import styles from './About.module.css'

const BASE = import.meta.env.BASE_URL

export function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className={`${styles.about} reveal ${inView ? 'visible' : ''}`} ref={ref}>
      <div className={styles.container}>
        <img src={`${BASE}profile.jpg`} alt="Christopher Hosken" className={styles.headshot} />
        <div className={styles.info}>
          <h2>Hey! I'm Christopher Hosken</h2>
          <p>
            A Generalist TD who loves all aspects of the VFX/Animation
            pipeline. I am passionate about all things tech and am currently exploring Artificial
            Intelligence, Web Applications, and all things USD! I am currently
            looking for TD roles in pipeline, FX and RnD.
          </p>
        </div>
      </div>
    </section>
  )
}
