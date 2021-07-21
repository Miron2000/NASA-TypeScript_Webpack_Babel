// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import fetchFoto from '../../fetchFoto';
import SelectMarsRover from './SelectMarsRover/SelectMarsRover';
import SelectCamera from './SelectCamera/SelectCamera';

const MainSection: React.FunctionComponent = () => {
  const [roverChosen, setRoverChosen] = useState<string>('curiosity');
  const [cameraChosen, setCameraChosen] = useState<string>('');
  const [photos, setPhotos] = useState<any[]>([]);
  // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
  const [error, setError] = useState<string>('');
  const [showPhoto, setShowPhoto] = useState<boolean>(false);

  const handleRoverSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRoverChosen(event.target.value);
    // console.log(roverChosen, 'roverChosen')
    // setCameraChosen('');
  };

  const handleCameraSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCameraChosen(event.target.value);
  };
  const handleSubmit = () => {
    fetchFoto(roverChosen, cameraChosen, setError, error, setPhotos, setShowPhoto);
  };

  console.log(photos, 'photos');
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <section className="section">
      <div className="section__selects">
        <div>
          <SelectMarsRover value={roverChosen} onChangeSelect={handleRoverSelection} />
        </div>

        <div>
          <SelectCamera
            value={cameraChosen}
            onChangeSelect={handleCameraSelection}
            roverChosen={roverChosen}
          />
        </div>
      </div>
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line react/button-has-type,@typescript-eslint/no-unused-vars,no-shadow */}
      <button className="btn__section" onClick={handleSubmit}>GO!</button>

      <div>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        {photos && showPhoto ? photos.map((photo) => <img key={photo.id} src={photo?.img_src} />) : <img className="default__img" src="https://www.buro247.ru/local/share/images/73445.jpg" />}
      </div>
    </section>
  );
};

export default MainSection;
