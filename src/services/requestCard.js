const BASE_URL = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}`;

const initialReturnValues = {
  GET: [],
  PATCH: false,
  DELETE: false,
};

const headers = {
  'Content-Type': 'application/json; charset=UTF-8',
};

const request = {
  get: (query) => fetch(BASE_URL + query, { method: 'GET', headers }),
  patch: (query, body) =>
    fetch(BASE_URL + query, { method: 'PATCH', headers, body: JSON.stringify(body) }),
  post: (query, body) =>
    fetch(BASE_URL + query, { method: 'POST', headers, body: JSON.stringify(body) }),
  delete: (query) => fetch(BASE_URL + query, { method: 'DELETE', headers }),
};

const requestCardByType = async (type, query, body) => {
  let res = null;
  let json = null;
  try {
    switch (type) {
      case 'GET':
        res = await request.get(query);
        json = await res.json();
        return json;
      case 'PATCH':
        res = await request.patch(query, body);

        return res.ok;
      case 'POST':
        res = await request.post(query, body);

        return res.ok;
      case 'DELETE':
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
