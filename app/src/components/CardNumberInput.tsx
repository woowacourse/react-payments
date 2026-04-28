import styled from "@emotion/styled";

export function CardNumberInputContainer() {
  return (
    <fieldset>
      <legend>카드 번호</legend>
      <CardNumberInput
        type="number"
        minLength={1}
        maxLength={4}
        placeholder="1234"
      />
      <CardNumberInput
        type="number"
        minLength={1}
        maxLength={4}
        placeholder="1234"
      />
      <CardNumberInput
        type="number"
        minLength={1}
        maxLength={4}
        placeholder="1234"
      />
      <CardNumberInput
        type="number"
        minLength={1}
        maxLength={4}
        placeholder="1234"
      />
    </fieldset>
  );
}

const CardNumberInput = styled.input`
  border: solid 1px #acacac;
  border-radius: 2px;
  padding: 0.5rem;
  font-size: 11px;
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
