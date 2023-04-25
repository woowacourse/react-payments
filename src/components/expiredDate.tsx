import { useContext } from "react";
import styled from "styled-components";
import { LABEL, MAX_LENGTH, PLACEHOLDER } from "../constants/inputInfo";
import { DateContext, RefContext } from "../contexts/cardInfo";
import { Input } from "./common/Input";
import { InputBox } from "./common/InputBox";
import { InputGroup } from "./common/inputGroup";
import { InputLabel } from "./common/inputLabel";

export function ExpiredDate() {
  const { month, year, handleChange } = useContext(DateContext);
  const inputRef = useContext(RefContext);

  return (
    <InputBox inputState={{ month, year, handleChange }}>
      <Wrapper>
        <InputLabel text={LABEL.DATE} />
        <InputGroup>
          <Input
            name="month"
            maxLength={MAX_LENGTH.DATE}
            placeholder={PLACEHOLDER.MONTH}
            inputRef={inputRef}
            asChild>
            <DateInput />
          </Input>
          /
          <Input
            name="year"
            maxLength={MAX_LENGTH.DATE}
            placeholder={PLACEHOLDER.YEAR}
            inputRef={inputRef}
            asChild>
            <DateInput />
          </Input>
        </InputGroup>
      </Wrapper>
    </InputBox>
  );
}

const Wrapper = styled.section`
  width: 13.7rem;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.5rem;

  ${({ theme }) => theme.fonts.body}

  background: ${({ theme }) => theme.colors.gray200};
  border-radius: 7px;
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
