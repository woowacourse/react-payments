import { CardAddFormState, FormAction } from "../../types/card";

export const initialCardFormState: CardAddFormState = {
  cardNumbers: {
    value: {
      first: "",
      second: "",
      third: "",
      fourth: "",
    },
    errorState: {
      first: false,
      second: false,
      third: false,
      fourth: false,
    },
    displayed: false,
  },
  cardCompany: {
    value: {
      cardCompany: "기본카드",
    },
    errorState: {
      cardCompany: false,
    },
    displayed: false,
  },
  expirationDate: {
    value: {
      mm: "",
      yy: "",
    },
    errorState: {
      mm: false,
      yy: false,
    },
    displayed: false,
  },
  ownerName: {
    value: {
      ownerName: "",
    },
    errorState: {
      ownerName: false,
    },
    displayed: false,
  },
  cvcNumber: {
    value: {
      cvcNumber: "",
    },
    errorState: {
      cvcNumber: false,
    },
    displayed: false,
  },
  cardPassword: {
    value: {
      cardPassword: "",
    },
    errorState: {
      cardPassword: false,
    },
    displayed: false,
  },
};

export const cardAddFormReducer = (
  state: CardAddFormState,
  action: FormAction
): CardAddFormState => {
  switch (action.type) {
    case "SET_CARD_NUMBERS":
      return {
        ...state,
        cardNumbers: {
          ...state.cardNumbers,
          value: {
            ...state.cardNumbers.value,
            [action.subfield]: action.value,
          },
        },
      };
    case "SET_CARD_COMPANY":
      return {
        ...state,
        cardCompany: {
          ...state.cardCompany,
          value: {
            cardCompany: action.value,
          },
        },
      };
    case "SET_EXPIRATION_DATE":
      return {
        ...state,
        expirationDate: {
          ...state.expirationDate,
          value: {
            ...state.expirationDate.value,
            [action.subfield]: action.value,
          },
        },
      };
    case "SET_OWNER_NAME":
      return {
        ...state,
        ownerName: {
          ...state.ownerName,
          value: {
            ownerName: action.value,
          },
        },
      };
    case "SET_CVC_NUMBER":
      return {
        ...state,
        cvcNumber: {
          ...state.cvcNumber,
          value: {
            cvcNumber: action.value,
          },
        },
      };
    case "SET_PASSWORD":
      return {
        ...state,
        cardPassword: {
          ...state.cardPassword,
          value: {
            cardPassword: action.value,
          },
        },
      };
    case "SET_ERROR":
      return {
        ...state,
        [action.field]: {
          ...state[action.field],
          errorState: {
            ...state[action.field].errorState,
            [action.subField]: action.isValid,
          },
        },
      };
    case "SET_DISPLAY":
      return {
        ...state,
        [action.field]: {
          ...state[action.field],
          displayed: true,
        },
      };
    case "RESET":
      return {
        ...initialCardFormState,
      };
    default:
      return { ...state };
  }
};
