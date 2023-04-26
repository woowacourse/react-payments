export interface CardNumberProps {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

export interface CardPasswordProps {
  first: string;
  second: string;
}

export interface CardNameProps {
  id: string;
  name: string;
}

export interface CardInfoProps {
  cardNumbers: CardNumberProps;
  expireDate: string;
  ownerName: string;
  securityCode: string;
  password: CardPasswordProps;
  cardName: CardNameProps;
}

export interface CardListProps extends CardInfoProps {
  nickName?: string;
}
