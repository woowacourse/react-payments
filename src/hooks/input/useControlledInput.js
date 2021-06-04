import { useState } from "react";

//TODO: 이거 필요한 훅인가??
const useControlledInput = (initialValue) => {
  const [controlledInput, setControlledInput] = useState(initialValue);

  const onControlledInputValueChange = (event) => {
    const { value } = event.target;

    setControlledInput(value);
  };

  return { value: controlledInput, onChange: onControlledInputValueChange };
};

export default useControlledInput;
