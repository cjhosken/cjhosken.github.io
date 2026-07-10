import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { projects } from '../data/projects'
import { ProjectLightbox } from '../components/ProjectLightbox'
import styles from './Portfolio.module.css'

export function Portfolio() {
  const { ref, inView } = useInView()
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const currentProject = projects.find((p) => p.id === selectedProject) ?? null

  return (
    <>
      <section id="portfolio" className={styles.portfolio} ref={ref}>
        <h2 className={styles.title}>Portfolio</h2>
        <div className={`${styles.grid} reveal ${inView ? 'visible' : ''}`}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={styles.card}
              onClick={() => setSelectedProject(project.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') setSelectedProject(project.id)
              }}
            >
              <img src={project.coverImage} alt={project.title} />
              <div className={styles.overlay}>
                <h3>{project.title}</h3>
                <p>{project.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ProjectLightbox project={currentProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}
