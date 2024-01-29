import React from 'react';
import styles from './WeeklyNewsletter.modules.css';
import style from '../Footer.modules.css';

const WeeklyNewsletter: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Добавьте обработчик подписки по вашему усмотрению
  };

  return (
    <form className={styles.newsletterForm} onSubmit={handleSubmit}>
      <h3 className={`${styles.formTitle} ${style.title}`}>Weekly Newsletter</h3>
      <p className={`${styles.formDescription} ${style.textDecoration} ${style.text}`}>
        Get blog articles and offers via email
      </p>
      <input type="email" placeholder="Your Email" className={styles.emailInput} required />
      <button type="submit" className={styles.subscribeButton}>
        Subscribe
      </button>
    </form>
  );
};

export default WeeklyNewsletter;
