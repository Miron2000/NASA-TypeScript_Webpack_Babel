import React, { useState } from 'react';
import fetchPhoto from '../../fetchPhoto';
import SelectMarsRover from './SelectMarsRover/SelectMarsRover';
import SelectCamera from './SelectCamera/SelectCamera';

const Preloader = require('../../preloader/preloader.gif');

const MainSection: React.FunctionComponent = () => {
  const [roverChosen, setRoverChosen] = useState<string>('curiosity');
  const [cameraChosen, setCameraChosen] = useState<string>('');
  const [photos, setPhotos] = useState<any[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
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
    setLoading(true);
    fetchPhoto(roverChosen, cameraChosen, setLoading, setError, error, setPhotos, setShowPhoto);
  };

  console.log(photos, 'photos');
  return (
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
      <button type="button" className="btn__section" onClick={handleSubmit}>GO!</button>

      {loading ? <img className="preloader" src={Preloader} /> : null}

      <div>
        {photos && showPhoto ? photos.map((photo) => <img className="photo__marsRover" key={photo.id} src={photo?.img_src} />) : <img className="default__img" src="https://www.buro247.ru/local/share/images/73445.jpg" />}
      </div>
    </section>
  );
};

export default MainSection;
