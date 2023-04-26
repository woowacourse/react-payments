import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { CardNumber } from "./cardNumber";
import { CardPassword } from "./cardPassword";
import { ExpiredDate } from "./expiredDate";
import { SecurityCode } from "./securityCode";
import { UserName } from "./userName";
import {
  DateContext,
  NameContext,
  NumberContext,
  RefContext,
} from "../contexts/cardInfo";
import { TEXT_LENGTH } from "../constants/inputInfo";
import { setCardData } from "../utils/localStorage";
import { SubmitButton } from "./common/submitButton";

export function AddCardForm() {
  const navigate = useNavigate();
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const inputRef = useContext(RefContext);
  const { cardNumber } = useContext(NumberContext);
  const { month, year } = useContext(DateContext);
  const { userName } = useContext(NameContext);

  function checkAllInputs() {
    const isValid = Object.keys(inputRef.current).every(
      (input) =>
        inputRef.current[input].value.length >= TEXT_LENGTH[input.toUpperCase()]
    );
    isValid && setIsComplete(true);
  }

  function saveData(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCardData(getInputData());
    navigate("/");
  }

  function getInputData() {
    return {
      cardNumber: {
        first: cardNumber["first"],
        second: cardNumber["second"],
        third: cardNumber["third"],
        fourth: cardNumber["fourth"],
      },
      month: month,
      year: year,
      userName: userName,
    };
  }

  return (
    <Form onChange={checkAllInputs} onSubmit={saveData}>
      <CardNumber />
      <ExpiredDate />
      <UserName />
      <SecurityCode />
      <CardPassword />
      {isComplete && <SubmitButton />}
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;

  margin-left: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const CompleteButton = styled.button`
  width: 5rem;

  padding: 0.5rem 0.1rem;

  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.gray200};
`;
