import styles from './ThemeChanger.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { set } from './slice';
import React, { useState } from 'react';
import LightSwitcherIcon from '../../../../public/img/SVG/LightSwitcher.svg';
import DarkSwitcherIcon from '../../../../public/img/SVG/DarkSwitcher.svg';

export const ThemeChanger = () => {
  const theme = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const [isToggled, setIsToggled] = useState(false);

  const handleChange = () => {
    setIsToggled(!isToggled);
    const next = theme === 'dark' ? 'light' : 'dark';
    dispatch(set(next));
  };

  return (
    <div className={styles.switcher} onClick={handleChange}>
      <div className={styles.circle}>
        {isToggled ? <DarkSwitcherIcon color="#4B6BFB" /> : <LightSwitcherIcon color="#52535F" />}
      </div>
    </div>
  );
};
