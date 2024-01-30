import React from 'react';
import styles from './Aside.modules.css';

interface AsideProps {
  title?: string;
  text1?: string;
  text2?: string;
  marginTop?: string;
}

const Aside: React.FC<AsideProps> = ({ title, text1, text2, marginTop }) => {
  const hasContent = title || text1 || text2;
  const asideContainer = {
    marginTop: marginTop || '120px', // Используем значение из пропс или значение по умолчанию
  };
  return (
    <div className={styles.asideContainer} style={asideContainer}>
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
