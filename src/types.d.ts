interface CardNumbers {
  firstNumbers?: string;
  secondNumbers?: string;
  thirdNumbers?: string;
  fourthNumbers?: string;
}

interface CardValidityPeriod {
  month?: number;
  year?: number;
}

interface CardOwnerInfo {
  name?: string;
}

type ErrorType = {
  errorMessage: string;
  isError: boolean;
};

interface CardNumbersError {
  firstNumbers?: ErrorType;
  secondNumbers?: ErrorType;
  thirdNumbers?: ErrorType;
  fourthNumbers?: ErrorType;
}

interface CardValidityPeriodError {
  month?: ErrorType;
  year?: ErrorType;
}

interface CardOwnerInfoError {
  name?: ErrorType;
}

type SizePresetType = "small" | "medium" | "large";
