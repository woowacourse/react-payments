import { ComponentProps } from "react";
import { CompanyType } from ".";
import { CardInformationType, setCardInformationType } from "./CardInformationType";
import { useEachValidationType, validationFieldType } from "./useValidationType";

export type FormContainerProps = {
  /** 카드 정보 상태값 */
  cardInformationState: CardInformationType;
  /** 카드 정보 상태 변경 함수 */
  setCardInformationState: setCardInformationType;
  /** 입력값에 대한 유효성 검사 훅을 담은 배열 */
  validation: validationFieldType;
  /** 단계별 step */
  step: number;
};

export type InputFormSectionProps<T extends Exclude<keyof CardInformationType, "company">> = {
  /** 섹션 제목 */
  title: string;
  /** 섹션 설명 */
  description: string;
  /** 필드 타입 */
  type: "input";
  /** key  타입 */
  key: T;
  /** 입력 필드에 대한 설정 정보 */
  fieldData: InputFieldProps<T>;
};

export type SelectFormSectionProps<T extends Extract<keyof CardInformationType, "company">> = {
  title: string;
  description: string;
  type: "select";
  /** key  타입 */
  key: T;
  fieldData: SelectProps<T>;
};

export type FormSectionProps =
  | InputFormSectionProps<Exclude<keyof CardInformationType, "company">>
  | SelectFormSectionProps<Extract<keyof CardInformationType, "company">>;

export type FormSectionBaseProps = { title: string; description: string; children: React.ReactNode };

export type InputFieldProps<T extends Exclude<keyof CardInformationType, "company">> = {
  /** 입력 필드 라벨 */
  label: string;
  /** 필드 내 input 개수 */
  inputNumber: number;
  /** 개별 input 필드 설정 */
  inputProps: {
    placeholder: string[];
    maxLength: number;
    masking?: boolean;
  };
  /** 카드 정보 상태값 */
  cardInformation: CardInformationType[T];
  /** 카드 정보 상태 변경 함수 */
  setCardInformation: React.Dispatch<React.SetStateAction<CardInformationType[T]>>;
  // /** 이 필드가 담당하는 카드 정보 타입 */
  // informationType: T;
  /** 해당 필드에 대한 개별 유효성 검사 */
  eachValidation: Omit<useEachValidationType, "isComplete">;
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
  /** 입력값이 마스킹 처리가 되어야하는 경우 */
  masking?: boolean;
};

export type errorMessageProps = {
  /** 에러 여부 */
  error: boolean;
  /** 에러 메시지 텍스트 */
  message: string;
};

type TextType = "title" | "description" | "label" | "error" | "complete";
export type TextProps = {
  /** 텍스트 유형 */
  type: TextType;
  /** 실제 텍스트 내용 */
  text: string;
};

// 🔥 select 전용
export type SelectProps<T extends Extract<keyof CardInformationType, "company">> = {
  /** select 옵션에 들어갈 데이터들 */
  options: CompanyType[];
  /** select 초기에 보여질 텍스트 라벨 */
  placeholder: string;
  /** 이 필드가 담당하는 카드 정보 타입 */
  // informationType: CardInformationType[T];
  /** 카드 정보 상태 변경 함수 */
  setCardInformation: React.Dispatch<React.SetStateAction<CardInformationType[T]>>;
};

export type ButtonProps = {
  /** 버튼에 들어갈 텍스트 내용 */
  text: string;
} & ComponentProps<"button">;
