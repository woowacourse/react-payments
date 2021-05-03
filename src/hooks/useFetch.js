import { useCallback, useState } from 'react';

export default (url, { method = 'get' } = {}) => {
  const [status, setStatus] = useState({
    data: null,
    isFetching: false,
    error: false,
  });

  const fetchData = useCallback(
    async (body) => {
      setStatus((state) => ({ ...state, isFetching: true }));

      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (body) options.body = body;

      try {
        const response = await fetch(url, options);
        const data = await response.json();

        setStatus({ data, error: false, isFetching: false });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        setStatus((state) => ({ ...state, error: true, isFetching: false }));
      }
    },
    [method, url]
  );

  return [status, fetchData];
};
