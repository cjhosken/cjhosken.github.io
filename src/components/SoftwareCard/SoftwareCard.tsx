import styles from './SoftwareCard.module.css'

interface SoftwareCardProps {
  title: string
  img: string
  url: string
}

export function SoftwareCard({ title, img, url }: SoftwareCardProps) {
  return (
    <a href={url} className={styles.card} target="_blank" rel="noopener noreferrer">
      <img src={img} alt={title} />
    </a>
  )
}
