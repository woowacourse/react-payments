import { CardInformationType, setCardInformationType } from "./CardInformationType";

export type FormContainerProps = {
  cardInformationState: CardInformationType;
  setCardInformationState: setCardInformationType;
};

export type FormSectionProps = {
  title: string;
  description: string;
  inputFieldData: InputFieldProps;
};

export type InputFieldProps = {
  label: string;
  inputNumber: number;
  inputProps: {
    placeholder: string[];
    maxLength: number;
  };
  cardInformation: CardInformationType;
  setCardInformation: setCardInformationType;
  informationType: keyof CardInformationType;
};

export type InputProps = {
  placeholder: string;
  maxLength: number;
  value: string;
  error: boolean;
  onChange: (value: string) => void;
};

export type errorMessageProps = {
  error: boolean;
  message: string;
};

type TextType = "title" | "description" | "label" | "error";
export type TextProps = { type: TextType; text: string };
