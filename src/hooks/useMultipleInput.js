import { useState } from 'react';

export default (defaultValue, { nameSpliter = '-', refs, maxLengthPerInput }) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (event) => {
    const [, index] = event.target.name.split(nameSpliter);

    setValue((state) => {
      const newState = [...state];
      newState[index] = event.target.value;

      return newState;
    });

    if (!event.target.value) {
      refs[Number(index) - 1]?.focus();
      return;
    }

    if (event.target.value.length === maxLengthPerInput) {
      refs[Number(index) + 1]?.focus();
    }
  };

  return { value, onChange, setValue };
};
