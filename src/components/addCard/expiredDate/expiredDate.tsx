import { useContext, useState } from "react";
import styled from "styled-components";
import {
  LABEL,
  TEXT_LENGTH,
  PLACEHOLDER,
  ERROR_MESSAGE,
} from "../../../constants/inputInfo";
import { DateContext, RefContext } from "../../../contexts/cardInfo";
import { Date } from "../../../type/input";
import { validation } from "../../../validation/input";
import { Input } from "../../@common/input/Input";
import { InputBox } from "../../@common/input/InputBox";
import { InputGroup } from "../../@common/input/inputGroup";
import { InputLabel } from "../../@common/input/inputLabel";

export function ExpiredDate() {
  const { month, year, handleChange } = useContext(DateContext);
  const inputRef = useContext(RefContext);
  const [error, setError] = useState<boolean>(false);

  function checkIsCorrenctYear(e: React.FocusEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    if (target.value === "") {
      setError(false);
      return;
    }
    if (!validation.isCorrectYear(target.value)) {
      setError(true);
      return;
    }
    setError(false);
  }

  return (
    <InputBox<Date> inputState={{ value: { month, year }, handleChange }}>
      <Wrapper>
        <InputLabel text={LABEL.DATE} />
        <InputGroup>
          <Input
            name="month"
            maxLength={2}
            minLength={TEXT_LENGTH.MONTH}
            placeholder={PLACEHOLDER.MONTH}
            inputRef={inputRef}
            asChild>
            <DateInput />
          </Input>
          /
          <Input
            name="year"
            maxLength={TEXT_LENGTH.YEAR}
            minLength={TEXT_LENGTH.YEAR}
            placeholder={PLACEHOLDER.YEAR}
            inputRef={inputRef}
            onBlur={checkIsCorrenctYear}
            asChild>
            <DateInput />
          </Input>
        </InputGroup>
        {error && <ErrorMessage>{ERROR_MESSAGE.YEAR}</ErrorMessage>}
      </Wrapper>
    </InputBox>
  );
}

const Wrapper = styled.section`
  width: 13.7rem;
`;

const DateInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 4.5rem;

  padding: 0 1rem;

  background: ${({ theme }) => theme.colors.gray200};
  border-radius: 0.7rem;

  text-align: center;
  outline: none;
`;

const ErrorMessage = styled.div`
  ${({ theme }) => theme.fonts.label}
  color: ${({ theme }) => theme.colors.error};
`;
