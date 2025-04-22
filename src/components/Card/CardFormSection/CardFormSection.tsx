import { CARD_FORM_TYPE, CardFormType } from "../../../constants/constants";
import { useCardValidation } from "../../../hooks/useCardValidation";
import Description from "../../Common/Description/Description";
import Error from "../../Common/Error/Error";
import Subtitle from "../../Common/Subtitle/Subtitle";
import Title from "../../Common/Title/Title";
import CardCompanySelect from "../CardFormFields/CardCompanySelect/CardCompanySelect";
import CardCvcInput from "../CardFormFields/CardCvcInput/CardCvcInput";
import CardExpirationPeriodInput from "../CardFormFields/CardExpirationPeriodInput/CardExpirationPeriodInput";
import CardNumberInput from "../CardFormFields/CardNumberInput/CardNumberInput";
import { CardFormFieldCSS } from "./CardFormSection.styled";

export interface CardFormSectionProps {
  type: CardFormType;
}

const titleVariants: Record<CardFormType, string> = {
  [CARD_FORM_TYPE.cardNumbers]: "결제할 카드 번호를 입력해 주세요",
  [CARD_FORM_TYPE.expirationPeriod]: "카드 유효기간을 입력해 주세요",
  [CARD_FORM_TYPE.cvcNumber]: "CVC 번호를 입력해 주세요",
  [CARD_FORM_TYPE.cardCompany]: "카드사를 선택해 주세요",
};

const descriptionVariants: Record<CardFormType, string | null> = {
  [CARD_FORM_TYPE.cardNumbers]: "본인 명의의 카드만 결제 가능합니다.",
  [CARD_FORM_TYPE.expirationPeriod]: "월/년도(MMYY)를 순서대로 입력해 주세요.",
  [CARD_FORM_TYPE.cvcNumber]: null,
  [CARD_FORM_TYPE.cardCompany]: "현재 국내 카드사만 가능합니다.",
};

const subtitleVariants: Record<CardFormType, string | null> = {
  [CARD_FORM_TYPE.cardNumbers]: "카드 번호",
  [CARD_FORM_TYPE.expirationPeriod]: "유효기간",
  [CARD_FORM_TYPE.cvcNumber]: "CVC",
  [CARD_FORM_TYPE.cardCompany]: null,
};

function CardFormSection({ type }: CardFormSectionProps) {
  const {
    validationErrors,
    validateCardNumber,
    validateExpirationPeriod,
    validateCvcNumber,
  } = useCardValidation();

  const isErrorVisible =
    type === CARD_FORM_TYPE.cvcNumber
      ? validationErrors[type]
      : Object.values(validationErrors[type] ?? {}).some((v) => v);

  const renderCardFormFieldByType = () => {
    switch (type) {
      case CARD_FORM_TYPE.cardNumbers:
        return (
          <CardNumberInput
            error={validationErrors}
            setError={validateCardNumber}
          />
        );
      case CARD_FORM_TYPE.cardCompany:
        return <CardCompanySelect />;
      case CARD_FORM_TYPE.expirationPeriod:
        return (
          <CardExpirationPeriodInput
            error={validationErrors}
            setError={validateExpirationPeriod}
          />
        );
      case CARD_FORM_TYPE.cvcNumber:
        return (
          <CardCvcInput error={validationErrors} setError={validateCvcNumber} />
        );
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
      <CardFormFieldCSS>{renderCardFormFieldByType()}</CardFormFieldCSS>
      <Error
        errorMessage="숫자만 입력 가능합니다." // TODO: errorMessage도 useCardInputError에서 관리
        isVisible={isErrorVisible}
      />
    </>
  );
}

export default CardFormSection;
