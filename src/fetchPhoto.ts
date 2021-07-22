import axios from 'axios';
import API_KEY from './config';

const fetchPhoto = (roverChosen: string, cameraChosen: string, setLoading: (arg0: boolean) => void, setError: (arg0: string) => void, error: string, setPhotos: (arg0: []) => void, setShowPhoto: (arg0: boolean) => void) => {
  const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverChosen}/photos?sol=100&camera=${cameraChosen}&api_key=${API_KEY}`;

  axios.get(apiUrl).then((response) => {
    console.log(response.data, 'response.data');
    if (response.data.error) {
      setError(response.data.errors);
      console.log(error);
    } else {
      // проверка, возвращаются ли какие-нибудь фотографии
      if (response.data.photos) {
        setPhotos(response.data.photos);
      }

      setShowPhoto(true);
      setLoading(false);
    }
  });
};

export default fetchPhoto;
