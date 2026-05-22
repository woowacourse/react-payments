import { useRef } from "react";

const useInputFocusGroup = (inputCount: number) => {
  const inputFocusRefs = useRef<Array<HTMLInputElement | null>>(
    Array.from({ length: inputCount }, () => null),
  );

  const registerFocusRef = (
    index: number,
    element: HTMLInputElement | null,
  ) => {
    inputFocusRefs.current[index] = element;
  };

  const focusNext = (index: number) => {
    // 길이 검증은 외부에서 시키자
    // 만약 길이 검증하는 부분이 훅 안으로 들어오면, 이 훅을 사용하는 곳에서 언제 포커스가 자동으로 이동하는지 모를 것임!
    inputFocusRefs.current[index + 1]?.focus();
  };

  const focusPrevious = (index: number) => {
    inputFocusRefs.current[index - 1]?.focus();
  };

  return { registerFocusRef, focusNext, focusPrevious };
};

export default useInputFocusGroup;
