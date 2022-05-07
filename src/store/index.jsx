const initialState = {
  dimensions: { width: 0, height: 0 },
  cardOwnerName: 'NAME',
  cardNumber: '',
  dueDate: 'MM / YY',
  isAllCompleted: {
    isFinishTypingCardNumber: false,
    isCorrectPwd: false,
    isCorrectOwnerName: false,
    isCorrectCardDate: true,
    isCorrectSecurityCode: false,
  },

  cardCompanyList: [
    { color: '#E24141', name: '포코 카드' },
    { color: '#547CE4', name: '준 카드' },
    { color: '#73BC6D', name: '공원 카드' },
    { color: '#DE59B9', name: '브랜 카드' },
    { color: '#04C09E4F', name: '로이드 카드' },
    { color: '#45423b', name: '동키콩 카드' },
    { color: '#b914ff', name: '소피아 카드' },
    { color: '#968a68', name: '시지프 카드' },
    { color: '#E76E9A', name: '도비 카드' },
    { color: '#F37D3B', name: '콜린 카드' },
    { color: '#FBCD58', name: '썬 카드' },
    { color: '#66adff', name: '태태 카드' },
    { color: '#cc1b32', name: '콜라 카드' },
    { color: '#69ff66', name: '비녀 카드' },
    { color: '#ff5100', name: '꼬재 카드' },
    { color: '#192dff', name: '블링 카드' },
    { color: '#f5d742', name: '샐리 카드' },
    { color: '#1c24ff', name: '호프 카드' },
    { color: '#1ca0ff', name: '하리 카드' },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'DIMENSIONS':
      return { ...state, dimensions: action.dimensions };
    case 'CARD_OWNER_NAME':
      return {
        ...state,
        cardOwnerName: action.cardOwnerName,
        isAllCompleted: {
          ...state.isAllCompleted,
          isCorrectOwnerName: action.isCorrectOwnerName,
        },
      };
    case 'CARD_NUMBER':
      return {
        ...state,
        cardNumber: action.cardNumber,
        isAllCompleted: {
          ...state.isAllCompleted,
          isFinishTypingCardNumber: action.isFinishTypingCardNumber,
        },
      };
    case 'DUE_DATE':
      return {
        ...state,
        dueDate: action.dueDate,
        isAllCompleted: {
          ...state.isAllCompleted,
          isCorrectCardDate: action.isCorrectCardDate,
        },
      };
    case 'CARD_SECURITY_CODE':
      return {
        ...state,
        cardSecurityCode: action.cardSecurityCode,
        isAllCompleted: {
          ...state.isAllCompleted,
          isCorrectSecurityCode: action.isCorrectSecurityCode,
        },
      };
    case 'CARD_PASSWORD':
      return {
        ...state,
        isAllCompleted: {
          ...state.isAllCompleted,
          isCorrectPwd: action.isCorrectPwd,
        },
      };

    default:
      throw new Error();
  }
}

export { initialState, reducer };
