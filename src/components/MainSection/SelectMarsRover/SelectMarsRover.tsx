import React, { FC } from 'react';

interface PropsForSelectMarsRover {
  value: string;
  onChangeSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectMarsRover: FC<PropsForSelectMarsRover> = ({ value, onChangeSelect }) => (
  <>
    <p>Choose a Mars rover:</p>
    <div className="select__wrapper">
      <select value={value} onChange={onChangeSelect} className="select">
        <option value="curiosity">Curiosity</option>
        <option value="opportunity">Opportunity</option>
        <option value="spirit">Spirit</option>
      </select>
    </div>
  </>
);

export default SelectMarsRover;
