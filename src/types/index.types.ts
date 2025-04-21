export type CardNumberPosition = "first" | "second" | "third" | "fourth";

export type ExpirationPeriod = "month" | "year";

export type CardCVCNumberSectionProps = {
  CVCNumber: string;
  changeCVCNumber: (CVCNumber: string) => void;
};
