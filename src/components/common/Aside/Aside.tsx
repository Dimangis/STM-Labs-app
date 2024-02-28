import React from 'react';
import styles from './Aside.modules.css';
import { useSelector } from 'react-redux';
import Text from '../Text/Text';

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
    <div className={`${styles.asideContainer}`} style={asideContainer}>
      {hasContent ? (
        <>
          {title && (
            <Text variant="h6" element="h6">
              {title}
            </Text>
          )}
          {text1 && (
            <Text variant="paragraph" element="p">
              <b>{text1}</b>
            </Text>
          )}
          {text2 && (
            <Text variant="paragraph" element="span">
              {text2}
            </Text>
          )}
        </>
      ) : (
        <>
          <Text variant="h6" element="h6">
            Advertisement
          </Text>
          <Text variant="paragraph" element="p">
            <b>You can place ads</b>
          </Text>
          <Text variant="paragraph" element="span">
            750x100
          </Text>
        </>
      )}
    </div>
  );
};

export default Aside;
