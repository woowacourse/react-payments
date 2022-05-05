import { useState } from "react";

export default function useInput(initialValue, validator) {
  const [value, setValue] = useState(initialValue);

  const handleDate = (value, keyType, name) => {
    if (validator(value, name)) return;

    setValue((prevValue) => {
      return {
        ...prevValue,
        [keyType]: {
          ...prevValue[keyType],
          [name]: {
            ...prevValue[keyType][name],
            value,
          },
        },
      };
    });
  };

  const handleNumbers = (value, keyType, name) => {
    if (validator(value)) return;

    setValue((prevValue) => {
      return {
        ...prevValue,
        [keyType]: {
          ...prevValue[keyType],
          [name]: {
            ...prevValue[keyType][name],
            value,
          },
        },
      };
    });
  };

  const handleNameToUpperCase = (value, keyType) => {
    if (validator(value)) return;

    setValue((prevValue) => {
      return {
        ...prevValue,
        [keyType]: {
          ...prevValue[keyType],
          value: value.toUpperCase(),
        },
      };
    });
  };

  const onChange = (event, keyType) => {
    const {
      target: { value, name },
    } = event;

    if (keyType === "expireDateInfo") {
      handleDate(value, keyType, name);
      return;
    }

    if (keyType === "cardNumberInfo" || keyType === "passwordInfo") {
      handleNumbers(value, keyType, name);
      return;
    }

    if (keyType === "holderNameInfo") {
      handleNameToUpperCase(value, keyType, name);
      return;
    }

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

  return [value, onChange];
}
