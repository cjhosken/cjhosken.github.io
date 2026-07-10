import styles from './CompanyCard.module.css'

interface CompanyCardProps {
  title: string
  img: string
  url: string
}

export function CompanyCard({ title, img, url }: CompanyCardProps) {
  return (
    <a href={url} className={styles.card} target="_blank" rel="noopener noreferrer">
      <img src={img} alt={title} />
    </a>
  )
}
