import {
  CardNumberPosition,
  ExpirationPeriod,
  CardTypeList,
} from "../../../shared/types/index.types";

export type CardPreviewProps = {
  cardNumber: Record<CardNumberPosition, string>;
  expirationPeriod: Record<ExpirationPeriod, string>;
  cardType: keyof CardTypeList | "";
};
