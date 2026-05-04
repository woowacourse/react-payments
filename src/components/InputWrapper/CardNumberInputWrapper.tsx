import { useState } from "react";
import { isLengthMatch } from "../../utils/isLengthMatch";
import Input from "../Input/Input";
import InputGroup from "./InputGroup";

type CardNumbers = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};
interface Props {
  validator: (
    value: CardNumbers,
  ) => { message: string; key: "first" | "second" | "third" | "fourth" } | null;
  setCardNumber: (value: CardNumbers) => void;
  value: CardNumbers;
}

export default function CardNumberInputWrapper({
  validator,
  setCardNumber,
  value,
}: Props) {
  const [inputErrors, setInputErrors] = useState<{
    first: string | null;
    second: string | null;
    third: string | null;
    fourth: string | null;
  }>({
    first: null,
    second: null,
    third: null,
    fourth: null,
  });

  const setError =
    (key: "first" | "second" | "third" | "fourth") =>
    (message: string | null) => {
      setInputErrors((prev) => ({ ...prev, [key]: message }));
    };

  return (
    <InputGroup
      errorMessage={
        Object.values(inputErrors).find((err) => err !== null) ?? null
      }
    >
      <Input
        value={value.first}
        setValue={(newValue) => setCardNumber({ ...value, first: newValue })}
        placeholder="1234"
        isValid={(value: string) => isLengthMatch(4, value)}
        maxLength={4}
        onError={setError("first")}
        onBlur={() => {
          const result = validator(value);
          if (result && result.key === "first")
            setError("first")(result.message);
        }}
        style={{ width: "71px" }}
      />

      <Input
        value={value.second}
        setValue={(newValue) => setCardNumber({ ...value, second: newValue })}
        placeholder="1234"
        isValid={(value: string) => isLengthMatch(4, value)}
        maxLength={4}
        onError={setError("second")}
        onBlur={() => {
          const result = validator(value);
          if (result && result.key === "second")
            setError("second")(result.message);
        }}
        style={{ width: "71px" }}
      />

      <Input
        value={value.third}
        setValue={(newValue) => setCardNumber({ ...value, third: newValue })}
        placeholder="1234"
        isValid={(value: string) => isLengthMatch(4, value)}
        maxLength={4}
        onError={setError("third")}
        onBlur={() => {
          const result = validator(value);
          if (result && result.key === "third")
            setError("third")(result.message);
        }}
        style={{ width: "71px" }}
      />

      <Input
        value={value.fourth}
        setValue={(newValue) => setCardNumber({ ...value, fourth: newValue })}
        placeholder="1234"
        isValid={(value: string) => isLengthMatch(4, value)}
        maxLength={4}
        onError={setError("fourth")}
        onBlur={() => {
          const result = validator(value);
          if (result && result.key === "fourth")
            setError("fourth")(result.message);
        }}
        style={{ width: "71px" }}
      />
    </InputGroup>
  );
}
