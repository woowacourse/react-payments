import styled from "@emotion/styled";

export function CardNumberInputContainer({ cardNumber, setCardNumber }) {
  const changeCardNumber = (e: any) => {
    const value = e.target.value;
    const id = e.target.id;
    const fourDigits = cardNumber[id];

    if (fourDigits.length < 4) {
      setCardNumber({ ...cardNumber, [id]: value });
    }
  };

  return (
    <CardNumberFieldset>
      <CardNumberLegend>카드 번호</CardNumberLegend>
      <CardNumberInput
        id="first-digits"
        type="number"
        minLength={1}
        maxLength={4}
        value={cardNumber["first-digits"]}
        onChange={changeCardNumber}
        placeholder="1234"
      />
      <CardNumberInput
        id="second-digits"
        type="number"
        minLength={1}
        maxLength={4}
        value={cardNumber["second-digits"]}
        onChange={changeCardNumber}
        placeholder="1234"
      />
      <CardNumberInput
        id="third-digits"
        type="number"
        minLength={1}
        maxLength={4}
        value={cardNumber["third-digits"]}
        onChange={changeCardNumber}
        placeholder="1234"
      />
      <CardNumberInput
        id="fourth-digits"
        type="number"
        minLength={1}
        maxLength={4}
        value={cardNumber["fourth-digits"]}
        onChange={changeCardNumber}
        placeholder="1234"
      />
    </CardNumberFieldset>
  );
}

const CardNumberFieldset = styled.fieldset`
  border: none;
  display: flex;
  gap: 0.625rem;
  padding: 0;
  margin: 0;
`;

const CardNumberLegend = styled.legend`
  font-size: 12px;
  margin: 8px 0;
`;

const CardNumberInput = styled.input`
  border: solid 1px #acacac;
  border-radius: 2px;
  padding: 0.5rem;
  font-size: 11px;
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
