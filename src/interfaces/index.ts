import { CARD_ID } from "src/utils/constant";

export type CardNumberProps = [string, string, string, string];
export type ExpireDateProps = [string, string];
export type CardPasswordProps = [string, string];
export type CardIDProps = (typeof CARD_ID)[number] | null;

export interface CardInfoProps {
  cardNumbers: CardNumberProps;
  expireDate: ExpireDateProps;
  ownerName: string;
  securityCode: string;
  password: CardPasswordProps;
  cardName: CardIDProps;
}

export interface CardListProps extends CardInfoProps {
  nickName?: string;
}
