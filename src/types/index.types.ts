export type CardNumberPosition = "first" | "second" | "third" | "fourth";

export type ExpirationPeriod = {
  month: string;
  year: string;
};

export type CardCVCNumberSectionProps = {
  CVCNumber: string;
  changeCVCNumber: (CVCNumber: string) => void;
};
