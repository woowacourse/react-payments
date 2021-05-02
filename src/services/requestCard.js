const BASE_URL = `http://localhost:${process.env.REACT_APP_PORT}/cards`;

const initialReturnValues = {
  GET: [],
  PATCH: false,
  DELETE: false,
};

const request = {
  get: (query) => fetch(BASE_URL + query),
  patch: (query, body) => fetch(BASE_URL + query, { method: 'PATCH', body }),
  delete: (query) => fetch(BASE_URL + query, { method: 'DELETE' }),
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
