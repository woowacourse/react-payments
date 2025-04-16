import { INPUT_TYPE } from "../../constants/constants";
import Description from "../Description/Description";
import InputGroup from "../InputGroup/InputGroup";
import Subtitle from "../Subtitle/Subtitle";
import Title from "../Title/Title";

export interface InputFormProps {
  type: keyof typeof INPUT_TYPE;
}

const titleVariants = {
  [INPUT_TYPE.cardNumber]: "결제할 카드 번호를 입력해 주세요",
  [INPUT_TYPE.expirationPeriod]: "카드 유효기간을 입력해 주세요",
  [INPUT_TYPE.cvcNumber]: "CVC 번호를 입력해 주세요",
};

const descriptionVariants = {
  [INPUT_TYPE.cardNumber]: "본인 명의의 카드만 결제 가능합니다.",
  [INPUT_TYPE.expirationPeriod]: "월/년도(MMYY)를 순서대로 입력해 주세요.",
  [INPUT_TYPE.cvcNumber]: null,
};

const subTitleVariants = {
  [INPUT_TYPE.cardNumber]: "카드 번호",
  [INPUT_TYPE.expirationPeriod]: "유효기간",
  [INPUT_TYPE.cvcNumber]: "CVC",
};

function InputForm({ type }: InputFormProps) {
  return (
    <>
      <Title title={titleVariants[type]} />
      <Description description={descriptionVariants[type]} />
      <Subtitle subtitle={subTitleVariants[type]} />
      <InputGroup type={type} />
    </>
  );
}

export default InputForm;
