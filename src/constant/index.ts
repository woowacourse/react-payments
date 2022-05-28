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
  CHARACTER_ONLY: /^[a-zA-Z]+$/,
};

export const CARD_TYPE = {
  롯데카드: { color: '#E24141' },
  삼성카드: { color: '#547CE4' },
  NH농협카드: { color: '#73BC6D' },
  신한카드: { color: '#DE59B9' },
  현대카드: { color: '#04C09E' },
  하나카드: { color: '#E76E9A' },
  BC카드: { color: '#F37D3B' },
  KB국민카드: { color: '#FBCD58' },
} as const;

export const INPUT_SCALE_TYPE = {
  large: '318',
  medium: '84',
  small: '43',
} as const;

export const INPUT_SCALE_NAMES = ['large', 'medium', 'small'];
