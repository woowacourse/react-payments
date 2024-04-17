import styled from "@emotion/styled";
import InputOwnerName from "../input/InputOwnerName";
import InputExpirationPeriod from "../input/InputExpirationPeriod";
import { CardNumberValue, ExpirationPeriodValue } from "../../@types/CreditCard";
import InputCreditCardNumber from "../input/InputCreditCardNumber";

type FormType = "owner" | "expirationPeriod" | "cardNumber";

interface CreditCardFormProps {
  title: string;
  description?: string;
  type: FormType;
  inputValue: string | ExpirationPeriodValue | CardNumberValue;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CreditCardForm = ({
  title,
  description,
  type,
  inputValue,
  handleChange,
}: CreditCardFormProps) => {
  const getComponentByType = (
    type: string,
    inputValue: string | ExpirationPeriodValue | CardNumberValue,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  ) => {
    if (type === "owner")
      return <InputOwnerName inputValue={inputValue as string} handleChange={handleChange} />;

    if (type === "expirationPeriod")
      return (
        <InputExpirationPeriod
          inputValue={inputValue as ExpirationPeriodValue}
          handleChange={handleChange}
        />
      );

    if (type === "cardNumber")
      return (
        <InputCreditCardNumber
          inputValue={inputValue as CardNumberValue}
          handleChange={handleChange}
        />
      );
  };

  return (
    <CreditCardFormContainer>
      <TitleWrapper>{title}</TitleWrapper>
      <DescriptionWrapper>{description}</DescriptionWrapper>
      {getComponentByType(type, inputValue, handleChange)}
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
