import { useRef } from "react";

interface Props {
  maxLength?: number;
}

function useAutoFocus({ maxLength }: Props) {
  const refs = useRef<HTMLInputElement[]>([]);

  const nextInputFocus = (index = 0) => {
    if (index === refs.current.length - 1) return;
    if (refs.current[index]?.value.length === maxLength) {
      nextFocus(refs.current, index);
    }
  };

  const neighborhoodFocus = (
    formInputs: HTMLInputElement[],
    target: HTMLInputElement,
    key: string,
  ) => {
    const curIndex = formInputs.findIndex((ele) => ele === target) ?? 0;
    if (key === "Enter") {
      nextFocus(formInputs, curIndex);
    }

    if (key === "Backspace" && target.value.length === 0) {
      previousFocus(formInputs, curIndex);
    }
  };

  const nextFocus = (formInputs: HTMLInputElement[], curIndex: number) => {
    if (curIndex + 1 === formInputs.length) {
      return;
    }

    formInputs[curIndex + 1].focus();
  };

  const previousFocus = (formInputs: HTMLInputElement[], curIndex: number) => {
    if (curIndex === 0) {
      formInputs[curIndex].focus();
      return;
    }

    formInputs[curIndex - 1].focus();
  };

  return {
    refs,
    nextInputFocus,
    neighborhoodFocus,
  };
}

export default useAutoFocus;
