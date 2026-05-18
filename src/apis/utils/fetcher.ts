export const fetcher = async <T, U>(endpoint: string, options: RequestInit = {}) => {
  const defaultOptions = {
    method: 'GET',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  const response = await fetch(endpoint, defaultOptions);
  if (response.ok) {
    const data: T = response.status === 204 ? response : await response.json();
    return data;
  }
  const error: U = await response.json();
  throw error;
};
