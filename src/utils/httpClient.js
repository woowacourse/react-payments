import { HTTP_METHOD } from '../constants';

export const httpClient = async (url, method = HTTP_METHOD.GET) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error('요청 실패');
    }

    const body = await response.json();

    return body;
  } catch (error) {
    console.error(error);
  }
};
