const IS_PRODUCTION = true;
const BASE_URL = IS_PRODUCTION ? '/dist/index.html' : '';

const ROUTE_PATH = {
  cardRegister: BASE_URL + '/',
  cardRegisterComplete: BASE_URL + '/card-register-complete',
};

export default ROUTE_PATH;
