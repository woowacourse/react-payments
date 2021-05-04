const API = {
  BASE_URL: 'http://192.168.0.3:3001/cardList',
  STATUS: {
    INITIAL: 'initial',
    PENDING: 'pending',
    SUCCESS: 'success',
    FAILURE: 'failure',
    CANCELED: 'canceled',
  },
  METHOD: {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
  },
};

export default API;
