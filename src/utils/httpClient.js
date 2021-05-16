import { HTTP_METHOD } from '../constants';

export const httpClient = async ({ url, method = HTTP_METHOD.GET, body }) => {
  const options = getOptions(method, body);

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error('HTTP 요청 실패');
    }
    const body = await response.json();

    return body;
  } catch (error) {
    console.error(error);
  }
};

function getOptions(method, body) {
  const defaultOptions = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  switch (method) {
    case HTTP_METHOD.GET:
      return defaultOptions;

    case HTTP_METHOD.DELETE:
      return defaultOptions;

    default:
      return {
        ...defaultOptions,
        body,
      };
  }
}
