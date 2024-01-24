import styles from './TitleBlock.module.css';

export default function TitleBlock() {
  return (
    <div className={styles.titleBlock}>
      <div className={styles.titleHeader}>
        <h1>Main Title</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.avatar}>
          <img src="url_to_avatar_image.jpg" alt="User's avatar" />
        </div>
        <div className={styles.details}>
          <div className={styles.name}>John Doe</div>
          <div className={styles.date}>January 1, 2023</div>
        </div>
      </div>
      <div className={styles.smallTitle}>Subtitle</div>
    </div>
  );
}
