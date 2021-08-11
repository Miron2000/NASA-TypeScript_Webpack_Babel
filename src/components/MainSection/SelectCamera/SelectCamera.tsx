import React, { FC } from 'react';
import { ObjRoverCameras } from '../../../types';

interface PropsForSelectCamera {
  roverChosen: string;
  value?: string;
  onChangeSelect?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectCamera: FC<PropsForSelectCamera> = ({ value, onChangeSelect, roverChosen }) => {
  const roverCameras: ObjRoverCameras = {
    spirit: [
      {
        abbrev: 'FHAZ',
        name: 'Front Hazard Avoidance Camera',
      },
      {
        abbrev: 'RHAZ',
        name: 'Rear Hazard Avoidance Camera',
      },
      {
        abbrev: 'NAVCAM',
        name: 'Navigation Camera',
      },
      {
        abbrev: 'PANCAM',
        name: 'Panoramic Camera',
      },
    ],
    curiosity: [
      {
        abbrev: 'FHAZ',
        name: 'Front Hazard Avoidance Camera',
      },
      {
        abbrev: 'RHAZ',
        name: 'Rear Hazard Avoidance Camera',
      },
      {
        abbrev: 'MAST',
        name: 'Mast Camera',
      },
      {
        abbrev: 'CHEMCAM',
        name: 'Chemistry and Camera Complex',
      },
      {
        abbrev: 'MARDI',
        name: 'Mars Descent Imager',
      },
      {
        abbrev: 'NAVCAM',
        name: 'Navigation Camera',
      },
    ],
    opportunity: [
      {
        abbrev: 'FHAZ',
        name: 'Front Hazard Avoidance Camera',
      },
      {
        abbrev: 'RHAZ',
        name: 'Rear Hazard Avoidance Camera',
      },
      {
        abbrev: 'NAVCAM',
        name: 'Navigation Camera',
      },
      {
        abbrev: 'PANCAM',
        name: 'Panoramic Camera',
      },
    ],
  };

  return (
    <>
      <p className="title_mainSection">Choose a Camera:</p>
      <div className="select__wrapper">
        <select value={value} onChange={onChangeSelect} className="select" data-testid="selectCamera__MainSection">
          {roverCameras[roverChosen as keyof ObjRoverCameras].map((obj) => <option key={obj.abbrev} value={obj.abbrev}>{obj.name}</option>)}
        </select>
      </div>
    </>
  );
};

export default SelectCamera;
