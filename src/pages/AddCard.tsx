import Card from "../component/card/Card";
import Description from "../component/Description";
import styled from "styled-components";
import Input from "../component/Input";
import { useState } from "react";
import InputGroup from "../component/InputGroup";
import { CardInputProps } from "../types/CardInputTypes";
import {
  validateCardNumber,
  validateCardExpirationDateMM,
  validateCardExpirationDateYY,
  validateCardCVC,
} from "../validation/validation";
import { justifyBrandLogo } from "./util/justifyBrandLogo";

type ErrorMessagesType = {
  first: string;
  second: string;
  third: string;
  fourth: string;
  MM: string;
  YY: string;
  CVC: string;
};

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

  const [errorMessages, setErrorMessages] = useState<ErrorMessagesType>({
    first: "",
    second: "",
    third: "",
    fourth: "",
    MM: "",
    YY: "",
    CVC: "",
  });

  const handleErrorMessages = (
    key: keyof ErrorMessagesType,
    message: string
  ) => {
    setErrorMessages((prev) => ({
      ...prev,
      [key]: message,
    }));
  };

  const handleCardNumberErrorMessages = () => {
    const filterErrorMessage = [
      errorMessages.first,
      errorMessages.second,
      errorMessages.third,
      errorMessages.fourth,
    ].filter((message) => message.length !== 0);
    return filterErrorMessage[0];
  };

  const handlePeriodErrorMessages = () => {
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
        <InputGroup
          label="카드 번호"
          errorMessages={handleCardNumberErrorMessages()}
        >
          <Input
            maxLength={4}
            placeholder="1234"
            setCardInput={setCardInput}
            validate={validateCardNumber}
            inputKey="first"
            handleErrorMessage={(message) =>
              handleErrorMessages("first", message)
            }
          />
          <Input
            maxLength={4}
            placeholder="1234"
            validate={validateCardNumber}
            setCardInput={setCardInput}
            inputKey="second"
            handleErrorMessage={(message) =>
              handleErrorMessages("second", message)
            }
          />
          <Input
            maxLength={4}
            placeholder="1234"
            setCardInput={setCardInput}
            validate={validateCardNumber}
            inputKey="third"
            handleErrorMessage={(message) =>
              handleErrorMessages("third", message)
            }
          />
          <Input
            maxLength={4}
            placeholder="1234"
            setCardInput={setCardInput}
            validate={validateCardNumber}
            inputKey="fourth"
            handleErrorMessage={(message) =>
              handleErrorMessages("fourth", message)
            }
          />
        </InputGroup>

        <Description
          headText="카드 유효기간을 입력해 주세요"
          detailText="월/년도(MMYY)를 순서대로 입력해 주세요."
        />
        <InputGroup
          label="유효기간"
          errorMessages={handlePeriodErrorMessages()}
        >
          <Input
            maxLength={2}
            placeholder="MM"
            validate={validateCardExpirationDateMM}
            setCardInput={setCardInput}
            inputKey="MM"
            handleErrorMessage={(message) => handleErrorMessages("MM", message)}
          />
          <Input
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
          <Input
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
