import { useEffect, useState } from 'react';
import { get } from 'services/transpot';

type FetchResponse<T> = {
  results: T;
} | null;

export const useFetch = <T>(url: string, params?: string): FetchResponse<T> => {
  const [state, setState] = useState<FetchResponse<T>>(null);

  useEffect(() => {
    const getUrl = url + (params || '');
    (async () => {
      try {
        const response = await get(getUrl);
        const timeoutId = setTimeout(() => {
          setState(response.data);
        }, 500);
      } catch (error) {
        console.error('GETPOST', error);
      }
    })();
  }, [url, params]);

  return state;
};
