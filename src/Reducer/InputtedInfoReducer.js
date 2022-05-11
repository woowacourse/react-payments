const INPUT_ACTION = {
  CARD_NUMBER: 'CARD_NUMBER',
  EXPIRED_DATE: 'EXPIRED_DATE',
  OWNER_NAME: 'OWNER_NAME',
  SECURITY_NUMBER: 'SECURITY_NUMBER',
  PASSWORD: 'PASSWORD',
  CARD_NAME: 'CARD_NAME',
  EQUALIZE: 'EQUALIZE',
  CLEAR: 'CLEAR',
};

const initialInputtedInfo = {};

function inputtedInfoReducer(state, action) {
  switch (action.type) {
    case INPUT_ACTION.CARD_NUMBER:
      return {
        ...state,
        cardNumber: {
          value: action.value,
          isValid: action.valid,
        },
      };
    case INPUT_ACTION.EXPIRED_DATE:
      return {
        ...state,
        expiredDate: {
          value: action.value,
          isValid: action.valid,
        },
      };
    case INPUT_ACTION.OWNER_NAME:
      return {
        ...state,
        ownerName: {
          value: action.value,
          isValid: action.valid,
        },
      };
    case INPUT_ACTION.SECURITY_NUMBER:
      return {
        ...state,
        securityNumber: {
          value: action.value,
          isValid: action.valid,
        },
      };
    case INPUT_ACTION.PASSWORD:
      return {
        ...state,
        password: {
          value: action.value,
          isValid: action.valid,
        },
      };
    case INPUT_ACTION.CARD_NAME:
      return {
        ...state,
        cardName: {
          value: action.value,
          isValid: action.valid,
        },
      };
    case INPUT_ACTION.EQUALIZE:
      return action.value;
    case INPUT_ACTION.CLEAR:
      return {};
  }
}

export { inputtedInfoReducer, initialInputtedInfo, INPUT_ACTION };
