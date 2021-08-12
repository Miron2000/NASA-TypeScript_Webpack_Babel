import React, { FC, useEffect } from 'react';

interface ToogleProps {
  setDarkMode:(b: boolean) => any;
  darkMode: boolean;
}

const Toogle: FC<ToogleProps> = ({ setDarkMode, darkMode }) => {
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className="theme">
      <div className="switch-checkbox">
        <label className="switch" htmlFor="input-toogle">
          <input
            id="input-toogle"
            type="checkbox"
            onChange={() => {
              setDarkMode(!darkMode);
            }}
            data-testid="toggle-theme-input"
          />
          {darkMode ? <span className="checked round"> </span> : <span className="notChecked round"> </span>}
        </label>
      </div>
    </div>
  );
};

export default Toogle;
