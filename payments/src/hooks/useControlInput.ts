import { useRef } from "react";

const useControlInput = ({ maxLength }: { maxLength: number }) => {
  const itemRef = useRef<HTMLInputElement[]>([]);

  const controlInput = (target: HTMLInputElement) => {
    if (target.value.length >= maxLength) {
      autoFocusForward(target);
    }
  };

  const autoFocusForward = (target: HTMLInputElement) => {
    const currentIndex = itemRef.current.indexOf(target);
    itemRef.current[
      Math.min(currentIndex + 1, itemRef.current.length - 1)
    ].focus();
  };

  const autoFocusBackward = (target: HTMLInputElement) => {
    const currentIndex = itemRef.current.indexOf(target);
    itemRef.current[Math.max(currentIndex - 1, 0)].focus();
  };

  return {
    itemRef,
    controlInput,
    autoFocusBackward,
  };
};
export default useControlInput;
