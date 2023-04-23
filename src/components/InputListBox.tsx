/* eslint-disable react/jsx-props-no-spreading */
import { useRef, useState } from 'react';
import Input from './Input';

interface InputListBoxProps {
  inputInformation: React.ComponentPropsWithRef<typeof Input>[];
  bridgeLetter?: string;
  autoFocus?: boolean;
}

function InputListBox({ inputInformation, bridgeLetter, autoFocus = true }: InputListBoxProps) {
  const [value, setValue] = useState<string[]>(Array.from({ length: inputInformation.length }));
  const refs = useRef<HTMLInputElement[]>([]);
  const onChange = (currentIndex: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setValue(prev => prev.map((prevValue, index) => (index === currentIndex ? target.value : prevValue)));
    if (autoFocus) {
      if (target.value.length === 0) {
        refs.current[currentIndex - 1]?.focus();
      }
      if (target.value.length === target.maxLength) {
        refs.current[currentIndex + 1]?.focus();
      }
    }
  };

  return (
    <>
      {inputInformation
        .map<React.ReactNode>((info, index) => (
          <Input
            {...info}
            onChange={onChange(index)}
            ref={(element: HTMLInputElement) => {
              refs.current[index] = element;
            }}
          />
        ))
        .reduce((prev, curr) => [prev, bridgeLetter, curr])}
    </>
  );
}

export default InputListBox;
