import { useCallback, useRef } from "react";

const useControllInput = ({ maxLength, isNumber }) => {
  const itemRef = useRef([]);

  // const controllInput = useCallback((target) => {
  //   const limitInputLength = (target) => {
  //     target.value = target.value.substring(0, maxLength);
  //   };

  //   const autoFocus = (target) => {
  //     const currentIndex = itemRef.current.indexOf(target);
  //     itemRef.current[
  //       Math.min(currentIndex + 1, itemRef.current.length - 1)
  //     ].focus();
  //   };
  //   if (target.value.length >= maxLength) {
  //     limitInputLength(target);
  //     autoFocus(target);
  //   }

  //   if (target.value.length === 0) {
  //     //keydown backspace
  //     autoFocusBack(target);
  //   }
  // }, []);

  const controllInput = (target) => {
    blockCharacter(target);
    if (target.value.length >= maxLength) {
      limitInputLength(target);
      autoFocusForward(target);
    }
  };

  const blockCharacter = (target) => {
    target.value = target.value.replace(/[^\d]/g, "").replace(".", "");
  };

  const limitInputLength = (target) => {
    target.value = target.value.substring(0, maxLength);
  };

  const autoFocusForward = (target) => {
    const currentIndex = itemRef.current.indexOf(target);
    itemRef.current[
      Math.min(currentIndex + 1, itemRef.current.length - 1)
    ].focus();
  };

  const autoFocusBackward = (target) => {
    const currentIndex = itemRef.current.indexOf(target);
    itemRef.current[Math.max(currentIndex - 1, 0)].focus();
  };

  return { itemRef, controllInput, autoFocusBackward };
};
export default useControllInput;
