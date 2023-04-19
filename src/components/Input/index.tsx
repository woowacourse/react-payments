import {
  InputHTMLAttributes,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

export interface Focus {
  focus: () => void;
}

const Input = forwardRef<Focus, Props>(({ ...props }, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current?.focus();
        },
      };
    },
    [],
  );

  return <input {...props} ref={inputRef} />;
});

export default Input;
