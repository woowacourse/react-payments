import styles from "../ShelfHeader/ShelfHeader.module.css";

export default function ShelfHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div
      className={`${styles.container} ${!description && styles.none_description}`}
    >
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.description}>{description}</h3>
    </div>
  );
}
