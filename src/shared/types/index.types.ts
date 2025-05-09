export type CardNumberPosition = "first" | "second" | "third" | "fourth";

export type ExpirationPeriod = "month" | "year";

export type CardTypeList = {
  BC카드: "BC카드";
  신한카드: "신한카드";
  카카오뱅크: "카카오뱅크";
  현대카드: "현대카드";
  우리카드: "우리카드";
  롯데카드: "롯데카드";
  하나카드: "하나카드";
  국민카드: "국민카드";
};

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
