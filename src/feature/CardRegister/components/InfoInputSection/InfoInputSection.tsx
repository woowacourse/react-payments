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
  const [formError, setFormError] = useState({
    cardNumber: false,
    expiryDate: false,
    cvc: false,
    password: false,
  }); // 이부분 state말고 파생값으로 바꿔야함
  const [formStep, setFormStep] = useState(1);

  const { cardNumbers, expiryMonth, expiryYear, selectedCardCompany } =
    cardInfo;
  const { setCardNumbers, setExpiryMonth, setExpiryYear } = cardInfoHandlers;

  const fieldCompleteState = {
    cardNumber: cardNumbers.every((chunk) => chunk.length === 4),
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

  const handleFieldErrorChange = (
    fieldName: "cardNumber" | "expiryDate" | "cvc" | "password",
    hasError: boolean,
  ) => {
    setFormError({ ...formError, [fieldName]: hasError });
  };

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
          <PasswordField
            password={password}
            setPassword={setPassword}
            onErrorChange={(hasError) =>
              handleFieldErrorChange("password", hasError)
            }
          />
        </InputContainer>
      )}

      {formStep >= 4 && (
        <InputContainer title="CVC 번호를 입력해 주세요">
          <CvcField
            cvcNumber={cvcNumber}
            setCvcNumber={setCvcNumber}
            onErrorChange={(hasError) =>
              handleFieldErrorChange("cvc", hasError)
            }
          />
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
            onErrorChange={(hasError) =>
              handleFieldErrorChange("expiryDate", hasError)
            }
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
            onErrorChange={(hasError) =>
              handleFieldErrorChange("cardNumber", hasError)
            }
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
