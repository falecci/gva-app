import { useState, useCallback } from 'react';
import type { Nullable, ValidAny } from '../../types';

type FetchProps = {
  method?: 'POST' | 'GET';
  body?: ValidAny;
  retries?: number;
  retryDelay?: number;
};

type UseFetchReturnType<T> = {
  loading: boolean;
  error: boolean;
  retrying: boolean;
  data: Nullable<T>;
  doFetch: (options: FetchProps) => Promise<void>;
};

const API_ENDPOINT = import.meta.env.SNOWPACK_PUBLIC_API_ENDPOINT;

const useFetch = <T>(endpoint: string): UseFetchReturnType<T> => {
  const [loading, setLoading] = useState(false);
  const [retrying, setRetrying] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<Nullable<T>>(null);

  const setResponse = useCallback(resp => {
    setRetrying(false);
    setLoading(false);
    setData(resp);
  }, []);

  const doFetch = useCallback(({ method, body, retries = 2, retryDelay = 1500 }: FetchProps) => {
    setLoading(true);
    setError(false);

    return fetch(`${API_ENDPOINT}/${endpoint}`, {
      method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(resp => {
        if (resp.ok) {
          resp.json().then(setResponse);
        }

        if (retries > 0) {
          setRetrying(true);
          setTimeout(() => doFetch({ method, body, retries: retries - 1 }), retryDelay);
        } else {
          throw new Error(resp.statusText);
        }
      })
      .catch(() => {
        setRetrying(false);
        setLoading(false);
        setError(true);
      });
  }, []);

  return { loading, error, data, retrying, doFetch };
};

export default useFetch;
