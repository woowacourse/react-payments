type CardColor =
  | '#E24141'
  | '#547CE4'
  | '#73BC6D'
  | '#DE59B9'
  | '#04C09E'
  | '#E76E9A'
  | '#F37D3B'
  | '#FBCD58';

type CARD_COMPANIES = [
  { NAME: '포코 카드'; COLOR: '#E24141' },
  { NAME: '준 카드'; COLOR: '#547CE4' },
  { NAME: '공원 카드'; COLOR: '#73BC6D' },
  { NAME: '브랜 카드'; COLOR: '#DE59B9' },
  { NAME: '로이드카드'; COLOR: '#04C09E' },
  { NAME: '도비 카드'; COLOR: '#E76E9A' },
  { NAME: '콜린 카드'; COLOR: '#F37D3B' },
  { NAME: '썬 카드'; COLOR: '#FBCD58' },
];

type TYPES = {
  SET_NUMBER: 'SET_NUMBER';
  SET_NUMBER_ERROR_MESSAGE: 'SET_NUMBER_ERROR_MESSAGE';
  SET_EXPIRATION: 'SET_EXPIRATION';
  SET_EXPIRATION_ERROR_MESSAGE: 'SET_EXPIRATION_ERROR_MESSAGE';
  SET_OWNER: 'SET_OWNER';
  SET_OWNER_ERROR_MESSAGE: 'SET_OWNER_ERROR_MESSAGE';
  SET_CVC: 'SET_CVC';
  SET_CVC_ERROR_MESSAGE: 'SET_CVC_ERROR_MESSAGE';
  SET_PASSWORD: 'SET_PASSWORD';
  SET_PASSWORD_ERROR_MESSAGE: 'SET_PASSWORD_ERROR_MESSAGE';
  SET_COMPANY_ERROR_MESSAGE: 'SET_COMPANY_ERROR_MESSAGE';
  SET_COMPANY_INDEX: 'SET_COMPANY_INDEX';
  ADD_CARD: 'ADD_CARD';
  SET_CARD_ORDER: 'SET_CARD_ORDER';
  UPDATE_NICKNAME: 'UPDATE_NICKNAME';
  DELETE_CARD: 'DELETE_CARD';
};

type CardAction = { type: TYPES; cards: CARD_COMPANIES };

export type { CardColor, CardAction, TYPES };
