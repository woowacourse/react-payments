import { useRef } from "react";

const useInputRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusNextInput = () => {
    const form = inputRef.current?.form;
    if (!form) return;

    const arr = Array.from(form);
    const idx = arr.indexOf(inputRef.current);

    const nextInput = arr.find(
      (ele, cur) => cur > idx && ele.tagName === "INPUT"
    );

    nextInput && (nextInput as HTMLInputElement).focus();
  };

  return { inputRef, focusNextInput };
};

export default useInputRef;
