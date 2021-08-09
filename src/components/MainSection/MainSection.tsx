import React, { useState } from 'react';
import fetchPhoto from '../../api/fetchPhoto';
import SelectMarsRover from './SelectMarsRover/SelectMarsRover';
import SelectCamera from './SelectCamera/SelectCamera';
import Pagination from './Pagination/Pagination';
import { PhotosArray } from '../../types';

const Preloader = require('../../images/preloader.gif');

const MainSection = () => {
  const [roverChosen, setRoverChosen] = useState<string>('curiosity');
  const [cameraChosen, setCameraChosen] = useState<string>('');
  const [photos, setPhotos] = useState<PhotosArray[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleSubmit = () => {
    setLoading(true);
    fetchPhoto(roverChosen, cameraChosen)
      .then((res: { error: React.SetStateAction<string>; photos: React.SetStateAction<PhotosArray[]>; }) => {
        if (res?.error) {
          setError(res.error);
          console.error(error);
          return;
        }
        setPhotos(res.photos);
        setLoading(false);
      });
  };

  const photosPerPage = 1;
  const currentPhoto = photos[currentPage - 1];

  return (
    <section className="section">
      <h3 data-testid="header__MainSection">Mars Rover Photos</h3>
      <div className="section__selects">
        <div>
          <SelectMarsRover value={roverChosen} onChangeSelect={(e) => setRoverChosen(e?.target?.value)} />
        </div>

        <div>
          <SelectCamera
            value={cameraChosen}
            onChangeSelect={(e) => setCameraChosen(e?.target?.value)}
            roverChosen={roverChosen}
          />
        </div>
      </div>
      <button type="button" className="btn__section" onClick={handleSubmit} data-testid="btn__MainSection">GO!</button>

      {loading ? <img className="preloader" src={Preloader} alt="preloader" /> : null}

      <div>
        {photos && currentPhoto ? <img className="photo__marsRover" key={currentPhoto?.id} src={currentPhoto?.img_src} alt="marsRover" /> : <img className="default__img" src="https://www.buro247.ru/local/share/images/73445.jpg" alt="default" />}
      </div>
      <Pagination photosPerPage={photosPerPage} totalPhotos={photos.length} paginate={(pageNumber: number) => setCurrentPage(pageNumber)} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </section>
  );
};

export default MainSection;
