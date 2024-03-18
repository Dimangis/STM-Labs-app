import styles from './ThemeChanger.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { set } from './slice';
import React, { useState } from 'react';
import LightSwitcherIcon from '../../../../public/img/SVG/LightSwitcher.svg';
import DarkSwitcherIcon from '../../../../public/img/SVG/DarkSwitcher.svg';
import { get } from 'services/transpot';

export const ThemeChanger = () => {
  const theme = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const [isToggled, setIsToggled] = useState(false);
  const [testData, setTestData] = useState();

  const handleChange = () => {
    setIsToggled(!isToggled);
    const next = theme === 'dark' ? 'light' : 'dark';
    dispatch(set(next));
    let testData: any;
    get('/PostPreview', testData).then(({ data }) => {
      console.log(data);
      testData = data;
      setTestData(testData);
    });
    // const JSONtest = fetchTasks();
    // console.log(JSONtest);
  };

  return (
    <div className={styles.switcher} onClick={handleChange}>
      <div className={styles.circle}>
        {isToggled ? <DarkSwitcherIcon color="#4B6BFB" /> : <LightSwitcherIcon color="#52535F" />}
      </div>
    </div>
  );
};
