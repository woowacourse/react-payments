import { CardCompany } from "../../../constants/card-app";
import { CardAddFormState } from "../../../types/card";

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
    value: "기본카드",
    errorState: false,
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
    value: "",
    errorState: false,
    displayed: false,
  },
  cardPassword: {
    value: "",
    errorState: false,
    displayed: false,
  },
};

export type FormAction =
  | { type: "SET_CARD_NUMBERS"; subfield: string; value: string }
  | { type: "SET_CARD_COMPANY"; value: CardCompany }
  | {
      type: "SET_EXPIRATION_DATE";
      subfield: string;
      value: string;
    }
  | { type: "SET_OWNER_NAME"; value: string }
  | { type: "SET_CVC_NUMBER"; value: string }
  | { type: "SET_PASSWORD"; value: string }
  | {
      type: "SET_ERROR_WITH_SUBFIELD";
      field: "cardNumbers" | "expirationDate" | "ownerName";
      subField: string;
      isValid: boolean;
    }
  | {
      type: "SET_ERROR_WITHOUT_SUBFIELD";
      field: keyof CardAddFormState;
      isValid: boolean;
    }
  | {
      type: "SET_DISPLAY";
      field: keyof CardAddFormState;
    }
  | {
      type: "RESET";
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
          value: action.value,
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
          value: action.value,
        },
      };
    case "SET_PASSWORD":
      return {
        ...state,
        cardPassword: {
          ...state.cardPassword,
          value: action.value,
        },
      };
    case "SET_ERROR_WITH_SUBFIELD":
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
    case "SET_ERROR_WITHOUT_SUBFIELD":
      return {
        ...state,
        [action.field]: {
          ...state[action.field],
          errorState: action.isValid,
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
