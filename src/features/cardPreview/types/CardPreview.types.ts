import {
  CardNumberPosition,
  ExpirationPeriod,
  CardTypes,
} from "../../../shared/types/index.types";

export type CardPreviewProps = {
  cardNumber: Record<CardNumberPosition, string>;
  expirationPeriod: Record<ExpirationPeriod, string>;
  cardType: CardTypes | "";
};
