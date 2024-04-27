import { useState, ChangeEvent } from "react";

const useSelect = (initValue: string = "") => {
  const [value, setValue] = useState(initValue);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;

    setValue(newValue);
  };

  return {
    value,
    onChange,
  };
};

export default useSelect;
