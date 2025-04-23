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
import { useInputError } from "../../hooks/useInputError";

export interface InputSectionProps {
  type: InputType;
  onComplete: (
    value: string,
    position?: CardPositionType | PeriodPositionType
  ) => void;
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

function InputSection({ type, onComplete }: InputSectionProps) {
  const {
    error,
    validateCardNumber,
    validateExpirationPeriod,
    validateCvcNumber,
    validatePassword,
  } = useInputError();

  const getErrorVisible = (type: InputType) => {
    return type === INPUT_TYPE.cvcNumber
      ? error[type]
      : Object.values(error[type] ?? {}).some((value: boolean) => value);
  };

  return (
    <>
      <Title title={titleVariants[type]} />
      <Description description={descriptionVariants[type]} />
      <Subtitle subtitle={subTitleVariants[type]} />
      <InputGroup
        type={type}
        error={error}
        validateCardNumber={validateCardNumber}
        validateExpirationPeriod={validateExpirationPeriod}
        validateCvcNumber={validateCvcNumber}
        validatePassword={validatePassword}
        onComplete={onComplete}
      />
      <Error
        errorMessage="숫자만 입력 가능합니다."
        isVisible={getErrorVisible(type)}
      />
    </>
  );
}

export default InputSection;
