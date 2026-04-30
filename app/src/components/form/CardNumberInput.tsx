import { useState } from "react";
import { ErrorMessage } from "./ErrorMessage";
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

  const validateIsNetworkBrand = (value: string, id: string): boolean => {
    if (value !== "" && !["4", "5"].includes(value[0])) {
      setError({
        ...isError,
        [id]: { state: true },
        message:
          "유효한 카드 번호가 아닙니다. 카드 번호는 4 또는 5로 시작해야합니다.",
      });
      return false;
    }
    if (
      value.length === 2 &&
      value[0] === "5" &&
      !["1", "2", "3", "4", "5"].includes(value[1])
    ) {
      setError({
        ...isError,
        [id]: { state: true },
        message: "마스터카드 번호는 51 ~ 55 사이 숫자로 시작해야 합니다.",
      });
      return false;
    }
    setError({ ...isError, [id]: { state: false }, message: "" });
    return true;
  };

  const validateIsNumber = (value: string, id: string): boolean => {
    if (Number.isNaN(Number(value))) {
      setError({
        ...isError,
        [id]: { state: true },
        message: "카드 번호는 숫자만 입력 가능합니다.",
      });
      return false;
    }
    setError({ ...isError, [id]: { state: false }, message: "" });
    return true;
  };

  const changeCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const id = e.target.id;
    if (!validateIsNumber(value, id)) return;
    setCardNumber({ ...cardNumber, [id]: value });
  };

  const changeFirstDigitsCardNumber = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    const id = e.target.id;
    if (!validateIsNumber(value, id)) return;
    if (!validateIsNetworkBrand(value, id)) return;
    handleNetworkBrand(value);
    setCardNumber({ ...cardNumber, [id]: value });
  };

  const validateCardNumberLength = (
    value: string,
    id: string,
    limit: number,
  ): boolean => {
    if (![0, limit].includes(value.length)) {
      setError({
        ...isError,
        [id]: { state: true },
        message: "카드 번호 각 항목은 4자리여야 합니다.",
      });
      return false;
    }
    setError({ ...isError, [id]: { state: false }, message: "" });
    return true;
  };

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

  const handleBlurCardNumber = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const id = e.target.id;
    if (!validateCardNumberLength(value, id, e.target.maxLength)) return;
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
