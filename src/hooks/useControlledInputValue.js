import { useState } from "react";

const useControlledInputValue = (initialValue) => {
  const [controlledInputValue, setControlledInputValue] = useState(
    initialValue
  );

  const onControlledInputValueChange = (event) => {
    const { value } = event.target;

    setControlledInputValue(value);
  };

  return [controlledInputValue, onControlledInputValueChange];
};

export default useControlledInputValue;
