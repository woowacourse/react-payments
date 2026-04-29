import styled from "@emotion/styled";

export function CardExpiryDateInputContainer() {
  return (
    <CardExpiryDateFieldset>
      <CardExpiryDateLegend>유효기간</CardExpiryDateLegend>
      <CardExpiryDateInput
        type="number"
        maxLength={2}
        minLength={1}
        placeholder="MM"
      />
      <CardExpiryDateInput
        type="number"
        maxLength={2}
        minLength={1}
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
