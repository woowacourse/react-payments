import { useCallback, useState } from 'react';
import { API } from '../constants';

export default (url, { method = 'get' } = {}) => {
  const [state, setState] = useState({
    data: null,
    status: API.STATUS.INITIAL,
  });

  const fetchData = useCallback(
    async (body) => {
      setState((prevState) => ({ ...prevState, status: API.STATUS.PENDING }));

      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (body) {
        options.body = JSON.stringify(body);
      }

      try {
        const response = await fetch(url, options);
        const data = await response.json();

        setState({ data, status: API.STATUS.SUCCESS });
        return { data, status: API.STATUS.SUCCESS };
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        setState((prevState) => ({ ...prevState, status: API.STATUS.FAILURE }));
        return { status: API.STATUS.FAILURE };
      }
    },
    [method, url]
  );

  return [state, fetchData];
};
