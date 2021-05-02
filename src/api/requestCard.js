import { BASE_URL, FETCH_METHOD } from '../constants/api';

const initialReturnValues = {
  GET: [],
  PATCH: false,
  DELETE: false,
};

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

const requestCardByType = async (type, query, body) => {
  let res = null;
  let json = null;
  try {
    switch (type) {
      case FETCH_METHOD.GET:
        res = await request.get(query);
        json = await res.json();
        return json;
      case FETCH_METHOD.PATCH:
        res = await request.patch(query, body);

        return res.ok;
      case FETCH_METHOD.POST:
        res = await request.post(query, body);

        return res.ok;
      case FETCH_METHOD.DELETE:
        res = await request.delete(query);

        return res.ok;
      default:
        throw new Error('Unknown type');
    }
  } catch (error) {
    console.error(error.message);
    return initialReturnValues[type];
  }
};

export default requestCardByType;
