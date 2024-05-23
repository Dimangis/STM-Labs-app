import React from 'react';
import styles from './Tooltip.module.css';

interface TooltipProps {
  src: string;
  alt: string;
}

const Tooltip: React.FC<TooltipProps> = ({ src, alt }) => {
  return (
    <div className={styles.tooltip}>
      <img src={src} alt={alt} className={styles.tooltipImage} />
    </div>
  );
};

export default Tooltip;
