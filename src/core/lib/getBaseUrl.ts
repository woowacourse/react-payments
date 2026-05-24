const getBaseUrl = () => {
  return import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
};

export const getApiUrl = (path: string): string => {
  const baseUrl = getBaseUrl();
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;

  if (typeof window === 'undefined') {
    return `http://localhost${baseUrl}${normalizedPath}`;
  }

  return new URL(`${baseUrl}${normalizedPath}`, window.location.origin).toString();
};
