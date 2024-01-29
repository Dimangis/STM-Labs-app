import React from 'react';
import styles from './Footer.modules.css';
import About from './About/About';
import QuickLink from './QuickLink/QuickLink';
import Category from './Category/Category';
import WeeklyNewsletter from './WeeklyNewsletter/WeeklyNewsletter';
import Bot from './Bot/Bot';

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTopContent}>
          <About />
          <QuickLink />
          <Category />
          <WeeklyNewsletter />
        </div>
        <div>
          <Bot />
        </div>
      </div>
    </footer>
  );
}
