const FETCH_METHOD = {
  GET: 'GET',
  PATCH: 'PATCH',
  POST: 'POST',
  DELETE: 'DELETE',
};

const BASE_URL = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}`;

export { FETCH_METHOD, BASE_URL };
