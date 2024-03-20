import React, { useState } from 'react';
import styles from './BurgerMenu.modules.css'; // Подключаем модульные стили
import { NavBar } from '../NavBar';
import Bot from 'components/Footer/Bot/Bot';
import { Logo } from '..';
import Text from '../../common/Text/Text';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.burgerMenu}>
      <button className={styles.burgerButton} onClick={handleToggle}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </button>
      {isOpen && (
        <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
          <button className={styles.closeButton} onClick={handleClose}>
            X
          </button>
          <NavBar />
          <div className={styles.burgerBot}>
            <Logo />
            <div className={styles.policyBlock}>
              <a href="link/to/your/download/file" download>
                <Text variant="paragraph" element="span" link={true}>
                  Terms of Use
                </Text>
              </a>
              <a href="link/to/your/download/file" download>
                <Text variant="paragraph" element="span" link={true}>
                  Privacy Policy
                </Text>
              </a>
              <a href="link/to/your/download/file" download>
                <Text variant="paragraph" element="span" link={true}>
                  Cookie Policy
                </Text>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
