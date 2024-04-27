const BASE_URL = process.env.NODE_ENV === 'production' ? '/dist/index.html' : '';

const ROUTE_PATH = {
  cardRegister: BASE_URL + '/',
  cardRegisterComplete: BASE_URL + '/card-register-complete',
};

export default ROUTE_PATH;
