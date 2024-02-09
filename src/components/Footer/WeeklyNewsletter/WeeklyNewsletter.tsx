import React from 'react';
import styles from './WeeklyNewsletter.modules.css';
import style from '../Footer.modules.css';
import { HeaderText, LinkText } from 'components/common/Text/TextObject';

const WeeklyNewsletter: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Добавьте обработчик подписки по вашему усмотрению
  };

  return (
    <form className={styles.newsletterForm} onSubmit={handleSubmit}>
      <HeaderText content="Weekly Newsletter" fontSize="20px" lineHeight="24px" />
      <LinkText content="Get blog articles and offers via email" />
      <input type="email" placeholder="Your Email" className={styles.emailInput} required />
      <button type="submit" className={styles.subscribeButton}>
        Subscribe
      </button>
    </form>
  );
};

export default WeeklyNewsletter;
