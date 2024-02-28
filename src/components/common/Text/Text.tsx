import React, { CSSProperties } from 'react';
import styles from './Text.modules.css'; // Подключаем файл со стилями

interface TextProps {
  variant?: 'header' | 'subheader' | 'paragraph' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  element?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  textColor?: 'primary' | 'secondary' | 'tertiary' | 'white' | 'blue';
  link?: boolean;
  margin?: string;
  padding?: string;
  lineHeight?: string;
  fontSize?: string;
  align?: 'left' | 'center' | 'right';
}

const Text: React.FC<TextProps> = ({
  variant,
  children,
  element = 'span',
  textColor,
  link = false,
  margin,
  padding,
  lineHeight,
  fontSize,
  align = 'left',
}) => {
  const ElementType = element || 'span';
  let classNames = styles.text; // Начальный класс для стилизации текста из модульного файла

  const textStyle: CSSProperties = {
    margin,
    padding,
    lineHeight,
    fontSize,
    textAlign: align,
  };

  // Добавляем класс в зависимости от варианта
  if (variant) {
    classNames += ` ${styles[variant]}`;
  }

  // Добавляем класс в зависимости от цвета текста
  if (textColor) {
    classNames += ` ${styles[textColor]}`;
  }

  if (link) {
    classNames += ` ${styles.link}`;
  }

  return (
    <ElementType className={classNames} style={textStyle}>
      {children}
    </ElementType>
  );
};

export default Text;
