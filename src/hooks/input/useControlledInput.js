import { useState } from "react";

const useControlledInput = (initialValue) => {
  const [controlledInput, setControlledInput] = useState(initialValue);

  const onControlledInputValueChange = (event) => {
    const { value } = event.target;

    setControlledInput(value);
  };

  return { value: controlledInput, onChange: onControlledInputValueChange };
};

export default useControlledInput;
