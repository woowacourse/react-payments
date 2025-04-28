import {
  CardPositionType,
  INPUT_TYPE,
  InputType,
  PeriodPositionType,
} from "../../constants/constants";
import Description from "../Description/Description";
import Error from "../Error/Error";
import InputGroup from "../InputGroup/InputGroup";
import Subtitle from "../Subtitle/Subtitle";
import Title from "../Title/Title";
import { InputErrorType } from "../../hooks/useInputError";

export interface InputSectionProps {
  type: InputType;
  onComplete: (
    value: string,
    position?: CardPositionType | PeriodPositionType
  ) => void;
  error: InputErrorType;
  validators: {
    validateCardNumber: (value: string, position: CardPositionType) => void;
    validateExpirationPeriod: (
      value: string,
      position: PeriodPositionType
    ) => void;
    validateCvcNumber: (value: string) => void;
    validatePassword: (value: string) => void;
  };
}

const titleVariants = {
  [INPUT_TYPE.cardNumbers]: "결제할 카드 번호를 입력해 주세요",
  [INPUT_TYPE.expirationPeriod]: "카드 유효기간을 입력해 주세요",
  [INPUT_TYPE.cvcNumber]: "CVC 번호를 입력해 주세요",
  [INPUT_TYPE.cardBrand]: "카드사를 선택해 주세요",
  [INPUT_TYPE.password]: "비밀번호를 입력해주세요",
};

const descriptionVariants = {
  [INPUT_TYPE.cardNumbers]: "본인 명의의 카드만 결제 가능합니다.",
  [INPUT_TYPE.expirationPeriod]: "월/년도(MMYY)를 순서대로 입력해 주세요.",
  [INPUT_TYPE.cvcNumber]: null,
  [INPUT_TYPE.cardBrand]: "현재 국내 카드사만 가능합니다.",
  [INPUT_TYPE.password]: "앞의 2자리를 입력해주세요.",
};

const subTitleVariants = {
  [INPUT_TYPE.cardNumbers]: "카드 번호",
  [INPUT_TYPE.expirationPeriod]: "유효기간",
  [INPUT_TYPE.cvcNumber]: "CVC",
  [INPUT_TYPE.cardBrand]: null,
  [INPUT_TYPE.password]: "비밀번호 앞 2자리",
};

function InputSection({
  type,
  onComplete,
  error,
  validators,
}: InputSectionProps) {
  const getErrorMessage = (type: InputType) => {
    if (type === INPUT_TYPE.cardNumbers) {
      return (
        Object.values(error.cardNumbers).find((message) => message !== null) ||
        null
      );
    }
    if (type === INPUT_TYPE.expirationPeriod) {
      return (
        error.expirationPeriod.month || error.expirationPeriod.year || null
      );
    }
    if (type === INPUT_TYPE.cvcNumber) {
      return error.cvcNumber || null;
    }
    if (type === INPUT_TYPE.password) {
      return error.password || null;
    }
    if (type === INPUT_TYPE.cardBrand) {
      return error.cardBrand || null;
    }
    return null;
  };

  return (
    <>
      <Title title={titleVariants[type]} />
      <Description description={descriptionVariants[type]} />
      <Subtitle subtitle={subTitleVariants[type]} />
      <InputGroup
        type={type}
        error={error}
        validateCardNumber={validators.validateCardNumber}
        validateExpirationPeriod={validators.validateExpirationPeriod}
        validateCvcNumber={validators.validateCvcNumber}
        validatePassword={validators.validatePassword}
        onComplete={onComplete}
      />
      <Error errorMessage={getErrorMessage(type)} />
    </>
  );
}

export default InputSection;
