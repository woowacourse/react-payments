import { useRef } from 'react';

const useInputAutoFocus = ({ maxLength }) => {
  const inputRefList = useRef([]);

  const autoFocusForward = ({ target }) => {
    if (target.value.length < maxLength) {
      return;
    }

    const currentInputElementPos = inputRefList.current.indexOf(target);
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
