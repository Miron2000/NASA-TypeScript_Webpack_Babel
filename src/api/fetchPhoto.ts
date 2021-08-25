import axios from 'axios';
import { API_KEY } from '../config';

const fetchPhoto = (roverChosen: string, cameraChosen: string) => {
  const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverChosen}/photos?sol=100&camera=${cameraChosen}&api_key=${API_KEY}`;

  return axios.get(apiUrl).then((response) => {
    if (response.data.error) {
      return response.data;
    }
    return response.data;
  });
};

export default fetchPhoto;
