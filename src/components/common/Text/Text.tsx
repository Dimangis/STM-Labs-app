import React, { CSSProperties } from 'react';
import styles from './Text.modules.css';

interface TextProps {
  lineHeight?: string;
  fontSize?: string;
  bold?: '400' | '500' | '600';
  content: string;
  align?: 'left' | 'center' | 'right';
  margin?: string;
  padding?: string;
  color?: string;
}

const Text: React.FC<TextProps> = ({ lineHeight, fontSize, bold, content, align, margin, padding, color }) => {
  const textStyle: CSSProperties = {
    lineHeight: lineHeight || 'normal',
    fontSize: fontSize || 'inherit',
    fontWeight: bold || '500',
    textAlign: align || 'left',
    margin: margin || '0',
    padding: padding || '0',
    color: color || 'red',
  };

  return (
    <div style={textStyle} className={styles.WorkSans}>
      {content}
    </div>
  );
};

export default Text;
