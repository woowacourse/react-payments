import { CARD_INPUT_TYPE, CardInputType } from "../../../constants/constants";
import Description from "../../Common/Description/Description";
import Error from "../../Common/Error/Error";
import CardInputGroup from "../CardInputGroup/CardInputGroup";
import Subtitle from "../../Common/Subtitle/Subtitle";
import Title from "../../Common/Title/Title";
import { useCardInputError } from "../../../hooks/useCardInputError";

export interface CardInputSectionProps {
  type: CardInputType;
}

const titleVariants: Record<CardInputType, string> = {
  [CARD_INPUT_TYPE.cardNumbers]: "결제할 카드 번호를 입력해 주세요",
  [CARD_INPUT_TYPE.expirationPeriod]: "카드 유효기간을 입력해 주세요",
  [CARD_INPUT_TYPE.cvcNumber]: "CVC 번호를 입력해 주세요",
};

const descriptionVariants: Record<CardInputType, string | null> = {
  [CARD_INPUT_TYPE.cardNumbers]: "본인 명의의 카드만 결제 가능합니다.",
  [CARD_INPUT_TYPE.expirationPeriod]: "월/년도(MMYY)를 순서대로 입력해 주세요.",
  [CARD_INPUT_TYPE.cvcNumber]: null,
};

const subtitleVariants: Record<CardInputType, string> = {
  [CARD_INPUT_TYPE.cardNumbers]: "카드 번호",
  [CARD_INPUT_TYPE.expirationPeriod]: "유효기간",
  [CARD_INPUT_TYPE.cvcNumber]: "CVC",
};

function CardInputSection({ type }: CardInputSectionProps) {
  const {
    error,
    setCardNumberError,
    setExpirationPeriodError,
    setCvcNumberError,
  } = useCardInputError();

  const isErrorVisible =
    type === CARD_INPUT_TYPE.cvcNumber
      ? error[type]
      : Object.values(error[type] ?? {}).some((v) => v);

  return (
    <>
      <Title title={titleVariants[type]} />
      <Description description={descriptionVariants[type]} />
      <Subtitle subtitle={subtitleVariants[type]} />
      <CardInputGroup
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

export default CardInputSection;
