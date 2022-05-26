import { useCallback, useState } from 'react';
import axios from 'axios';

export default function useFetch(method = 'get') {
  const [pending, setPending] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetch = useCallback(
    async ({ API_URL = '', body = null }) => {
      setPending(true);
      setData(null);
      setError(null);

      try {
        setPending(false);
        const response = await axios[method](API_URL, body);
        setData(response.data);
      } catch (err) {
        setPending(false);
        setError(err.message);
      }
    },
    [method]
  );

  return { pending, data, error, fetch };
}
