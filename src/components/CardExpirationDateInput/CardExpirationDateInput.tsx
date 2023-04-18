import styled from "styled-components";
import { InputContainer, Input, Label } from "../common";

const CardExpirationDateInput = () => {
  return (
    <Label>
      만료일
      <InputContainer width="137px">
        <Input textAlign="center" width="40px" placeholder="MM" type="text" maxLength={2} required />
        <Span>/</Span>
        <Input textAlign="center" width="40px" placeholder="YY" type="text" maxLength={2} required />
      </InputContainer>
    </Label>
  );
};

const Span = styled.span`
  color: #737373;
`;

export default CardExpirationDateInput;
