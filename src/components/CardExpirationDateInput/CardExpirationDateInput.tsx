import styled from "styled-components";
import { InputContainer, Input, Label, RequiredInputIcon } from "../common";
import { CardExpirationDate, CardExpirationDateKey } from "../../types";
import { isNumeric } from "../../validator/Validator";
import requiredInputIcon from "../../assets/requiredInputIcon.png";

type CardExpirationDateInputProps = {
  expirationDate: CardExpirationDate;
  onChange: (value: string, dateType: CardExpirationDateKey) => void;
};

const CardExpirationDateInput = ({ expirationDate, onChange }: CardExpirationDateInputProps) => {
  const { month, year } = expirationDate;

  const handleCardExpirationDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const dateType = e.target.name;

    if (!isNumeric(value)) return;
    if (!isCardExpirationDateKeyType(dateType)) return;

    onChange(value, dateType);
  };

  const isCardExpirationDateKeyType = (dateType: string): dateType is CardExpirationDateKey => {
    return dateType in expirationDate;
  };

  return (
    <Label>
      만료일
      <RequiredInputIcon src={requiredInputIcon} />
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
          autoComplete="cc-exp-month"
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
          autoComplete="cc-exp-year"
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
