import { useState, ChangeEvent, useRef } from "react";

const useSelect = (initValue: string = "") => {
  const [value, setValue] = useState(initValue);
  const ref = useRef<HTMLSelectElement>(null);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;

    setValue(newValue);
  };

  return {
    value,
    ref,
    onChange,
  };
};

export default useSelect;
