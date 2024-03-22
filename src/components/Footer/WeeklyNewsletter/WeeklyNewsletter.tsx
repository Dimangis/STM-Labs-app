import React, { useState } from 'react';
import styles from './WeeklyNewsletter.modules.css';
import Text from 'components/common/Text/Text';
import { post } from 'services/transpot';

const WeeklyNewsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/Emails', email);
    alert('Данные успешно отправлены.');
  };

  return (
    <form className={styles.newsletterForm} onSubmit={handleSubmit}>
      <Text element="h4" variant="h4">
        Weekly Newsletter
      </Text>
      <Text variant="paragraph" element="span">
        Get blog articles and offers via email
      </Text>
      <input
        type="email"
        placeholder="Your Email"
        className={styles.emailInput}
        onChange={event => setEmail(event.target.value)}
        // style={{color: var(--main-text-color)}}
        required
      />
      <button type="submit" className={styles.subscribeButton}>
        Subscribe
      </button>
    </form>
  );
};

export default WeeklyNewsletter;
