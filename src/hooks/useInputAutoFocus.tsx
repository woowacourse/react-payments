import React, { useRef } from 'react';

interface UseInputAutoFocusProps {
  maxLength: number;
}

const useInputAutoFocus = ({ maxLength }: UseInputAutoFocusProps) => {
  const inputRefList = useRef<any>([]);

  const autoFocusForward = (e: any) => {
    if (e.target.value.length < maxLength) {
      return;
    }

    const currentInputElementPos = inputRefList.current.indexOf(e.target);
    const nextInputElementPos = Math.min(
      currentInputElementPos + 1,
      inputRefList.current.length - 1,
    );
    inputRefList.current[nextInputElementPos].focus();
  };

  return {
    inputRefList,
    autoFocusForward,
  };
};
export default useInputAutoFocus;
