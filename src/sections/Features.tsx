import { FaGear, FaFire, FaCode } from 'react-icons/fa6'
import { useInView } from '../hooks/useInView'
import styles from './Features.module.css'

export function Features() {
  const { ref, inView } = useInView()

  return (
    <section id="features" className={styles.features} ref={ref}>
      <div className={`${styles.grid} reveal ${inView ? 'visible' : ''}`}>
        <a href="https://github.com/cjhosken-studio" target="_blank" rel="noopener noreferrer" className={styles.card}>
          <FaGear size={42} className={styles.cardIcon} />
          <h2>Pipeline</h2>
          <p>
            My experience as both an artist and developer has allowed me to
            write complex, user-friendly tools. Currently, I am
            experimenting with USD for modern pipelines.
          </p>
        </a>
        <a href="https://github.com/cjhosken" target="_blank" rel="noopener noreferrer" className={styles.card}>
          <FaFire size={42} className={styles.cardIcon} />
          <h2>FX</h2>
          <p>
            Primarily working in Houdini, I love working with fluids, pyro,
            vellum, and muscles. I'm growing an interest in CFX but love working
            on a variety of shots!
          </p>
        </a>
        <a href="https://github.com/cjhosken" target="_blank" rel="noopener noreferrer" className={styles.card}>
          <FaCode size={42} className={styles.cardIcon} />
          <h2>R&D</h2>
          <p>
            I have a mathematics, physics, and programming background. I'm currently learning
            web development and seeing how the future of VFX/Animation
            can be web-based.
          </p>
        </a>
      </div>
    </section>
  )
}
