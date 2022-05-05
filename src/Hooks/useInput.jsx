import { useState } from "react";

export default function useInput(initialValue, validator) {
  const [value, setValue] = useState(initialValue);

  const handleDate = (value, keyType) => {
    if (validator(value, keyType)) return;

    setValue((prevValue) => {
      return {
        ...prevValue,
        [keyType]: {
          ...prevValue[keyType],
          value,
        },
      };
    });
  };

  const handleNumbers = (value, keyType) => {
    if (validator(value)) return;

    setValue((prevValue) => {
      return {
        ...prevValue,
        [keyType]: {
          ...prevValue[keyType],
          value,
        },
      };
    });
  };

  const handleNameToUpperCase = (value) => {
    if (validator(value)) return;

    setValue((prevValue) => {
      return {
        ...prevValue,
        value: value.toUpperCase(),
      };
    });
  };

  const onChange = (event, keyType) => {
    const {
      target: { value, name },
    } = event;

    if (name === "expireDate") {
      handleDate(value, keyType);
      return;
    }

    if (name === "cardNumber" || name === "password") {
      handleNumbers(value, keyType);
      return;
    }

    if (name === "holderName") {
      handleNameToUpperCase(value);
      return;
    }

    if (validator(value)) return;
    setValue((prevValue) => {
      return {
        ...prevValue,
        value,
      };
    });
  };

  return [value, onChange];
}
