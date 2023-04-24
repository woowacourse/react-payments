import styled from "styled-components";
import { UseInputProps } from "../../hooks/useInput";
import Input from "../common/Input";

interface ExpiracyInputProps {
  year: UseInputProps;
  month: UseInputProps;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #ecebf1;
  height: 45px;
  border-radius: 7px;
`;

const InputWrapper = styled.div`
  width: 40px;
`;

const Slash = styled.span`
  position: relative;
  left: 3px;
  margin: 0 5px;
  font-size: 18px;
  font-weight: 500;
  color: #737373;
`;
export default function ExpiracyInput({ year, month }: ExpiracyInputProps) {
  return (
    <Wrapper>
      <InputWrapper>
        <Input
          type="text"
          maxLength={2}
          id="expiracy"
          isNumber={true}
          pattern="^0[1-9]|1[0-2]$"
          required
          placeholder="MM"
          textAlign="center"
          {...month}
        />
      </InputWrapper>
      <Slash>/</Slash>
      <InputWrapper>
        <Input
          type="text"
          maxLength={2}
          isNumber={true}
          pattern="^2[3-8]$"
          required
          placeholder="YY"
          textAlign="center"
          {...year}
        />
      </InputWrapper>
    </Wrapper>
  );
}
