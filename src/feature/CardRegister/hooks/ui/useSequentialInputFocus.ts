import {useRef} from 'react';
import type {ChangeEvent, ChangeEventHandler, KeyboardEventHandler} from 'react';

type FocusMoveInputProps = {
  value: string;
  maxLength: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export const useSequentialInputFocus = (inputProps: FocusMoveInputProps[]) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const inputPropsWithFocusMove = inputProps.map((props, index) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      // 기존 onChange 실행
      props.onChange(event);

      // 자동 focus onChange 실행
      const value = event.currentTarget.value;
      const isFull = value.length === props.maxLength;
      const hasNextInput = index < inputProps.length - 1;

      if (isFull && hasNextInput) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    // keyDown 감지하여 연속해서 지울 때 이전 ref로 이동하도록 설정
    const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
      const isEmpty = props.value === '';
      const hasPreviousInput = index > 0;

      if (event.key === 'Backspace' && isEmpty && hasPreviousInput) {
        inputRefs.current[index - 1]?.focus();
      }
    };

    return {
      ...props,
      ref: (element: HTMLInputElement | null) => {
        inputRefs.current[index] = element;
      },
      onChange: handleChange,
      onKeyDown: handleKeyDown,
    };
  });

  return inputPropsWithFocusMove;
};
