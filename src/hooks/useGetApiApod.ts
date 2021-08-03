import { useEffect, useState } from 'react';
import _ from 'lodash';
import API_KEY from '../config';
import { ApiApods } from '../types';

const useGetApiApod = () => {
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
  const [apod, setApod] = useState<ApiApods | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(apiUrl);
      const data = await res.json();
      if (_.isEmpty(!data)) {
        setApod(data);
      } else {
        throw new Error('Unexpected error: Error');
      }
    })();
  }, []);
  return apod;
};

export default useGetApiApod;
