import { setCardInformationType } from "./CardInformationType";

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
  };
  setCardInformation: setCardInformationType;
  informationType: "uniqueNumber" | "expirationDate" | "cvcNumber";
};
