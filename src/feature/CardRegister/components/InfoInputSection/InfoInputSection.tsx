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

const InfoInputSection = ({
  cardInfo,
  cardInfoHandlers,
}: {
  cardInfo: CardInfoType;
  cardInfoHandlers: CardInfoHandlersType;
}) => {
  const [cvcNumber, setCvcNumber] = useState("");
  const [formError, setFormError] = useState({
    cardNumber: false,
    expiryDate: false,
    cvc: false,
  });
  const { cardNumbers, expiryMonth, expiryYear } = cardInfo;
  const { setCardNumbers, setExpiryMonth, setExpiryYear } = cardInfoHandlers;

  // const hasFormError = Object.values(formError).some((value) => value);

  const handleFieldErrorChange = (
    fieldName: "cardNumber" | "expiryDate" | "cvc",
    hasError: boolean,
  ) => {
    setFormError({ ...formError, [fieldName]: hasError });
  };

  return (
    <Container>
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
      <InputContainer title="CVC 번호를 입력해 주세요">
        <CvcField
          cvcNumber={cvcNumber}
          setCvcNumber={setCvcNumber}
          onErrorChange={(hasError) => handleFieldErrorChange("cvc", hasError)}
        />
      </InputContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 30px;

  width: 100%;
`;

export default InfoInputSection;
