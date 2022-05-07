import { useCallback, useState } from 'react';

export const useVirtualKeyboard = () => {
  const [virtualKeyboardInfo, setVirtualKeyboardInfo] = useState({
    isShowVirtualKeyboard: false,
    inputElementKey: null,
    inputElementMaxLength: null,
  });

  const openVirtualKeyboard = useCallback(
    (inputElementKey, inputElementMaxLength) => {
      setVirtualKeyboardInfo({
        isShowVirtualKeyboard: true,
        inputElementKey,
        inputElementMaxLength,
      });
    },
    [setVirtualKeyboardInfo],
  );

  const closeVirtualKeyboard = useCallback(() => {
    setVirtualKeyboardInfo({
      isShowVirtualKeyboard: false,
      inputElementKey: null,
      inputElementMaxLength: null,
    });
  }, [setVirtualKeyboardInfo]);

  return [virtualKeyboardInfo, openVirtualKeyboard, closeVirtualKeyboard];
};
