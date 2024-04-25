import { useEffect } from 'react';

export default function useFormFieldFocus<T extends HTMLElement>(
  refs: Array<React.RefObject<T>>
) {
  const moveToNextInput = (index: number = 0) => {
    const [curInput, nextInput] = refs.slice(index, index + 2);

    curInput.current?.blur();

    if (nextInput) nextInput.current?.focus();
  };

  useEffect(() => {
    const firstInput = refs[0].current;
    if (firstInput) {
      firstInput.focus();
    }
  }, []);

  return { refs, moveToNextInput };
}
