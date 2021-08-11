import React, { FC } from 'react';

interface ToogleProps {
  setDarkMode:(b: boolean) => any;
  darkMode: boolean;
}

const Toogle: FC<ToogleProps> = ({ setDarkMode, darkMode }) => (
  <div className="theme">
    <div className="switch-checkbox">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="switch">
        <input
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

export default Toogle;
