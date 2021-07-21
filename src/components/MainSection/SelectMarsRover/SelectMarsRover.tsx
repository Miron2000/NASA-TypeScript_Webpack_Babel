// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';

interface PropsForSelectMarsRover {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChangeSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectMarsRover: FC<PropsForSelectMarsRover> = (props) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <>
    <p>Choose a Mars rover:</p>
    <div className="select__wrapper">
      {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types */}
      <select value={props.value} onChange={props.onChangeSelect} className="select">
        <option value="curiosity">Curiosity</option>
        <option value="opportunity">Opportunity</option>
        <option value="spirit">Spirit</option>
      </select>
    </div>
  </>
);

export default SelectMarsRover;
