import styled from "styled-components";
import { InputContainer, Input, Label } from "../common";

type CardExpirationDateInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CardExpirationDateInput = ({ onChange }: CardExpirationDateInputProps) => {
  return (
    <Label>
      만료일
      <InputContainer width="137px">
        <Input
          name="month"
          textAlign="center"
          width="40px"
          placeholder="MM"
          type="text"
          minLength={2}
          maxLength={2}
          required
          onChange={onChange}
        />
        <Span>/</Span>
        <Input
          name="year"
          textAlign="center"
          width="40px"
          placeholder="YY"
          type="text"
          minLength={2}
          maxLength={2}
          required
          onChange={onChange}
        />
      </InputContainer>
    </Label>
  );
};

const Span = styled.span`
  color: #737373;
`;

export default CardExpirationDateInput;
