import { CardInformationType, setCardInformationType } from "./CardInformationType";
import { useEachValidationType, useValidationType } from "./useValidationType";

export type FormContainerProps = {
  /** 카드 정보 상태값 */
  cardInformationState: CardInformationType;
  /** 카드 정보 상태 변경 함수 */
  setCardInformationState: setCardInformationType;
  /** 입력값에 대한 유효성 검사 훅을 담은 배열 */
  validation: useValidationType;
};

export type FormSectionProps = {
  /** 섹션 제목 */
  title: string;
  /** 섹션 설명 */
  description: string;
  /** 입력 필드에 대한 설정 정보 */
  inputFieldData: InputFieldProps;
};

export type InputFieldProps = {
  /** 입력 필드 라벨 */
  label: string;
  /** 필드 내 input 개수 */
  inputNumber: number;
  /** 개별 input 필드 설정 */
  inputProps: {
    placeholder: string[];
    maxLength: number;
  };
  /** 카드 정보 상태값 */
  cardInformation: CardInformationType;
  /** 카드 정보 상태 변경 함수 */
  setCardInformation: setCardInformationType;
  /** 이 필드가 담당하는 카드 정보 타입 */
  informationType: keyof CardInformationType;
  /** 해당 필드에 대한 개별 유효성 검사 */
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
  /** 에러 여부 */
  error: boolean;
  /** 에러 메시지 텍스트 */
  message: string;
};

type TextType = "title" | "description" | "label" | "error";
export type TextProps = {
  /** 텍스트 유형 */
  type: TextType;
  /** 실제 텍스트 내용 */
  text: string;
};

export type SelectProps = {
  /** select 옵션에 들어갈 데이터들 */
  options: ("BC카드" | "신한카드" | "카카오뱅크" | "현대카드" | "우리카드" | "롯데카드" | "하나카드" | "국민카드")[];
  /** select 초기에 보여질 텍스트 라벨 */
  placeholder: string;
  /** 카드 정보 상태 변경 함수 */
  setCardInformation: setCardInformationType;
};
