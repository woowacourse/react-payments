import styled from "@emotion/styled";

export function CardExpiryDateInputContainer({
  cardExpiryDate,
  setCardExpiryDate,
}) {
  const changeCardExpiryDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const id = e.target.id;
    setCardExpiryDate({ ...cardExpiryDate, [id]: value });
  };

  return (
    <CardExpiryDateFieldset>
      <CardExpiryDateLegend>유효기간</CardExpiryDateLegend>
      <CardExpiryDateInput
        type="text"
        inputMode="numeric"
        id="expiry-month"
        onChange={changeCardExpiryDate}
        maxLength={2}
        value={cardExpiryDate["expiry-month"]}
        placeholder="MM"
      />
      <CardExpiryDateInput
        type="text"
        inputMode="numeric"
        id="expiry-year"
        onChange={changeCardExpiryDate}
        maxLength={2}
        value={cardExpiryDate["expiry-year"]}
        placeholder="YY"
      />
    </CardExpiryDateFieldset>
  );
}

const CardExpiryDateFieldset = styled.fieldset`
  border: none;
  display: flex;
  gap: 0.625rem;
  padding: 0;
  margin: 0;
`;

const CardExpiryDateLegend = styled.legend`
  font-size: 12px;
  margin: 8px 0;
`;

const CardExpiryDateInput = styled.input`
  border: solid 1px #acacac;
  border-radius: 2px;
  padding: 0.5rem;
  font-size: 11px;
  width: 100%;
  height: 32px;
  -moz-appearance: textfield;
  &::placeholder {
    color: #acacac;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
