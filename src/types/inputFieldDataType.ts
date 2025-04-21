export type InputFieldProps = {
  label: string;
  inputNumber: number;
  inputProps: {
    placeholder: string[];
    maxLength: number;
  };
  cardInformation: {
    uniqueNumber: string[];
    expirationDate: string[];
    cvcNumber: string[];
    type?: string;
  };
  setCardInformation: (newValue: InputFieldProps["cardInformation"]) => void;
  informationType: "uniqueNumber" | "expirationDate" | "cvcNumber";
};
