import {
  CardNumberPosition,
  CardTypeList,
  ExpirationPeriod,
  State,
} from "../../../shared/types/index.types";

export type CardInfoFormProps = {
  cardNumber: State<CardNumberPosition, string>;
  expirationPeriod: State<ExpirationPeriod, string>;
  CVCNumber: State<"CVCNumber", string>;
  password: State<"password", string>;
  cardType: {
    values: { cardType: keyof CardTypeList | "" };
    changeValues: (type: "cardType", cardType: string) => void;
    isFullFilled: () => boolean;
  };
};
