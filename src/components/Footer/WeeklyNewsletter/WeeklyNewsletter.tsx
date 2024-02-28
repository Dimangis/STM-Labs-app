import React from 'react';
import styles from './WeeklyNewsletter.modules.css';
import Text from 'components/common/Text/Text';

const WeeklyNewsletter: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Добавьте обработчик подписки по вашему усмотрению
  };

  return (
    <form className={styles.newsletterForm} onSubmit={handleSubmit}>
      <Text element="h4" variant="h4">
        Weekly Newsletter
      </Text>
      <Text variant="paragraph" element="span">
        Get blog articles and offers via email
      </Text>
      <input type="email" placeholder="Your Email" className={styles.emailInput} required />
      <button type="submit" className={styles.subscribeButton}>
        Subscribe
      </button>
    </form>
  );
};

export default WeeklyNewsletter;
