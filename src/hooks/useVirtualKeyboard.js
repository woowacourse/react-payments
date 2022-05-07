import { useCallback, useRef, useState } from 'react';

export const useVirtualKeyboard = () => {
  const [currentFocusInputInfo, setCurrentFocusInputInfo] = useState({
    element: null,
    elementKey: null,
  });

  const [isShowVirtualKeyboard, setIsShowVirtualKeyboard] = useState(false);

  const openVirtualKeyboard = useCallback(
    (inputElementKey, inputElement) => {
      setIsShowVirtualKeyboard(true);
      setCurrentFocusInputInfo({ element: inputElement, elementKey: inputElementKey });
    },
    [setIsShowVirtualKeyboard, setCurrentFocusInputInfo],
  );

  const closeVirtualKeyboard = useCallback(() => {
    setIsShowVirtualKeyboard(false);

    setCurrentFocusInputInfo({ element: null, elementKey: null });
  }, [setIsShowVirtualKeyboard, setCurrentFocusInputInfo]);

  return [currentFocusInputInfo, isShowVirtualKeyboard, openVirtualKeyboard, closeVirtualKeyboard];
};
