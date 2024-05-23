import React, { useState } from 'react';
import styles from './PictureComponent.modules.css';
import Tooltip from '../Tooltip/Tooltip'; //есть в mui, сделал собственную реализацию.

interface PictureComponentProps {
  pngPath1x?: string;
  pngPath2x?: string;
  webpPath1x?: string;
  webpPath2x?: string;
  avifPath1x?: string;
  avifPath2x?: string;
  jpgPath1x: string;
  jpgPath2x?: string;
  borderRadius?: string;
  tooltipImg: string;
  altText: string;
}

const PictureComponent: React.FC<PictureComponentProps> = ({
  pngPath1x,
  pngPath2x,
  webpPath1x,
  webpPath2x,
  avifPath1x,
  avifPath2x,
  jpgPath1x,
  jpgPath2x,
  borderRadius,
  tooltipImg,
  altText,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const pictureContainer = {
    borderRadius: borderRadius || '6px', // Используем значение из пропс или значение по умолчанию
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log('Enter!');
  };
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className={styles.pictureWrapper} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <picture>
        <source srcSet={avifPath2x} type="image/avif" media="(min-resolution: 2dppx)" />
        <source srcSet={avifPath1x} type="image/avif" />
        <source srcSet={webpPath2x} type="image/webp" media="(min-resolution: 2dppx)" />
        <source srcSet={webpPath1x} type="image/webp" />
        <source srcSet={pngPath2x} type="image/png" media="(min-resolution: 2dppx)" />
        <source srcSet={pngPath1x} type="image/png" />
        <source srcSet={jpgPath2x} type="image/jpg" media="(min-resolution: 2dppx)" />
        <img src={jpgPath1x} alt={altText} style={pictureContainer} className={styles.image} />
      </picture>
      {isHovered && tooltipImg && <Tooltip src={tooltipImg} alt={altText} />}
    </div>
  );
};

export default PictureComponent;
