import styled from "@emotion/styled";
import { CardNumberValue, ExpirationPeriodValue } from "../../@types/CreditCard";
import { CARD_FORM_TYPE, FormType } from "../../constants/cardFormType";
import InputCreditCardNumber from "../input/InputCreditCardNumber";
import InputExpirationPeriod from "../input/InputExpirationPeriod";
import InputOwnerName from "../input/InputOwnerName";

interface CreditCardFormProps {
  title: string;
  description?: string;
  type: FormType;
  inputValue: string | ExpirationPeriodValue | CardNumberValue;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputError: boolean;
}

const CreditCardForm = ({
  title,
  description,
  type,
  inputValue,
  handleChange,
  inputError,
}: CreditCardFormProps) => {
  const getComponentByType = (
    type: string,
    inputValue: string | ExpirationPeriodValue | CardNumberValue,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  ) => {
    if (type === CARD_FORM_TYPE.cardNumber)
      return (
        <InputCreditCardNumber
          inputValue={inputValue as CardNumberValue}
          handleChange={handleChange}
          inputError={inputError}
        />
      );

    if (type === CARD_FORM_TYPE.expirationPeriod)
      return (
        <InputExpirationPeriod
          inputValue={inputValue as ExpirationPeriodValue}
          handleChange={handleChange}
          inputError={inputError}
        />
      );

    if (type === CARD_FORM_TYPE.owner)
      return (
        <InputOwnerName
          inputValue={inputValue as string}
          handleChange={handleChange}
          inputError={inputError}
        />
      );
  };

  return (
    <CreditCardFormContainer>
      <TitleWrapper>{title}</TitleWrapper>
      <DescriptionWrapper>{description}</DescriptionWrapper>
      {getComponentByType(type, inputValue, handleChange)}
      {inputError && <ErrorMessage>유효한 값을 입력하세요.</ErrorMessage>}
    </CreditCardFormContainer>
  );
};

export default CreditCardForm;

const CreditCardFormContainer = styled.div`
  width: 315px;
  height: 137px;
`;

const TitleWrapper = styled.h1`
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
  text-align: left;
  margin-bottom: 4px;
`;

const DescriptionWrapper = styled.h3`
  font-family: Noto Sans KR;
  font-size: 9.5px;
  font-weight: 400;
  line-height: 13.76px;
  text-align: left;
  color: rgba(139, 149, 161, 1);
  margin-bottom: 16px;
`;

const ErrorMessage = styled.h3`
  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 400;
  line-height: 13.76px;
  text-align: left;
  color: red;
  margin-top: 8px;
`;
