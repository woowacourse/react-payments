import { useReducer } from 'react';

import { CARD_COLOR, CARD_MARK } from '../constants';

const EDIT_CARD_NUMBERS = 'card/EDIT_CARD_NUMBERS' as const;
const EDIT_CARD_MARK = 'card/EDIT_CARD_MARK' as const;
const EDIT_CARD_PERIOD = 'card/EDIT_CARD_PERIOD' as const;
const EDIT_CARD_USER_NAME = 'card/EDIT_CARD_USER_NAME' as const;
const EDIT_CARD_COLOR = 'card/EDIT_CARD_COLOR' as const;
const RESET_CARD_INFO = 'card/RESET_CARD_INFO' as const;

export interface CardPeriod {
  month: string | undefined;
  year: string | undefined;
}

export type CardMark = keyof typeof CARD_MARK | undefined;
export type CardColor = keyof typeof CARD_COLOR;
export interface CardInfo {
  number: string | undefined;
  mark: CardMark;
  period: CardPeriod;
  userName: string | undefined;
  color: CardColor;
}

const INITIAL_CARD_INFO: CardInfo = {
  number: undefined,
  mark: undefined,
  period: {
    month: undefined,
    year: undefined,
  },
  userName: undefined,
  color: 'default',
};

// action
const editCardNumbersAction = (number: string) => ({
  type: EDIT_CARD_NUMBERS,
  number,
});

const editCardMarkAction = (mark: CardMark) => ({
  type: EDIT_CARD_MARK,
  mark,
});

const editCardPeriodAction = (period: CardPeriod) => ({
  type: EDIT_CARD_PERIOD,
  period,
});

const editCardUserNameAction = (userName: string | undefined) => ({
  type: EDIT_CARD_USER_NAME,
  userName,
});

const resetCardInfoAction = () => ({
  type: RESET_CARD_INFO,
});

const editCardColorAction = (color: CardColor) => ({
  type: EDIT_CARD_COLOR,
  color,
});

type CardInfoAction =
  | ReturnType<typeof editCardNumbersAction>
  | ReturnType<typeof editCardMarkAction>
  | ReturnType<typeof editCardPeriodAction>
  | ReturnType<typeof editCardUserNameAction>
  | ReturnType<typeof editCardColorAction>
  | ReturnType<typeof resetCardInfoAction>;

const reducer = (state: CardInfo, action: CardInfoAction): CardInfo => {
  switch (action.type) {
    case EDIT_CARD_NUMBERS:
      return { ...state, number: action.number };

    case EDIT_CARD_MARK:
      return { ...state, mark: action.mark };

    case EDIT_CARD_PERIOD:
      return { ...state, period: action.period };

    case EDIT_CARD_USER_NAME:
      return { ...state, userName: action.userName };

    case EDIT_CARD_COLOR:
      return { ...state, color: action.color };

    case RESET_CARD_INFO:
      return INITIAL_CARD_INFO;
    default:
      return state;
  }
};

export default function useCardInfoReducer() {
  const [state, dispatch] = useReducer(reducer, INITIAL_CARD_INFO);

  const editCardNumbers = (number: string) => {
    dispatch(editCardNumbersAction(number));
  };

  const editCardMark = (mark: CardMark) => {
    dispatch(editCardMarkAction(mark));
  };

  const editCardPeriod = (period: CardPeriod) => {
    dispatch(editCardPeriodAction(period));
  };

  const editCardUserName = (name: string | undefined) => {
    dispatch(editCardUserNameAction(name));
  };

  const editCardColor = (color: CardColor) => {
    dispatch(editCardColorAction(color));
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
    editCardColor,
    resetCardInfo,
  };
}
