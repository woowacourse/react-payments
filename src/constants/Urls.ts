const BASE_URL = '/react-payments/';

const URLS = {
  base: BASE_URL,
  register: BASE_URL,
  success: BASE_URL + 'success',
  error: BASE_URL + 'error',
} as const;

export default URLS;
