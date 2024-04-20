interface CardNumbers {
  firstNumbers?: number;
  secondNumbers?: number;
  thirdNumbers?: number;
  fourthNumbers?: number;
}

interface CardValidityPeriod {
  month?: number;
  year?: number;
}

interface CardOwnerInfo {
  name?: string;
}

type CardInfoInputKey = keyof CardNumbers | keyof CardValidityPeriod | keyof CardOwnerInfo;

interface CardInfo {
  cardNumbers: CardNumbers;
  cardValidityPeriod: CardValidityPeriod;
  cardOwnerInfo: CardOwnerInfo;
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
  cardNumbers: {
    firstNumbers: ErrorType;
    secondNumbers: ErrorType;
    thirdNumbers: ErrorType;
    fourthNumbers: ErrorType;
  };
  cardValidityPeriod: {
    month: ErrorType;
    year: ErrorType;
  };
  cardOwnerInfo: {
    name: ErrorType;
  };
}

type SizePresetType = "small" | "medium" | "large";

interface InputInfo {
  name: string;
  placeholder: string;
  maxLength: number;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
}

interface FormFieldInfo {
  key: keyof CardInfo;
  title: string;
  description?: string;
  label: string;
}
