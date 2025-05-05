export type SingleErrorType = boolean;
export type ListErrorType = boolean[];

export type ExpirationValidationType = "MM" | "YY";

export type cardInformationKey = "uniqueNumber" | "expirationDate" | "cvcNumber" | "password" | "company";

export type CompanyType =
  | "BC카드"
  | "신한카드"
  | "카카오뱅크"
  | "현대카드"
  | "우리카드"
  | "롯데카드"
  | "하나카드"
  | "국민카드"
  | "";

export type InputFormSectionData = {
  key: "uniqueNumber" | "expirationDate" | "cvcNumber" | "password";
  title: string;
  description: string;
  type: "input";
  fieldData: {
    label: string;
    inputNumber: number;
    inputProps: {
      placeholder: string[];
      maxLength: number;
      masking?: boolean;
    };
  };
};

export type SelectFormSectionData = {
  key: "company";
  title: string;
  description: string;
  type: "select";
  fieldData: {
    options: CompanyType[];
    placeholder: string;
  };
};

export type formSectionData = InputFormSectionData | SelectFormSectionData;
