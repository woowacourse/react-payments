import { useState } from "react";
import CvcField from "./CvcField/CvCField";
import ExpiryField from "./ExpiryField/ExpiryField";
import InputContainer from "./InputContainer/InputContainer";
import NumberField from "./NumberField/NumberField";
import type {
  CardInfoHandlersType,
  CardInfoType,
} from "../../../../common/types/CardInfoType";
import styled from "styled-components";
import CardCompanySelectField from "./CardCompanySelectField/CardCompanySelectField";
import type { CardCompanyType } from "../../../../common/types/CardCompany";
import PasswordField from "./PasswordField/PasswordField";
import Button from "../../../../common/components/Button/Button";
import { useNavigate } from "react-router-dom";
import { getCardBrandName } from "../../utils/cardBrand";
import type { CardBrandType } from "../../../../common/types/CardBrand";

const InfoInputSection = ({
  cardInfo,
  cardInfoHandlers,
  handleCardCompanyClick,
}: {
  cardInfo: CardInfoType;
  cardInfoHandlers: CardInfoHandlersType;
  handleCardCompanyClick: (cardCompany: CardCompanyType) => void;
}) => {
  const navigate = useNavigate();
  const [cvcNumber, setCvcNumber] = useState("");
  const [password, setPassword] = useState("");
  const [formStep, setFormStep] = useState(1);

  const { cardNumbers, expiryMonth, expiryYear, selectedCardCompany } =
    cardInfo;
  const { setCardNumbers, setExpiryMonth, setExpiryYear } = cardInfoHandlers;
  const cardBrand = getCardBrandName(cardNumbers);
  const getBrandLastCardNumberLength = (cardBrand: CardBrandType) => {
    if (cardBrand === "visa") {
      return 4;
    }
    if (cardBrand === "masterCard") {
      return 4;
    }
    if (cardBrand === "diners") {
      return 2;
    }
    if (cardBrand === "amex") {
      return 3;
    }
    if (cardBrand === "unionPay") {
      return 4;
    }
    return 4;
  };

  const fieldCompleteState = {
    cardNumber:
      cardNumbers[0].length === 4 &&
      cardNumbers[1].length === 4 &&
      cardNumbers[2].length === 4 &&
      cardNumbers[3].length === getBrandLastCardNumberLength(cardBrand),
    cardCompany: selectedCardCompany,
    expirayDate: expiryMonth.length === 2 && expiryYear.length === 2,
    cvc: cvcNumber.length === 3,
    password: password.length === 2,
  };

  const isFormComplete = Object.values(fieldCompleteState).every(
    (isCompleteFiled) => isCompleteFiled,
  );

  if (fieldCompleteState.cardNumber && formStep < 2) {
    setFormStep((previous) => previous + 1);
  }

  if (fieldCompleteState.cardCompany && formStep < 3) {
    setFormStep((previous) => previous + 1);
  }

  if (fieldCompleteState.expirayDate && formStep < 4) {
    setFormStep((previous) => previous + 1);
  }

  if (fieldCompleteState.cvc && formStep < 5) {
    setFormStep((previous) => previous + 1);
  }

  if (fieldCompleteState.password && formStep < 6) {
    setFormStep((previous) => previous + 1);
  }

  const handleCardInfoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/register-complete", {
      state: {
        firstCardNumberChunk: cardNumbers[0],
        cardCompany: selectedCardCompany,
      },
    });
  };

  return (
    <Form onSubmit={handleCardInfoSubmit}>
      {formStep >= 5 && (
        <InputContainer
          title="비밀번호를 입력해 주세요"
          description="앞의 2자리를 입력해주세요"
        >
          <PasswordField password={password} setPassword={setPassword} />
        </InputContainer>
      )}

      {formStep >= 4 && (
        <InputContainer title="CVC 번호를 입력해 주세요">
          <CvcField cvcNumber={cvcNumber} setCvcNumber={setCvcNumber} />
        </InputContainer>
      )}

      {formStep >= 3 && (
        <InputContainer
          title="카드 유효기간을 입력해 주세요"
          description="월/년도(MMYY)를 순서대로 입력해 주세요."
        >
          <ExpiryField
            expiryMonth={expiryMonth}
            expiryYear={expiryYear}
            setExpiryMonth={setExpiryMonth}
            setExpiryYear={setExpiryYear}
          />
        </InputContainer>
      )}

      {formStep >= 2 && (
        <InputContainer
          title="카드사를 선택해 주세요"
          description="현재 국내 카드사만 가능합니다."
        >
          <CardCompanySelectField onSelect={handleCardCompanyClick} />
        </InputContainer>
      )}

      {formStep >= 1 && (
        <InputContainer
          title="결제할 카드 번호를 입력해 주세요"
          description="본인 명의의 카드만 결제 가능합니다."
        >
          <NumberField
            cardNumbers={cardNumbers}
            setCardNumbers={setCardNumbers}
            lastInputMaxLength={getBrandLastCardNumberLength(cardBrand)}
          />
        </InputContainer>
      )}
      {isFormComplete && (
        <Button size="full" type="submit">
          확인
        </Button>
      )}
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 30px;

  width: 100%;
`;

export default InfoInputSection;
