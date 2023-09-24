import styles from "./FilterCard.module.css";

export default function FilterCard({ name }: { name: string }) {
  return (
    <div className={styles.filter}>{name}</div>
  )
}