// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react';
// eslint-disable-next-line import/extensions,import/no-unresolved
import { ObjRoverCameras } from '../../../types';

interface PropsForSelectCamera {
  roverChosen: string;
  value: string;
    // eslint-disable-next-line no-unused-vars
  onChangeSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

// eslint-disable-next-line no-unused-vars
const SelectCamera: FC<PropsForSelectCamera> = (props) => {
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

  // roverChosen існує в roverCameras
  // console.log(roverCameras[roverChosen as keyof ObjRoverCameras], 'roverCameras[roverChosen]')
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <>
      <p>Choose a Camera:</p>
      <div className="select__wrapper">
        {/* eslint-disable-next-line react/destructuring-assignment,react/prop-types */}
        <select value={props.value} onChange={props.onChangeSelect} className="select">
          <option value="">Cameras</option>
          {/* eslint-disable-next-line max-len,react/prop-types,react/destructuring-assignment */}
          {roverCameras[props.roverChosen as keyof ObjRoverCameras].map((obj) => <option key={obj.abbrev} value={obj.abbrev}>{obj.name}</option>)}
        </select>
      </div>
    </>
  );
};

export default SelectCamera;
