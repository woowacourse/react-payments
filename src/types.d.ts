interface CardInfo {
  cardNumbers: {
    firstNumbers: number[];
    secondNumbers: number[];
    thirdNumbers: number[];
    fourthNumbers: number[];
  };
  cardValidityPeriod: {
    month?: number;
    year?: number;
  };
  ownerName?: string;
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
  onInputChange: (e: any, index: number) => void;
}

interface FormFieldInfo {
  key: keyof CardInfo;
  title: string;
  description?: string;
  label: string;
  sizePreset?: SizePresetType;
  inputInfoList: InputInfo[];
}
