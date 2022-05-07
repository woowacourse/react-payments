const CARD_LIST = [
  {
    cardNumber: ['1234', '5678', '9012', '3456'],
    expireDate: ['05', '07'],
    holderName: 'TESTER',
    nickName: '테스터1',
  },
  {
    cardNumber: ['0987', '6543', '2109', '8765'],
    expireDate: ['09', '24'],
    holderName: 'TEST',
    nickName: '테스터2',
  },
];

const ADD_NEW_CARD = () => {
  alert('Add New Card!');
};

const UPDATE_NICKNAME_BY_INDEX = () => {
  alert('Update NickName!');
};

export const MOCK_DATA = {
  CARD_LIST,
  ADD_NEW_CARD,
  UPDATE_NICKNAME_BY_INDEX,
};
