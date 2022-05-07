export enum ActionType {
  FIRST_INPUT_CARD_NUMBER = 'FIRST_INPUT__CARD_NUMBER',
  SECOND_INPUT_CARD_NUMBER = 'SECOND_INPUT_CARD_NUMBER',
  THIRD_INPUT_CARD_NUMBER = 'THIRD_INPUT_CARD_NUMBER',
  FOURTH_INPUT_CARD_NUMBER = 'FOURTH_INPUT_CARD_NUMBER',
  INPUT_NAME = 'INPUT_NAME',
  INPUT_EXPIRED_PERIOD = 'INPUT_EXPIRED_PERIOD',
  INPUT_EXPIRED_PERIOD_MONTH = 'INPUT_EXPIRED_PERIOD_MONTH',
  INPUT_EXPIRED_PERIOD_YEAR = 'INPUT_EXPIRED_PERIOD_YEAR',
  INPUT_CVC = 'INPUT_CVC',
  FIRST_INPUT_PASSWORD = 'FIRST_INPUT_PASSWORD',
  SECOND_INPUT_PASSWORD = 'SECOND_INPUT_PASSWORD',
  CARD_TYPE = 'CARD_TYPE',
  CHANGE_CARD_TYPE = 'CHANGE_CARD_TYPE',
  COMPLETE_CARD = 'COMPLETE_CARD',
  INPUT_CARD_ALIAS = 'INPUT_CARD_ALIAS',
  SET_CARD_LIST = 'SET_CARD_LIST',
}

export type CardType = {
  id: string;
  firstCardNumber: string;
  secondCardNumber: string;
  thirdCardNumber: string;
  fourthCardNumber: string;
  ownerName: string;
  month: string;
  year: string;
  cvc: string;
  firstPassword: string;
  secondPassword: string;
  type: string;
  alias: string;
};
