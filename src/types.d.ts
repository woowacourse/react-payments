interface CardInfo {
  cardNumbers: number[];
  cardExpire: {
    month: number;
    year: number;
  };
  cardOwnerName?: string;
}

type InitCardInfoType = {
  key: keyof CardInfo;
  initValue: ValueOf<CardInfo>;
};

type ErrorType = {
  errorMessage: string;
  isError: boolean;
};

interface ErrorState {
  cardNumbers: ErrorType;
  cardValidityPeriod: ErrorType;
  ownerName: ErrorType;
}

type SizePresetType = "small" | "medium" | "large";

interface InputInfo {
  name: string;
  placeholder: string;
  maxLength: number;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
}

type CardCompany =
  | "BC카드"
  | "신한카드"
  | "카카오뱅크"
  | "현대카드"
  | "우리카드"
  | "롯데카드"
  | "하나카드"
  | "국민카드"
  | "default";

interface FormFieldInfo {
  key: keyof CardInfo;
  title: string;
  description?: string;
  label: string;
  sizePreset?: SizePresetType;
  inputInfoList: InputInfo[];
}
