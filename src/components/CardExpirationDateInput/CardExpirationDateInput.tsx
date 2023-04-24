import styled from "styled-components";
import { InputContainer, Input, Label } from "../common";
import { CardExpirationDate, CardExpirationDateKey } from "../../types";
import { isNumeric } from "../../validator/Validator";

type CardExpirationDateInputProps = {
  expirationDate: CardExpirationDate;
  setCardExpirationDate: (dateType: CardExpirationDateKey, value: string) => void;
};

const CardExpirationDateInput = ({ expirationDate, setCardExpirationDate }: CardExpirationDateInputProps) => {
  const { month, year } = expirationDate;

  const handleCardExpirationDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const dateType = e.target.name;

    if (!isNumeric(value)) return;
    if (!isCardExpirationDateKeyType(dateType)) return;

    setCardExpirationDate(dateType, value);
  };

  const isCardExpirationDateKeyType = (dateType: string): dateType is CardExpirationDateKey => {
    return dateType in expirationDate;
  };

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
          onChange={handleCardExpirationDate}
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
          onChange={handleCardExpirationDate}
        />
      </InputContainer>
    </Label>
  );
};

const Span = styled.span`
  color: #737373;
`;

export default CardExpirationDateInput;
