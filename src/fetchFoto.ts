// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from 'axios';
import API_KEY from './config';

// eslint-disable-next-line @typescript-eslint/no-unused-vars,max-len
const fetchFoto = (roverChosen: any, cameraChosen: any, setError: (arg0: any) => void, error: string, setPhotos: (arg0: any) => void, setShowPhoto: (arg0: boolean) => void) => {
  const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverChosen}/photos?sol=100&camera=${cameraChosen}&api_key=${API_KEY}`;

  axios.get(apiUrl).then((response) => {
    console.log(response.data);
    if (response.data.error) {
      setError(response.data.errors);
      console.log(error);
    } else {
      // проверка, возвращаются ли какие-нибудь фотографии
      if (response.data.photos) {
        setPhotos(response.data.photos);
      }
      // Array.isArray(photos) && photos.length
      setShowPhoto(true);
    }
  });
};

export default fetchFoto;
