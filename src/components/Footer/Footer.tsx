import React from 'react';
import styles from './Footer.modules.css';

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>{/* Ваш контент для Footer здесь */}</div>
      <div></div>
    </footer>
  );
}
