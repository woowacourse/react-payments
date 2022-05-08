const initialState = {
  cards: [],
  dimensions: { width: 0, height: 0 },
  cardOwnerName: 'NAME',
  cardNumber: '',
  dueDate: 'MM / YY',
  isAllCompleted: {
    isFinishTypingCardNumber: false,
    isCorrectPwd: false,
    isCorrectOwnerName: false,
    isCorrectCardDate: false,
    isCorrectSecurityCode: false,
  },
  cardCompany: {},
  cardCompanyList: [
    { id: 'company1', color: '#E24141', name: '포코 카드' },
    { id: 'company2', color: '#547CE4', name: '준 카드' },
    { id: 'company3', color: '#73BC6D', name: '공원 카드' },
    { id: 'company4', color: '#DE59B9', name: '브랜 카드' },
    { id: 'company5', color: '#04C09E4F', name: '로이드 카드' },
    { id: 'company6', color: '#45423b', name: '동키콩 카드' },
    { id: 'company7', color: '#b914ff', name: '소피아 카드' },
    { id: 'company8', color: '#968a68', name: '시지프 카드' },
    { id: 'company9', color: '#E76E9A', name: '도비 카드' },
    { id: 'company10', color: '#F37D3B', name: '콜린 카드' },
    { id: 'company11', color: '#FBCD58', name: '썬 카드' },
    { id: 'company12', color: '#66adff', name: '태태 카드' },
    { id: 'company13', color: '#cc1b32', name: '콜라 카드' },
    { id: 'company14', color: '#69ff66', name: '비녀 카드' },
    { id: 'company15', color: '#ff5100', name: '꼬재 카드' },
    { id: 'company16', color: '#192dff', name: '블링 카드' },
    { id: 'company17', color: '#f5d742', name: '샐리 카드' },
    { id: 'company18', color: '#1c24ff', name: '호프 카드' },
    { id: 'company19', color: '#1ca0ff', name: '하리 카드' },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, action.card],
      };
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
    case 'CARD_COMPANY':
      return {
        ...state,
        cardCompany: action.cardCompany,
      };
    case 'INITIALIZE':
      return {
        ...state,
        cardOwnerName: 'NAME',
        cardNumber: '',
        dueDate: 'MM / YY',
        isAllCompleted: {
          isFinishTypingCardNumber: false,
          isCorrectPwd: false,
          isCorrectOwnerName: false,
          isCorrectCardDate: false,
          isCorrectSecurityCode: false,
        },
        cardCompany: {},
      };
    default:
      throw new Error();
  }
}

export { initialState, reducer };
