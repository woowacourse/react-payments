import { useState } from "react";

const useVirtualKeyboardInput = (initialValue, maxLength) => {
  const [virtualKeyboardInput, setVirtualKeyboardInput] = useState(
    initialValue
  );

  const insertInputChar = (value) => {
    if (virtualKeyboardInput.length === maxLength) {
      return false;
    }

    setVirtualKeyboardInput((prevValue) => prevValue + value);

    return true;
  };

  const deleteInputChar = () => {
    setVirtualKeyboardInput((prevValue) => prevValue.replace(/\d$/, ""));
  };

  return [virtualKeyboardInput, insertInputChar, deleteInputChar];
};

export default useVirtualKeyboardInput;
