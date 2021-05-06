import { useState } from "react";

const useVirtualKeyboardInput = ({
  initialValue,
  maxLength,
  onInputFullfilled,
}) => {
  const [virtualKeyboardInput, setVirtualKeyboardInput] = useState(
    initialValue
  );

  const insertInputChar = (value) => {
    setVirtualKeyboardInput((prevValue) => {
      const newValue = prevValue + value;

      if (newValue.length > maxLength) {
        return prevValue;
      }

      if (newValue.length === maxLength) {
        onInputFullfilled(prevValue);
      }

      return newValue;
    });

    return true;
  };

  const deleteInputChar = () => {
    setVirtualKeyboardInput((prevValue) => prevValue.replace(/\d$/, ""));
  };

  return [virtualKeyboardInput, insertInputChar, deleteInputChar];
};

export default useVirtualKeyboardInput;
