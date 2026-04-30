import { useState } from "react";
import styled from "@emotion/styled";

export function CardNumberInputContainer({ cardNumber, setCardNumber }) {
  const [isError, setError] = useState({
    "first-digits": {
      state: false,
    },
    "second-digits": {
      state: false,
    },
    "third-digits": {
      state: false,
    },
    "fourth-digits": {
      state: false,
    },
  });

  const changeCardNumber = (e: any) => {
    const value = e.target.value;
    const id = e.target.id;
    if (isNaN(value)) {
      setError({ ...isError, [id]: { state: true } });
      return;
    } else {
      setError({ ...isError, [id]: { state: false } });
    }
    setCardNumber({ ...cardNumber, [id]: value });
  };

  return (
    <CardNumberFieldset>
      <CardNumberLegend>카드 번호</CardNumberLegend>
      <CardNumberInput
        id="first-digits"
        type="text"
        maxLength={4}
        inputMode="numeric"
        value={cardNumber["first-digits"]}
        onChange={changeCardNumber}
        placeholder="1234"
        isError={isError["first-digits"].state}
      />
      <CardNumberInput
        id="second-digits"
        type="text"
        maxLength={4}
        inputMode="numeric"
        value={cardNumber["second-digits"]}
        onChange={changeCardNumber}
        placeholder="1234"
        isError={isError["second-digits"].state}
      />
      <CardNumberInput
        id="third-digits"
        type="text"
        maxLength={4}
        inputMode="numeric"
        value={cardNumber["third-digits"]}
        onChange={changeCardNumber}
        placeholder="1234"
        isError={isError["third-digits"].state}
      />
      <CardNumberInput
        id="fourth-digits"
        type="text"
        maxLength={4}
        inputMode="numeric"
        value={cardNumber["fourth-digits"]}
        onChange={changeCardNumber}
        placeholder="1234"
        isError={isError["fourth-digits"].state}
      />
    </CardNumberFieldset>
  );
}

type ErrorFlag = {
  isError?: boolean;
};

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

const CardNumberInput = styled.input<ErrorFlag>`
  border: solid 1px ${(props) => (props.isError ? "#FF3D3D" : "#acacac")};
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
