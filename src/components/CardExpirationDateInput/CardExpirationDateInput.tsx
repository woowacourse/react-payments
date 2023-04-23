import styled from "styled-components";
import { InputContainer, Input, Label } from "../common";
import { CardExpirationDate } from "../../types";

type CardExpirationDateInputProps = {
  expirationDate: CardExpirationDate;
  error: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CardExpirationDateInput = ({ expirationDate, error, onChange, onBlur }: CardExpirationDateInputProps) => {
  const { month, year } = expirationDate;

  return (
    <Label>
      만료일
      <InputContainer width="137px" border={error ? "3px solid #f09c9c" : "none"}>
        <Input
          value={month}
          name="month"
          inputMode="numeric"
          textAlign="center"
          width="40px"
          placeholder="MM"
          type="text"
          autoComplete="cc-exp-month"
          minLength={2}
          maxLength={2}
          required
          onChange={onChange}
          onBlur={onBlur}
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
          autoComplete="cc-exp-year"
          minLength={2}
          maxLength={2}
          required
          onChange={onChange}
        />
      </InputContainer>
      {error && <ErrorMessage>날짜 입력 형식이 잘못되었습니다.</ErrorMessage>}
    </Label>
  );
};

export const ErrorMessage = styled.div`
  border-radius: 4px;

  padding: 10px;
  margin-top: 4px;

  background-color: #f09c9c;

  font-size: 10px;
  color: rgb(33, 33, 33);
`;

const Span = styled.span`
  color: #737373;
`;

export default CardExpirationDateInput;
