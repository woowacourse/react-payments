import { CARD_TYPES } from "../../features/cardTypeSection/constants/CardType.constant";

export type CardNumberPosition = "first" | "second" | "third" | "fourth";

export type ExpirationPeriod = "month" | "year";

export type CardTypeList = typeof CARD_TYPES;

export type CardTypes = keyof CardTypeList;

export type State<KeyType extends string, ValueType> = {
  values: Record<KeyType, ValueType>;
  changeValues: (key: KeyType, value: ValueType) => void;
  isFullFilled: () => boolean;
};

export type Error<KeyType extends string> = {
  errorMessages: Record<KeyType, string>;
  checkValidation: (args: {
    length: number;
    value: string;
    type: KeyType;
  }) => void;
  firstErrorMessage: string | null;
  isError: () => boolean;
};
