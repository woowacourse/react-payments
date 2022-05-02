import { useState } from "react";
import { INPUT_KEY_TABLE } from "../../constants";

export default function useInput(initialValue, validator, inputRef) {
  const [value, setValue] = useState(initialValue);

  const handleDate = (value, order) => {
    const parsedValue =
      value.startsWith("0") && value.length !== 1 ? value.slice(1) : value;

    if (validator(parsedValue, order)) return;

    setValue((prevValue) => {
      const newValue = [...prevValue];
      newValue[order] =
        parsedValue.length === 1 && Number(parsedValue) !== 0
          ? `0${parsedValue}`
          : parsedValue;

      return newValue;
    });
  };

  const handleNumbers = (value, order, type, name, typeMaxLength) => {
    const targetIndex = INPUT_KEY_TABLE[type].findIndex(
      (targetNumber) => targetNumber === name
    );

    if (validator(value)) return;

    setValue((prevValue) => {
      const newValue = [...prevValue];
      newValue[order] = value;
      return newValue;
    });

    if (value.length === typeMaxLength) {
      inputRef.current[type][targetIndex + 1]?.focus();
    }
  };

  const handleUpperCaseName = (value) => {
    if (validator(value)) return;

    setValue(value.toUpperCase());
  };

  const onChange = (event, type, order, typeMaxLength) => {
    const { target } = event;
    const { value, name } = target;

    if (type === "expireDate") {
      handleDate(value, order);
      return;
    }

    if (type === "cardNumbers" || type === "passwordNumbers") {
      handleNumbers(value, order, type, name, typeMaxLength);
      return;
    }

    if (type === "holderName") {
      handleUpperCaseName(value);
      return;
    }

    if (validator(value)) return;
    setValue(value);
  };

  return [value, onChange];
}
