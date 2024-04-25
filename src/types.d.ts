interface CardNumbers {
  firstNumbers?: string;
  secondNumbers?: string;
  thirdNumbers?: string;
  fourthNumbers?: string;
}

interface CardValidityPeriod {
  month?: string;
  year?: string;
}

interface CardOwnerInfo {
  name?: string;
}

type CardIssuerCategory =
  | "BC카드"
  | "신한카드"
  | "카카오뱅크"
  | "현대카드"
  | "우리카드"
  | "롯데카드"
  | "하나카드"
  | "국민카드";

interface CardIssuer {
  name?: CardIssuerCategory;
}

interface CardCVC {
  value?: string;
}

interface CardPassword {
  value?: string;
}

interface CardUIHeadOrTail {
  value?: "head" | "tail";
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

interface CardIssuerError {
  name: ErrorType;
}

interface CardCVCError {
  value: ErrorType;
}

interface CardPasswordError {
  value: ErrorType;
}

type SizePresetType = "small" | "medium" | "large";

type FormRenderOrder = {
  index: number;
  step: "cardNumbers" | "cardIssuer" | "cardPeriod" | "cardOwner" | "cardCVC" | "cardPassword";
};
