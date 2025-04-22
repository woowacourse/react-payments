import Card from "../component/card/Card";
import Description from "../component/Description";
import styled from "styled-components";
import { useState } from "react";
import { justifyBrandLogo } from "../util/justifyBrandLogo";
import CardNumberInputs from "../component/formSections/cardNumberInputs/CardNumberInputs";
import type { CardInputProps } from "../types/CardInputTypes";
import { useErrorMessages } from "../hook/useErrorMessages";
import ExpirationDateInputs from "../component/formSections/expirationDateInputs/ExpirationDateInputs";
import CVCInputs from "../component/formSections/cvcInputs/CVCInputs";
import { getFirstErrorMessage } from "../util/getFirstErrorMessage";
import CardBrandSelects from "../component/formSections/cardBrandSelects";
import CardPasswordInputs from "../component/formSections/cardPasswordInputs";

const AddCard = () => {
  const [cardInput, setCardInput] = useState<CardInputProps>({
    first: null,
    second: null,
    third: null,
    fourth: null,
    MM: null,
    YY: null,
    CVC: null,
    password: null,
  });

  const { errorMessages, handleErrorMessages } = useErrorMessages();

  return (
    <Wrap>
      <Card
        cardNumber={cardInput}
        cardType={
          cardInput.first ? justifyBrandLogo(cardInput.first) : "default"
        }
      />
      <Form>
        <Description
          headText="비밀번호를 입력해 주세요"
          detailText="앞의 2자리를 입력해주세요"
        />
        <CardPasswordInputs
          errorMessage={errorMessages.password}
          handleErrorMessages={handleErrorMessages}
          setCardInput={setCardInput}
        />
        <Description headText="CVC 번호를 입력해 주세요" />
        <CVCInputs
          errorMessage={errorMessages.CVC}
          handleErrorMessages={handleErrorMessages}
          setCardInput={setCardInput}
        />
        <Description
          headText="카드 유효기간을 입력해 주세요"
          detailText="월/년도(MMYY)를 순서대로 입력해 주세요."
        />
        <ExpirationDateInputs
          errorMessage={getFirstErrorMessage([
            errorMessages.YY,
            errorMessages.MM,
          ])}
          handleErrorMessages={handleErrorMessages}
          setCardInput={setCardInput}
        />
        <Description
          headText="카드사를 선택해 주세요"
          detailText="현재 국내 카드사만 가능합니다."
        />
        <CardBrandSelects />
        <Description
          headText="결제할 카드 번호를 입력해 주세요."
          detailText="본인 명의의 카드만 결제 가능합니다."
        />
        <CardNumberInputs
          errorMessage={getFirstErrorMessage([
            errorMessages.first,
            errorMessages.second,
            errorMessages.third,
            errorMessages.fourth,
          ])}
          handleErrorMessages={handleErrorMessages}
          setCardInput={setCardInput}
        />
      </Form>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 376px;
  padding: 30px;
  background-color: var(--color-white);
  padding-top: 77px;
  gap: 45px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 16px;
`;

export default AddCard;
