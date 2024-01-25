import React from 'react';
import styles from './Hero.modules.css';
import PictureComponent from 'components/common/PictureComponent/PictureComponent';
import png1x from '../../../public/img/Heroimg/Hero@1x.png';
import png2x from '../../../public/img/Heroimg/Hero@2x.png';
import webp1x from '../../../public/img/Heroimg/Hero@1x.webp';
import webp2x from '../../../public/img/Heroimg/Hero@2x.webp';
import TitleBlock from './TitleBlock/TitleBlock';
import avif1x from '../../../public/img/Heroimg/Hero@1x.avif';
import avif2x from '../../../public/img/Heroimg/Hero@2x.avif';
import jpg1x from '../../../public/img/Heroimg/Hero@1x.jpg';
import jpg2x from '../../../public/img/Heroimg/Hero@2x.jpg';

export default function Hero() {
  return (
    <section className={styles.heroContainer}>
      <PictureComponent
        pngPath1x={png1x}
        pngPath2x={png2x}
        webpPath1x={webp1x}
        webpPath2x={webp2x}
        avifPath1x={avif1x}
        avifPath2x={avif2x}
        jpgPath1x={jpg1x}
        jpgPath2x={jpg2x}
        borderRadius="12px"
        altText="HeroImg"
      />
      <TitleBlock />
    </section>
  );
}
