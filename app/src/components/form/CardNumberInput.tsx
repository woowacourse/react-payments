import { useState } from "react";
import { ErrorMessage } from "./ErrorMessage";
import { Validator } from "../../validators/CardValidator";
import styled from "@emotion/styled";

export function CardNumberInputContainer({
  cardNumber,
  setCardNumber,
  setNetworkBrand,
}) {
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
    message: "",
  });

  const handleNetworkBrand = (value: string) => {
    if (value.startsWith("4")) {
      setNetworkBrand("visa");
      return;
    }
    if (value.startsWith("5") && ["1", "2", "3", "4", "5"].includes(value[1])) {
      setNetworkBrand("master");
      return;
    }
    setNetworkBrand("");
  };

  const changeCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const id = e.target.id;
    try {
      Validator.isNumber(value);
      setError({ ...isError, [id]: { state: false }, message: "" });
      setCardNumber({ ...cardNumber, [id]: value });
    } catch (err) {
      setError({ ...isError, [id]: { state: true }, message: err.message });
    }
  };

  const changeFirstDigitsCardNumber = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    const id = e.target.id;
    try {
      Validator.isNumber(value);
      Validator.isValidNetworkBrand(value);
      setError({ ...isError, [id]: { state: false }, message: "" });
      handleNetworkBrand(value);
      setCardNumber({ ...cardNumber, [id]: value });
    } catch (err) {
      setError({ ...isError, [id]: { state: true }, message: err.message });
    }
  };

  const handleBlurCardNumber = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const id = e.target.id;
    try {
      Validator.isValidCardNumberLength(value, e.target.maxLength);
      setError({ ...isError, [id]: { state: false }, message: "" });
    } catch (err) {
      setError({ ...isError, [id]: { state: true }, message: err.message });
    }
  };

  return (
    <>
      <CardNumberFieldset>
        <CardNumberLegend>카드 번호</CardNumberLegend>
        <CardNumberInput
          id="first-digits"
          type="text"
          maxLength={4}
          inputMode="numeric"
          value={cardNumber["first-digits"]}
          onChange={changeFirstDigitsCardNumber}
          onBlur={handleBlurCardNumber}
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
          onBlur={handleBlurCardNumber}
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
          onBlur={handleBlurCardNumber}
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
          onBlur={handleBlurCardNumber}
          placeholder="1234"
          isError={isError["fourth-digits"].state}
        />
      </CardNumberFieldset>
      <ErrorMessage message={isError["message"]} />
    </>
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
  flex: 4 1;
  border: solid 1px ${(props) => (props.isError ? "#FF3D3D" : "#acacac")};
  border-radius: 2px;
  padding: 0.5rem;
  font-size: 11px;
  height: 32px;
  width: 100%;
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
