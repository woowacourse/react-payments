import { CARD_INPUT_TYPE, CardInputType } from "../../../constants/constants";
import { useCardInputError } from "../../../hooks/useCardInputError";
import Description from "../../Common/Description/Description";
import Error from "../../Common/Error/Error";
import Subtitle from "../../Common/Subtitle/Subtitle";
import Title from "../../Common/Title/Title";
import CardCompanySelect from "../CardInputs/CardCompanySelect/CardCompanySelect";
import CardCvcInput from "../CardInputs/CardCvcInput/CardCvcInput";
import CardExpirationPeriodInput from "../CardInputs/CardExpirationPeriodInput/CardExpirationPeriodInput";
import CardNumberInput from "../CardInputs/CardNumberInput/CardNumberInput";
import { CardInputGroupCSS } from "./CardInputSection.styled";

// TODO: CardInput -> CardForm으로 전부 변경, CardFormSections
export interface CardInputSectionProps {
  type: CardInputType;
}

const titleVariants: Record<CardInputType, string> = {
  [CARD_INPUT_TYPE.cardNumbers]: "결제할 카드 번호를 입력해 주세요",
  [CARD_INPUT_TYPE.expirationPeriod]: "카드 유효기간을 입력해 주세요",
  [CARD_INPUT_TYPE.cvcNumber]: "CVC 번호를 입력해 주세요",
  [CARD_INPUT_TYPE.cardCompany]: "카드사를 선택해 주세요",
};

const descriptionVariants: Record<CardInputType, string | null> = {
  [CARD_INPUT_TYPE.cardNumbers]: "본인 명의의 카드만 결제 가능합니다.",
  [CARD_INPUT_TYPE.expirationPeriod]: "월/년도(MMYY)를 순서대로 입력해 주세요.",
  [CARD_INPUT_TYPE.cvcNumber]: null,
  [CARD_INPUT_TYPE.cardCompany]: "현재 국내 카드사만 가능합니다.",
};

const subtitleVariants: Record<CardInputType, string | null> = {
  [CARD_INPUT_TYPE.cardNumbers]: "카드 번호",
  [CARD_INPUT_TYPE.expirationPeriod]: "유효기간",
  [CARD_INPUT_TYPE.cvcNumber]: "CVC",
  [CARD_INPUT_TYPE.cardCompany]: null,
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

  const renderInputByType = () => {
    switch (type) {
      case CARD_INPUT_TYPE.cardNumbers:
        return <CardNumberInput error={error} setError={setCardNumberError} />;
      case CARD_INPUT_TYPE.cardCompany:
        return <CardCompanySelect />;
      case CARD_INPUT_TYPE.expirationPeriod:
        return (
          <CardExpirationPeriodInput
            error={error}
            setError={setExpirationPeriodError}
          />
        );
      case CARD_INPUT_TYPE.cvcNumber:
        return <CardCvcInput error={error} setError={setCvcNumberError} />;
      // TODO: 비밀번호 Input 추가
      default:
        null;
    }
  };

  return (
    <>
      <Title title={titleVariants[type]} />
      <Description description={descriptionVariants[type]} />
      <Subtitle subtitle={subtitleVariants[type]} />
      <CardInputGroupCSS>{renderInputByType()}</CardInputGroupCSS>
      <Error
        errorMessage="숫자만 입력 가능합니다." // TODO: errorMessage도 useCardInputError에서 관리
        isVisible={isErrorVisible}
      />
    </>
  );
}

export default CardInputSection;
