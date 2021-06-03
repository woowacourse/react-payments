import { useState } from "react";

const useVirtualKeyboardInput = ({
  initialValue,
  maxLength,
  onInputFullfilled,
}) => {
  const [currentInput, setCurrentInput] = useState(initialValue);

  const insertInputChar = (value) => {
    setCurrentInput((prevValue) => {
      const newValue = prevValue + value;

      if (newValue.length > maxLength) {
        return prevValue;
      }

      if (newValue.length === maxLength) {
        onInputFullfilled(prevValue);
      }

      return newValue;
    });
  };

  const deleteInputChar = () => {
    setCurrentInput((prevValue) => prevValue.replace(/\d$/, ""));
  };

  return { currentInput, insertInputChar, deleteInputChar };
};

export default useVirtualKeyboardInput;
