import { BASE_URL, FETCH_METHOD } from '../constants/api';

const headers = {
  'Content-Type': 'application/json; charset=UTF-8',
};

const request = {
  get: (query) => fetch(BASE_URL + query, { method: FETCH_METHOD.GET, headers }),
  patch: (query, body) =>
    fetch(BASE_URL + query, { method: FETCH_METHOD.PATCH, headers, body: JSON.stringify(body) }),
  post: (query, body) =>
    fetch(BASE_URL + query, { method: FETCH_METHOD.POST, headers, body: JSON.stringify(body) }),
  delete: (query) => fetch(BASE_URL + query, { method: FETCH_METHOD.DELETE, headers }),
};

const initialReturnValues = {
  GET: [],
  PATCH: false,
  DELETE: false,
};

const requestRouter = {
  [FETCH_METHOD.GET]: async (query) => {
    const res = await request.get(query);
    const json = await res.json();

    return json;
  },
  [FETCH_METHOD.PATCH]: async (query, body) => {
    const res = await request.patch(query, body);
    const json = await res.json();

    return json;
  },
  [FETCH_METHOD.POST]: async (query, body) => {
    const res = await request.post(query, body);
    const json = await res.json();

    return json;
  },
  [FETCH_METHOD.DELETE]: async (query) => {
    const res = await request.delete(query);
    const json = await res.json();

    return json;
  },
};

const requestCardByType = async (type, ...args) => {
  try {
    return await requestRouter[type](...args);
  } catch (error) {
    console.error(error.message);
    return initialReturnValues[type];
  }
};

export default requestCardByType;
