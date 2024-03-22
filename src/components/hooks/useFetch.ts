import { useEffect, useState } from 'react';
import { get } from 'services/transpot';

export const useFetch = (url: string, params?: string) => {
  const [state, setState] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await get(url);
        const timeoutId = setTimeout(() => {
          setState(response.data);
        }, 3000);
      } catch (error) {
        console.error('GETPOST', error);
      }
    })();
  }, [url]);

  return state;
};
