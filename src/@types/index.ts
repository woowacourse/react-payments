import { CARD_COMPANY } from '../constants/cardCompany';

type Card = {
  id: string;
  cardName: string;
  cardCompany: string;
  cardNumbers: { first: string; second: string; third: string; fourth: string };
  cardExpirationDate: { month: string; year: string };
  cardOwner: string;
  cardCVC: string;
  cardPWD: { first: string; second: string };
};

type CardCompany = (typeof CARD_COMPANY)[number] | '';

type SetState = {
  <T extends string>(value: T): void;
  <T extends string>(value: T, key?: string): void;
};

type InputCardInfo = 'cardNumbers' | 'cardExpirationDate' | 'cardOwner' | 'cardCVC' | 'cardPWD';

export type { Card, CardCompany, SetState, InputCardInfo };
