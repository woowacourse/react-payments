import Card from "../component/card/Card";
import Description from "../component/Description";
import styled from "styled-components";
import CardInput from "../component/CardInput";
import { useState } from "react";
import InputGroup from "../component/inputGroup/InputGroup";
import {
  validateCardExpirationDateMM,
  validateCardExpirationDateYY,
  validateCardCVC,
} from "../validation/validation";
import { justifyBrandLogo } from "../util/justifyBrandLogo";
import CardNumberInput from "../component/inputSections/CardNumberInput";
import type { CardInputProps } from "../types/CardInputTypes";
import type { ErrorMessagesProps } from "../types/ErrorMessagesType";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 376px;
  padding: 30px;
  background-color: var(--color-white);
  padding-top: 77px;
  height: 700px;
  gap: 45px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 16px;
`;

const AddCard = () => {
  const [cardInput, setCardInput] = useState<CardInputProps>({
    first: null,
    second: null,
    third: null,
    fourth: null,
    MM: null,
    YY: null,
    CVC: null,
  });

  const [errorMessages, setErrorMessages] = useState<ErrorMessagesProps>({
    first: "",
    second: "",
    third: "",
    fourth: "",
    MM: "",
    YY: "",
    CVC: "",
  });

  const handleErrorMessages = (
    key: keyof ErrorMessagesProps,
    message: string
  ) => {
    setErrorMessages((prev: ErrorMessagesProps) => ({
      ...prev,
      [key]: message,
    }));
  };

  const getFirstCardNumberError = () => {
    const filterErrorMessage = [
      errorMessages.first,
      errorMessages.second,
      errorMessages.third,
      errorMessages.fourth,
    ].filter((message) => message.length !== 0);
    return filterErrorMessage[0];
  };

  const getFirstPeriodError = () => {
    const filterErrorMessage = [errorMessages.YY, errorMessages.MM].filter(
      (message) => message.length !== 0
    );
    return filterErrorMessage[0];
  };

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
          headText="결제할 카드 번호를 입력해 주세요."
          detailText="본인 명의의 카드만 결제 가능합니다."
        />
        <CardNumberInput
          getFirstCardNumberError={getFirstCardNumberError}
          handleErrorMessages={handleErrorMessages}
          setCardInput={setCardInput}
        />

        <Description
          headText="카드 유효기간을 입력해 주세요"
          detailText="월/년도(MMYY)를 순서대로 입력해 주세요."
        />
        <InputGroup label="유효기간" errorMessages={getFirstPeriodError()}>
          <CardInput
            maxLength={2}
            placeholder="MM"
            validate={validateCardExpirationDateMM}
            setCardInput={setCardInput}
            inputKey="MM"
            handleErrorMessage={(message) => handleErrorMessages("MM", message)}
          />
          <CardInput
            maxLength={2}
            placeholder="YY"
            validate={validateCardExpirationDateYY}
            setCardInput={setCardInput}
            inputKey="YY"
            handleErrorMessage={(message) => handleErrorMessages("YY", message)}
          />
        </InputGroup>

        <Description headText="CVC 번호를 입력해 주세요" />
        <InputGroup label="CVC" errorMessages={errorMessages.CVC}>
          <CardInput
            maxLength={3}
            placeholder="123"
            validate={validateCardCVC}
            setCardInput={setCardInput}
            inputKey="CVC"
            handleErrorMessage={(message) =>
              handleErrorMessages("CVC", message)
            }
          />
        </InputGroup>
      </Form>
    </Wrap>
  );
};

export default AddCard;
