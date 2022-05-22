import React, { useCallback, useEffect, useState } from "react";

const useKeyboardOn = (ready: boolean) => {
  const [keyboardOn, setKeyboardOn] = useState<boolean>(false);

  const openKeyboard = () => {
    setKeyboardOn(true);
  };

  const closeKeyboard = useCallback(() => {
    setKeyboardOn(false);
  }, []);

  useEffect(() => {
    ready && closeKeyboard();
  }, [closeKeyboard, ready]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    e.preventDefault();
  };

  return { keyboardOn, openKeyboard, closeKeyboard, onKeyDown };
};

export default useKeyboardOn;
