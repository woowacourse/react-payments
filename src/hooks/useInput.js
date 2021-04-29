import { useState } from 'react';

export default (
  defaultValue,
  options = {
    upperCase: false,
  }
) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (event) => {
    let { value: newValue } = event.target;
    if (options.upperCase) {
      newValue = newValue.toUpperCase();
    }
    setValue(newValue);
  };

  return { value, onChange, setValue };
};
