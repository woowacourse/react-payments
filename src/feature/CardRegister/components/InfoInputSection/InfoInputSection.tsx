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
  const [isError, setIsError] = useState(false);

  const { cardNumbers, expiryMonth, expiryYear } = cardInfo;
  const { setCardNumbers, setExpiryMonth, setExpiryYear } = cardInfoHandlers;

  if (isError) {
    console.log("error");
  }

  return (
    <Container>
      <InputContainer
        title="결제할 카드 번호를 입력해 주세요"
        description="본인 명의의 카드만 결제 가능합니다."
      >
        <NumberField
          cardNumbers={cardNumbers}
          setCardNumbers={setCardNumbers}
          setIsError={setIsError}
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
          setIsError={setIsError}
        />
      </InputContainer>
      <InputContainer title="CVC 번호를 입력해 주세요">
        <CvcField
          cvcNumber={cvcNumber}
          setCvcNumber={setCvcNumber}
          setIsError={setIsError}
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
