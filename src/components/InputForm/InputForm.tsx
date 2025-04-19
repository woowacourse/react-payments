import { INPUT_TYPE, InputType } from "../../constants/constants";
import Description from "../Description/Description";
import Error from "../Error/Error";
import InputGroup from "../InputGroup/InputGroup";
import Subtitle from "../Subtitle/Subtitle";
import Title from "../Title/Title";
import { useInputError } from "../../hooks/useInputError";

export interface InputFormProps {
  type: InputType;
}

const titleVariants: Record<InputType, string> = {
  [INPUT_TYPE.cardNumbers]: "결제할 카드 번호를 입력해 주세요",
  [INPUT_TYPE.expirationPeriod]: "카드 유효기간을 입력해 주세요",
  [INPUT_TYPE.cvcNumber]: "CVC 번호를 입력해 주세요",
};

const descriptionVariants: Record<InputType, string | null> = {
  [INPUT_TYPE.cardNumbers]: "본인 명의의 카드만 결제 가능합니다.",
  [INPUT_TYPE.expirationPeriod]: "월/년도(MMYY)를 순서대로 입력해 주세요.",
  [INPUT_TYPE.cvcNumber]: null,
};

const subTitleVariants: Record<InputType, string> = {
  [INPUT_TYPE.cardNumbers]: "카드 번호",
  [INPUT_TYPE.expirationPeriod]: "유효기간",
  [INPUT_TYPE.cvcNumber]: "CVC",
};

function InputForm({ type }: InputFormProps) {
  const {
    error,
    setCardNumberError,
    setExpirationPeriodError,
    setCvcNumberError,
  } = useInputError();

  const isErrorVisible =
    type === INPUT_TYPE.cvcNumber
      ? error[type]
      : Object.values(error[type] ?? {}).some((v) => v);

  return (
    <>
      <Title title={titleVariants[type]} />
      <Description description={descriptionVariants[type]} />
      <Subtitle subtitle={subTitleVariants[type]} />
      <InputGroup
        type={type}
        error={error}
        setCardNumberError={setCardNumberError}
        setExpirationPeriodError={setExpirationPeriodError}
        setCvcNumberError={setCvcNumberError}
      />
      <Error
        errorMessage="숫자만 입력 가능합니다."
        isVisible={isErrorVisible}
      />
    </>
  );
}

export default InputForm;
