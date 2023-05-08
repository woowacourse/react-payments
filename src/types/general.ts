export interface CardType {
  id: string;
  cardNumbers: CardNumbersType;
  expiredDates: ExpiredDatesType;
  cardOwnerName: string;
  cardCompany: string;
  cardAlias?: string;
}

export interface CardList {
  cards: CardType[] | [];
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
}

export interface CardNumbersType {
  0: string;
  1: string;
  2: string;
  3: string;
}

export interface ExpiredDatesType {
  0: string;
  1: string;
}

export interface CardPasswordType {
  0: string;
  1: string;
}
