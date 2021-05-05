import { BASE_URL, FETCH_METHOD } from '../constants/api';

const request = {
  get: (query, headers) => fetch(BASE_URL + query, { method: FETCH_METHOD.GET, headers }),
  patch: (query, headers, body) =>
    fetch(BASE_URL + query, {
      method: FETCH_METHOD.PATCH,
      headers,
      body: JSON.stringify(body),
    }),

  post: (query, headers, body) =>
    fetch(BASE_URL + query, {
      method: FETCH_METHOD.POST,
      headers,
      body: JSON.stringify(body),
    }),
  delete: (query, headers) => fetch(BASE_URL + query, { method: FETCH_METHOD.DELETE, headers }),
};

const requestRouter = {
  [FETCH_METHOD.GET]: async (query, header) => (await request.get(query, header)).json(),
  [FETCH_METHOD.PATCH]: async (query, header, body) =>
    (await request.patch(query, header, body)).json(),
  [FETCH_METHOD.POST]: async (query, header, body) =>
    (await request.post(query, header, body)).json(),
  [FETCH_METHOD.DELETE]: async (query, header) => (await request.delete(query, header)).json(),
};

const requestEntity = async (type, ...args) => {
  try {
    return await requestRouter[type](...args);
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

export default requestEntity;
