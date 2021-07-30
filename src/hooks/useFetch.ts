import { useEffect, useState } from 'react';
import API_KEY from '../config';

interface ApiApods {
  'date': string;
  'explanation': string;
  'hdurl': string;
  'media_type': string;
  'service_version': string;
  'title': string;
  'url': string;
}

const useFetch = (defaultResponse: ApiApods | any) => {
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
  const [apod, setApod] = useState<ApiApods>(defaultResponse);
  const [loading, setLoading] = useState<boolean>(true);

  async function getApiUrlApod() {
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setTimeout(() => setApod(data), 2000);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getApiUrlApod();
  }, [apiUrl]);

  return { apod, loading };
};

export default useFetch;
