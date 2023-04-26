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
import { validation } from "../validation/input";
import { TEXT_LENGTH } from "../constants/inputInfo";

export function AddCardForm() {
  const navigate = useNavigate();
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const inputRef = useContext(RefContext);

  function checkAllInputs() {
    const isValid = Object.keys(inputRef.current).every(
      (input) =>
        inputRef.current[input].value.length >= TEXT_LENGTH[input.toUpperCase()]
    );
    isValid && setIsComplete(true);
  }

  return (
    <Form onChange={checkAllInputs}>
      <CardNumber />
      <ExpiredDate />
      <UserName />
      <SecurityCode />
      <CardPassword />
      <ButtonWrapper>
        {isComplete && <CompleteButton type="submit">다음</CompleteButton>}
      </ButtonWrapper>
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
