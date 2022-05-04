import { useCallback, useEffect, useState } from "react";

const useKeyboardOn = (ready) => {
  const [keyboardOn, setKeyboardOn] = useState(false);

  const openKeyboard = () => {
    setKeyboardOn(true);
  };

  const closeKeyboard = useCallback(() => {
    setKeyboardOn(false);
  }, []);

  useEffect(() => {
    ready && closeKeyboard();
  }, [closeKeyboard, ready]);

  const onKeyDown = (e) => {
    e.preventDefault();
  };

  return { keyboardOn, openKeyboard, closeKeyboard, onKeyDown };
};

export default useKeyboardOn;
