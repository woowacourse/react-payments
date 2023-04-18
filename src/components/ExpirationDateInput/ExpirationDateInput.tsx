import styled from "styled-components";
import { InputContainer, Input, Label } from "../common";

const ExpirationDateInput = () => {
  return (
    <Label>
      만료일
      <InputContainer width="137px">
        <Input placeholder="MM" width="40px" type="text" maxLength={2} required />
        <Span>/</Span>
        <Input placeholder="YY" width="40px" type="text" maxLength={2} required />
      </InputContainer>
    </Label>
  );
};

const Span = styled.span`
  color: #737373;
`;

export default ExpirationDateInput;
