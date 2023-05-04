import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { CardNumber } from "./cardNumber/cardNumber";
import { CardPassword } from "./cardPassword/cardPassword";
import { ExpiredDate } from "./expiredDate/expiredDate";
import { SecurityCode } from "./securityCode/securityCode";
import { UserName } from "./userName/userName";
import { TEXT_LENGTH } from "../../constants/inputInfo";
import { SubmitButton } from "../@common/button/submitButton";
import { bank } from "../../core/bank";
import { useCardInfoContext } from "../../hooks/useCardInfoContext";

export function AddCardForm() {
  const navigate = useNavigate();
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const { cardNumber, month, year, userName, selectedId } =
    useCardInfoContext();

  function checkAllInputs(e: React.FormEvent<HTMLFormElement>) {
    const inputElements = Array.from(
      e.currentTarget.elements
    ) as HTMLInputElement[];
    const isAllValid = inputElements.every(
      (input) => input.value.length >= TEXT_LENGTH[input.name.toUpperCase()]
    );
    isAllValid && setIsComplete(true);
  }

  function saveData(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate("/add-nickname", { state: getInputData() });
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
      cardColor: {
        bgColor: bank[selectedId]?.color,
        fontColor: bank[selectedId]?.font,
      },
      bank: bank[selectedId]?.logoName,
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
