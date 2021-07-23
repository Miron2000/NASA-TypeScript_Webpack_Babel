import React, { useState } from 'react';
import fetchPhoto from '../../fetchPhoto';
import SelectMarsRover from './SelectMarsRover/SelectMarsRover';
import SelectCamera from './SelectCamera/SelectCamera';
import Pagination from './Pagination/Pagination';
import { PhotosArray } from '../../types';

const Preloader = require('../../preloader/preloader.gif');

const MainSection: React.FunctionComponent = () => {
  const [roverChosen, setRoverChosen] = useState<string>('curiosity');
  const [cameraChosen, setCameraChosen] = useState<string>('');
  const [photos, setPhotos] = useState<PhotosArray[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);


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
    fetchPhoto(roverChosen, cameraChosen, setLoading, setError, error, setPhotos);
  };

  const photosPerPage = 1;
  const currentPhoto = photos[currentPage - 1];
  console.log(currentPhoto, 'currentPhoto');

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
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

      {loading ? <img className="preloader" src={Preloader} alt="preloader" /> : null}

      <div>
        {photos && currentPhoto ? <img className="photo__marsRover" key={currentPhoto?.id} src={currentPhoto?.img_src} alt="marsRover" /> : <img className="default__img" src="https://www.buro247.ru/local/share/images/73445.jpg" alt="default" />}
      </div>
      <Pagination photosPerPage={photosPerPage} totalPhotos={photos.length} paginate={paginate} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </section>
  );
};

export default MainSection;
