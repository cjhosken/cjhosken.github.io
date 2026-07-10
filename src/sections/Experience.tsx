import { useInView } from '../hooks/useInView'
import styles from './Experience.module.css'

const BASE = import.meta.env.BASE_URL

export function Experience() {
  const { ref, inView } = useInView()

  return (
    <section id="history" className={styles.history} ref={ref}>
      <div className={`${styles.historyContainer} reveal ${inView ? 'visible' : ''}`}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <ul className={styles.timeline}>
          <li className={styles.timelineItem}>
            <a href="https://untoldstudios.tv/" target="_blank" rel="noopener noreferrer">
              <div className={styles.itemHeader}>
                <img src={`${BASE}logos/untold.png`} alt="Untold" />
                <div className={styles.itemTitle}>
                  <h3>R&D Developer</h3>
                  <h4>Untold Studios</h4>
                </div>
              </div>
              <em className={styles.date}>Aug 2026 – Present</em>
              <p className={styles.description}>

              </p>
            </a>
          </li>
          <li className={styles.timelineItem}>
            <a href="https://electrictheatre.tv" target="_blank" rel="noopener noreferrer">
              <div className={styles.itemHeader}>
                <img src={`${BASE}logos/etc.png`} alt="ETC" />
                <div className={styles.itemTitle}>
                  <h3>R&D Intern</h3>
                  <h4>Electric Theatre Collective</h4>
                </div>
              </div>
              <em className={styles.date}>Jun 2025 – Sep 2025</em>
              <p className={styles.description}>
                - Responsible for FX elements on live projects <br />
                - Developed user-friendly AI tools for motion capture and camera tracking <br />
                - Built a web app to rent AWS machines for rendering <br />
                - Integrated Blender into ETC's pipeline <br />
              </p>
            </a>
          </li>
        </ul>
      </div>

      <div className={`${styles.historyContainer} reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: '150ms' }}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <ul className={styles.timeline}>
          <li className={styles.timelineItem}>
            <a href="https://www.bournemouth.ac.uk/about/our-faculties/faculty-media-communication/national-centre-computer-animation" target="_blank" rel="noopener noreferrer">
              <div className={styles.itemHeader}>
                <img src={`${BASE}logos/bu.jpg`} alt="BU" />
                <div className={styles.itemTitle}>
                  <h3>Computer Animation Technical Arts</h3>
                  <h4>Bournemouth University | Bachelor of Arts with Honours</h4>
                </div>
              </div>
              <em className={styles.date}>Sep 2023 - Jun 2026</em>
              <p className={styles.description}>
                - Skills: Pipeline, Asset Creation, Rigging, FX, Lighting, Rendering, Compositing <br />
                - Primarily worked in Houdini with Solaris <br />
                - Developed Pipeline tools and renderfarm tools for the University <br />
                - Directed and led projects <br />
                - Student Ambassador & Volunteer for the BFX Festival.
              </p>
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.cvWrapper}>
        <a href={`${BASE}ChristopherHosken_CurriculumVitae_2026.pdf`} target="_blank" rel="noopener noreferrer" className={styles.cvBtn}>
          See Curriculum Vitae
        </a>
      </div>
    </section>
  )
}
