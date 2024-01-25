import React from 'react';
import styles from './Aside.modules.css';

interface AsideProps {
  title?: string;
  text1?: string;
  text2?: string;
}

const Aside: React.FC<AsideProps> = ({ title, text1, text2 }) => {
  const hasContent = title || text1 || text2;

  return (
    <div className={styles.asideContainer}>
      {hasContent ? (
        <>
          {title && <h4 className={`${styles.text} ${styles.h4}`}>{title}</h4>}
          {text1 && (
            <p className={`${styles.text} ${styles.t1}`}>
              <b>{text1}</b>
            </p>
          )}
          {text2 && <p className={`${styles.text} ${styles.t2}`}>{text2}</p>}
        </>
      ) : (
        <>
          <h4 className={`${styles.text} ${styles.h4}`}>Advertisement</h4>
          <p className={`${styles.text} ${styles.t1}`}>
            <b>You can place ads</b>
          </p>
          <p className={`${styles.text} ${styles.t2}`}>750x100</p>
        </>
      )}
    </div>
  );
};

export default Aside;
