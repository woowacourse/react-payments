import { useCallback, useState } from 'react';
import { API } from '../constants';

export default (url, { method = API.METHOD.GET } = {}) => {
  const [state, setState] = useState({
    data: null,
    status: API.STATUS.INITIAL,
  });
  const [abortController] = useState(new AbortController());
  const { signal } = abortController;

  const cancel = useCallback(() => {
    abortController.abort();
  }, [abortController]);

  const fetchData = useCallback(
    async (body) => {
      setState((prevState) => ({ ...prevState, status: API.STATUS.PENDING }));

      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        signal,
      };

      if (body) {
        options.body = JSON.stringify(body);
      }

      try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (signal.aborted) {
          setState({ data: null, status: API.STATUS.FAILURE });
          return { data, status: API.STATUS.FAILURE };
        }

        setState({ data, status: API.STATUS.SUCCESS });
        return { data, status: API.STATUS.SUCCESS };
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        setState((prevState) => ({ ...prevState, status: API.STATUS.FAILURE }));
        return { status: API.STATUS.FAILURE };
      }
    },
    [method, url, signal]
  );

  return [state, fetchData, cancel];
};
