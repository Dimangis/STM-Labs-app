import React, { CSSProperties } from 'react';
import styles from './Text.modules.css';

export interface TextProps {
  fontFamily?: string;
  lineHeight?: string;
  fontSize?: string;
  bold?: string;
  content: React.ReactNode;
  align?: 'left' | 'center' | 'right' | 'justify';
  margin?: string;
  padding?: string;
  color?: string;
  transition?: string;
  theme?: 'light' | 'dark'; // Добавляем проп для указания темы
}

export class Text extends React.Component<TextProps> {
  render() {
    const {
      lineHeight = 'normal',
      fontSize = 'inherit',
      bold = '500',
      content,
      align = 'left',
      margin = '0',
      padding = '0',
      color = 'inherit',
      theme = 'light', // По умолчанию используется светлая тема
      transition = 'var(--change-theme-duration)',
    } = this.props;

    const textStyle: CSSProperties = {
      lineHeight,
      fontSize,
      fontWeight: bold,
      textAlign: align,
      margin,
      padding,
      color,
      transition,
    };

    return (
      <div className={`${styles.text} ${styles[theme]}`} style={textStyle}>
        {content}
      </div>
    );
  }
}
