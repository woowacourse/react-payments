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

export function AddCardForm() {
  const navigate = useNavigate();
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const inputRef = useContext(RefContext);

  const { cardNumber } = useContext(NumberContext);
  const { month, year } = useContext(DateContext);
  const { userName } = useContext(NameContext);

  function validateInputValue(key: string) {
    switch (key) {
      case "first":
        return inputRef.current[key].value.length === 4;
      case "second":
        return inputRef.current[key].value.length === 4;
      case "third":
        return inputRef.current[key].value.length === 4;
      case "fourth":
        return inputRef.current[key].value.length === 4;
      case "month":
        return validation.isCorrectMonth(inputRef.current[key].value);
      case "year":
        return validation.isNumber(inputRef.current[key].value);
      case "code":
        return inputRef.current[key].value.length === 3;
      case "name":
        return inputRef.current[key].value.length < 30;
      case "firstPassword":
        return inputRef.current[key].value.length === 1;
      case "secondPassword":
        return inputRef.current[key].value.length === 1;
    }
  }

  function checkAllInputs() {
    const isValidate = Object.keys(inputRef.current).every((input) =>
      validateInputValue(input)
    );
    isValidate && setIsComplete(true);
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
