export type errorStateType = boolean[];

export type ExpirationValidationType = "MM" | "YY";

export type cardInformationKey = "uniqueNumber" | "expirationDate" | "cvcNumber" | "password";

export type formSectionData = {
  key: cardInformationKey;
  title: string;
  description: string;
  inputFieldData: {
    label: string;
    inputNumber: number;
    inputProps: { placeholder: string[]; maxLength: number; masking?: boolean };
  };
};
