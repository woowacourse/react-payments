import { CardInformationType, setCardInformationType } from "./CardInformationType";
import { useEachValidationType, useValidationType } from "./useValidationType";

export type FormContainerProps = {
  cardInformationState: CardInformationType;
  setCardInformationState: setCardInformationType;
  validation: useValidationType;
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
  eachValidation: useEachValidationType;
};

export type InputProps = {
  /** 입력창에 표시할 힌트 텍스트 */
  placeholder: string;
  /** 입력 가능한 최대 숫자 길이 */
  maxLength: number;
  /** 현재 입력값 */
  value: string;
  /** 에러 상태 여부 (true일 경우 스타일 변경) */
  error: boolean;
  /** 입력값이 변경될 때 호출되는 콜백 함수 */
  onChange: (value: string) => void;
};

export type errorMessageProps = {
  error: boolean;
  message: string;
};

type TextType = "title" | "description" | "label" | "error";
export type TextProps = { type: TextType; text: string };
