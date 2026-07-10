import { useInView } from '../hooks/useInView'
import { CompanyCard } from '../components/CompanyCard'
import styles from './Companies.module.css'

const BASE = import.meta.env.BASE_URL

export function Companies() {
  const { ref, inView } = useInView()

  return (
    <section id="companies" className={`${styles.companies} reveal ${inView ? 'visible' : ''}`} ref={ref}>
      <CompanyCard
        title="NCCA"
        img={`${BASE}logos/ncca.png`}
        url="https://www.bournemouth.ac.uk/about/our-faculties/faculty-media-communication/national-centre-computer-animation"
      />
      <CompanyCard
        title="Electric Theatre Collective"
        img={`${BASE}logos/etc.png`}
        url="https://electrictheatre.tv/"
      />
      <CompanyCard
        title="Untold Studios"
        img={`${BASE}logos/untold.png`}
        url="https://untoldstudios.tv/"
      />
    </section>
  )
}
