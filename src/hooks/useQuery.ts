import { useEffect, useState } from 'react';

export const useQuery = <T>(url: string, params?: RequestInit): [T, boolean, boolean] => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const [fetchingData, setFetchingData] = useState<T>();

  useEffect(() => {
    const getApiData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url, params);
        const data = await response.json();
        setFetchingData(data);
      } catch {
        setError(true);
      }

      setLoading(false);
    };

    getApiData();
  }, [url, params]);

  if (fetchingData === undefined) {
    return [[] as T, isLoading, isError];
  }

  return [fetchingData, isLoading, isError];
};
