import { useState } from "react";

import PageHeader from "../PageHeader.jsx";
import Button from "../components/UIComponents/Button/Button.jsx";

import {
  CardPreview,
  CardHolderNameInput,
  CardNumberInput,
  CardPasswordInput,
  CardSecurityCodeInput,
  CardExpireDateInput,
  Form,
} from "../components";
import {
  CARD_REGISTER_SUCCESS_MESSAGE,
  CARD_INFO_RULES,
  CARD_REGISTER_FAIL_MESSAGE,
  NICKNAME_REGISTER_SUCCESS_MESSAGE,
  NICKNAME_REGISTER_FAIL_MESSAGE,
} from "../constants.js";
import useLocalStorage from "../useLocalStorage.jsx";
import Input from "../components/UIComponents/Input/Input.jsx";
import InputField from "../components/UIComponents/InputField/InputField.jsx";
import styled from "styled-components";

const {
  NUMBER_UNIT_COUNT,
  NUMBER_UNIT_LENGTH,
  EXPIRE_DATE_LENGTH,
  SECURITY_CODE_LENGTH,
  PASSWORD_LENGTH,
} = CARD_INFO_RULES;

const SuccessMessage = styled.h1`
  font-size: 18px;
  text-align: center;
  margin: 80px auto;
`;

export default function CardAddPage({ setPage }) {
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
  const [expireDate, setExpireDate] = useState(["", ""]);
  const [holderName, setHolderName] = useState("");
  const [securityCodeLength, setSecurityCodeLength] = useState(0);
  const [passwordLength, setPasswordLength] = useState([0, 0]);
  const [isSubmitted, setSubmitted] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(null);

  const [formDataArray, saveFormData] = useLocalStorage("card-info");

  const isCompleteCardNumber =
    cardNumber.join("").length === NUMBER_UNIT_COUNT * NUMBER_UNIT_LENGTH;

  const isCompleteExpireDate =
    expireDate.join("").length === EXPIRE_DATE_LENGTH;

  const isCompleteSecurityCode = securityCodeLength === SECURITY_CODE_LENGTH;

  const isCompletePassword =
    passwordLength[0] + passwordLength[1] === PASSWORD_LENGTH;

  const isValidCardInfo =
    isCompleteCardNumber &&
    isCompleteExpireDate &&
    isCompleteSecurityCode &&
    isCompletePassword;

  const handleFormSubmit = (formData) => {
    try {
      setCurrentCardIndex(formDataArray.length);
      saveFormData([...formDataArray, formData]);
      alert(CARD_REGISTER_SUCCESS_MESSAGE);
      setSubmitted(true);
    } catch {
      alert(CARD_REGISTER_FAIL_MESSAGE);
    }
  };

  const handleAddNickname = ({ nickname }) => {
    const currentCardInfo = formDataArray[currentCardIndex];
    currentCardInfo.nickname = nickname;

    const newFormData = [...formDataArray.slice(0, -1), currentCardInfo];

    try {
      saveFormData(newFormData);
      alert(NICKNAME_REGISTER_SUCCESS_MESSAGE);
      setPage("CardList");
    } catch {
      alert(NICKNAME_REGISTER_FAIL_MESSAGE);
    }
  };

  return (
    <>
      <PageHeader isSubmitted={isSubmitted} />
      {isSubmitted && (
        <SuccessMessage>카드 등록이 완료되었습니다.</SuccessMessage>
      )}
      <CardPreview
        cardNumber={cardNumber}
        holderName={holderName}
        expireDate={expireDate}
        isValidCardInfo={isValidCardInfo}
        isSubmitted={isSubmitted}
      />
      {!isSubmitted ? (
        <Form onSubmit={handleFormSubmit}>
          <CardNumberInput
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
          />
          <CardExpireDateInput
            expireDate={expireDate}
            setExpireDate={setExpireDate}
          />
          <CardHolderNameInput
            holderName={holderName}
            setHolderName={setHolderName}
          />
          <CardSecurityCodeInput
            securityCodeLength={securityCodeLength}
            setSecurityCodeLength={setSecurityCodeLength}
          />
          <CardPasswordInput
            passwordLength={passwordLength}
            setPasswordLength={setPasswordLength}
          />
          {isValidCardInfo && <Button>다음</Button>}
        </Form>
      ) : (
        <Form onSubmit={handleAddNickname}>
          <InputField
            shape={"underline"}
            wrapperWidth={"almost-full"}
            horizontalAlign={"center"}
          >
            <Input
              width={"full"}
              name={"nickname"}
              placeholder={"카드의 별칭을 추가할 수 있습니다"}
            />
          </InputField>
          <Button>완료</Button>
        </Form>
      )}
    </>
  );
}
