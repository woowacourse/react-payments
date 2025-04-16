import Card from "../component/Card";
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

  // 오류 메시지를 객체로 관리
  const [errorMessages, setErrorMessages] = useState({
    cardNumber: "",
    expirationDate: "",
    cvc: "",
  });

  // 오류 메시지 설정 함수
  const setErrorMessage = (key, message) => {
    setErrorMessages((prev) => ({
      ...prev,
      [key]: message,
    }));
  };

  return (
    <Wrap>
      <Card cardNumber={cardInput} cardType="visa" />
      <Form>
        <Description
          headText="결제할 카드 번호를 입력해 주세요."
          detailText="본인 명의의 카드만 결제 가능합니다."
        />
        <InputGroup
          label="카드 번호"
          errorKey="cardNumber"
          errorMessages={errorMessages}
        >
          <Input
            maxLength={4}
            placeholder="1234"
            setCardInput={setCardInput}
            validate={validateCardNumber}
            inputKey="first"
            setErrorMessage={(message) =>
              setErrorMessage("cardNumber", message)
            }
          />
          <Input
            maxLength={4}
            placeholder="1234"
            validate={validateCardNumber}
            setCardInput={setCardInput}
            inputKey="second"
            setErrorMessage={(message) =>
              setErrorMessage("cardNumber", message)
            }
          />
          <Input
            maxLength={4}
            placeholder="1234"
            setCardInput={setCardInput}
            validate={validateCardNumber}
            inputKey="third"
            setErrorMessage={(message) =>
              setErrorMessage("cardNumber", message)
            }
          />
          <Input
            maxLength={4}
            placeholder="1234"
            setCardInput={setCardInput}
            validate={validateCardNumber}
            inputKey="fourth"
            setErrorMessage={(message) =>
              setErrorMessage("cardNumber", message)
            }
          />
        </InputGroup>

        <Description
          headText="카드 유효기간을 입력해 주세요"
          detailText="월/년도(MMYY)를 순서대로 입력해 주세요."
        />
        <InputGroup
          label="유효기간"
          errorKey="expirationDate"
          errorMessages={errorMessages}
        >
          <Input
            maxLength={2}
            placeholder="MM"
            validate={validateCardExpirationDateMM}
            setCardInput={setCardInput}
            inputKey="MM"
            setErrorMessage={(message) =>
              setErrorMessage("expirationDate", message)
            }
          />
          <Input
            maxLength={2}
            placeholder="YY"
            validate={validateCardExpirationDateYY}
            setCardInput={setCardInput}
            inputKey="YY"
            setErrorMessage={(message) =>
              setErrorMessage("expirationDate", message)
            }
          />
        </InputGroup>

        <Description headText="CVC 번호를 입력해 주세요" />
        <InputGroup label="CVC" errorKey="cvc" errorMessages={errorMessages}>
          <Input
            maxLength={3}
            placeholder="123"
            validate={validateCardCVC}
            setCardInput={setCardInput}
            inputKey="CVC"
            setErrorMessage={(message) => setErrorMessage("cvc", message)}
          />
        </InputGroup>
      </Form>
    </Wrap>
  );
};

export default AddCard;
