import { useState } from "react";

export default function useInput(initialValue, validator) {
  const [value, setValue] = useState(initialValue);

  const handleDate = (value, name) => {
    if (validator(value, name)) return;

    setValue((prevValue) => {
      return {
        ...prevValue,
        [name]: {
          ...prevValue[name],
          value,
        },
      };
    });
  };

  const handleNumbers = (value, name) => {
    if (validator(value)) return;

    setValue((prevValue) => {
      return {
        ...prevValue,
        [name]: {
          ...prevValue[name],
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

    if (keyType === "expireDateInfo") {
      handleDate(value, name);
      return;
    }

    if (keyType === "cardNumberInfo" || keyType === "passwordInfo") {
      handleNumbers(value, name);
      return;
    }

    if (keyType === "holderNameInfo") {
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
