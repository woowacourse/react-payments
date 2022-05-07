import { useState } from 'react';

const useAPI = ({ uri, method }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [response, setResponse] = useState();

  const apiRequest = async (options = {}) => {
    try {
      setIsLoading(true);
      const initialResponse = await fetch(uri, { method, ...options });
      const data = await initialResponse.json();

      setResponse(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  };
  return { apiRequest, response, isLoading, isError };
};

export default useAPI;
