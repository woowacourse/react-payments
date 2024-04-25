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

interface FormFieldInfo {
  key: keyof CardInfo;
  title: string;
  description?: string;
  label: string;
  sizePreset?: SizePresetType;
  inputInfoList: InputInfo[];
}
