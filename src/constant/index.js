export const PATH = {
  HOME: '/',
  ADD_CARD: '/addCard',
  REGISTER_CARD: '/registerCard',
};

export const ENDPOINT =
  'https://moonheekim-payments-server.herokuapp.com/cards';

export const METHODS = {
  GET: 'GET',
  POST: 'POST',
};

export const REG_EXP = {
  NUMBER_ONLY: /^[0-9]+$/,
  CHARACTER_ONLY: /^[a-z,A-Z]+$/,
};

export const CARD_COLOR_BY_NAME = {
  롯데카드: 'red',
  삼성카드: 'blue',
  NH농협카드: 'green',
  신한카드: 'purple',
  현대카드: 'mint',
  하나카드: 'pink',
  BC카드: 'orange',
  KB국민카드: 'yellow',
};

export const COLOR_TYPE = {
  red: '#E24141',
  blue: '#547CE4',
  green: '#73BC6D',
  purple: '#DE59B9',
  mint: '#04C09E',
  pink: '#E76E9A',
  orange: ' #F37D3B',
  yellow: '#FBCD58',
};

export const COLOR_NAMES = [
  'red',
  'blue',
  'green',
  'purple',
  'pink',
  'orange',
  'yellow',
  'mint',
];

export const INPUT_SCALE_TYPE = {
  large: '318',
  medium: '84',
  small: '43',
};

export const INPUT_SCALE_NAMES = ['large', 'medium', 'small'];
