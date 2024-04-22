import { useReducer } from 'react';

import { CARD_COMPANY, CARD_COMPANY_NAMES, CARD_MARK } from '../constants';

const EDIT_CARD_NUMBERS = 'card/EDIT_CARD_NUMBERS' as const;
const EDIT_CARD_MARK = 'card/EDIT_CARD_MARK' as const;
const EDIT_CARD_PERIOD = 'card/EDIT_CARD_PERIOD' as const;
const EDIT_CARD_USER_NAME = 'card/EDIT_CARD_USER_NAME' as const;
const EDIT_CARD_COMPANY = 'card/EDIT_CARD_COMPANY' as const;
const RESET_CARD_INFO = 'card/RESET_CARD_INFO' as const;

export interface CardPeriod {
  month: string | null;
  year: string | null;
}

export type CardMark = keyof typeof CARD_MARK | null;
export type CardNumbers = (number | undefined)[];
export type CardCompanyName = (typeof CARD_COMPANY_NAMES)[number];

export type CardCompany = {
  name: CardCompanyName;
  color: string;
};

export interface CardInfo {
  numbers: CardNumbers | null;
  mark: CardMark;
  period: CardPeriod | null;
  userName: string | null;
  company: CardCompany | null;
}

const INITIAL_CARD_INFO: CardInfo = {
  numbers: null,
  mark: null,
  period: {
    month: null,
    year: null,
  },
  userName: null,
  company: CARD_COMPANY.get('etc') || null,
};

// action
const editCardNumbersAction = (numbers: CardNumbers) => ({
  type: EDIT_CARD_NUMBERS,
  numbers,
});

const editCardMarkAction = (mark: CardMark) => ({
  type: EDIT_CARD_MARK,
  mark,
});

const editCardPeriodAction = (period: CardPeriod) => ({
  type: EDIT_CARD_PERIOD,
  period,
});

const editCardUserNameAction = (userName: string) => ({
  type: EDIT_CARD_USER_NAME,
  userName,
});

const resetCardInfoAction = () => ({
  type: RESET_CARD_INFO,
});

const editCardCompanyAction = (companyName: CardCompanyName) => ({
  type: EDIT_CARD_COMPANY,
  company: CARD_COMPANY.get(companyName) || null,
});

type CardInfoAction =
  | ReturnType<typeof editCardNumbersAction>
  | ReturnType<typeof editCardMarkAction>
  | ReturnType<typeof editCardPeriodAction>
  | ReturnType<typeof editCardUserNameAction>
  | ReturnType<typeof editCardCompanyAction>
  | ReturnType<typeof resetCardInfoAction>;

const reducer = (state: CardInfo, action: CardInfoAction): CardInfo => {
  switch (action.type) {
    case EDIT_CARD_NUMBERS:
      return { ...state, numbers: action.numbers };

    case EDIT_CARD_MARK:
      return { ...state, mark: action.mark };

    case EDIT_CARD_PERIOD:
      return { ...state, period: action.period };

    case EDIT_CARD_USER_NAME:
      return { ...state, userName: action.userName };

    case EDIT_CARD_COMPANY:
      return { ...state, company: action.company };

    case RESET_CARD_INFO:
      return INITIAL_CARD_INFO;
    default:
      return state;
  }
};

export default function useCardInfoReducer() {
  const [state, dispatch] = useReducer(reducer, INITIAL_CARD_INFO);

  const editCardNumbers = (numbers: CardNumbers) => {
    dispatch(editCardNumbersAction(numbers));
  };

  const editCardMark = (mark: CardMark) => {
    dispatch(editCardMarkAction(mark));
  };

  const editCardPeriod = (period: CardPeriod) => {
    dispatch(editCardPeriodAction(period));
  };

  const editCardUserName = (name: string) => {
    dispatch(editCardUserNameAction(name));
  };

  const editCardCompany = (companyName: CardCompanyName) => {
    dispatch(editCardCompanyAction(companyName));
  };

  const resetCardInfo = () => {
    dispatch(resetCardInfoAction());
  };

  return {
    cardInfo: state,
    editCardNumbers,
    editCardMark,
    editCardPeriod,
    editCardUserName,
    editCardCompany,
    resetCardInfo,
  };
}
