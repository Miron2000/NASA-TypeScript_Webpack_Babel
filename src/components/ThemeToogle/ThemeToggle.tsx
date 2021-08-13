import React, { useContext, useEffect } from 'react';
import Switch from 'react-switch';
// eslint-disable-next-line import/no-cycle
import { ThemeContext } from '../../App';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(theme));
  }, [theme]);

  return (
    <div className="toggle__container">
      <Switch
        className="toggle__switch"
        onColor="#26458d"
        onChange={handleThemeToggle}
        checked={theme === 'light'}
        data-testid="toggle-theme"
      />
    </div>
  );
};
export default ThemeToggle;
