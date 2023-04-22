import styled from "styled-components";
import { InputContainer, Input, Label } from "../common";
import { CardExpirationDate } from "../../types";

type CardExpirationDateInputProps = {
  expirationDate: CardExpirationDate;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CardExpirationDateInput = ({ expirationDate, onChange }: CardExpirationDateInputProps) => {
  const { month, year } = expirationDate;

  return (
    <Label>
      만료일
      <InputContainer width="137px">
        <Input
          value={month}
          name="month"
          inputMode="numeric"
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
          value={year}
          name="year"
          inputMode="numeric"
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
