import { useState } from "react";

const useKeyboardOn = () => {
  const [keyboardOn, setKeyboardOn] = useState(false);

  const onFocusIn = () => {
    setKeyboardOn(true);
  };

  const onClickCloseButton = () => {
    setKeyboardOn(false);
  };

  const onKeyDown = (e) => {
    e.preventDefault();
  };

  return [keyboardOn, onFocusIn, onClickCloseButton, onKeyDown];
};

export default useKeyboardOn;
