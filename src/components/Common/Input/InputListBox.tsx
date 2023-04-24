import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Input from './Input';

interface InputListBoxProps {
  inputInformation: React.ComponentPropsWithRef<typeof Input>[];
  bridgeLetter?: string;
  autoFocus?: boolean;
  regExp?: RegExp;
  getInputListValue: (value: string[]) => void;
  children?: React.ReactNode;
}

function InputListBox({
  inputInformation,
  bridgeLetter = '',
  autoFocus = true,
  regExp,
  getInputListValue,
  children,
}: InputListBoxProps) {
  const [value, setValue] = useState<string[]>(Array.from({ length: inputInformation.length }));
  const refs = useRef<HTMLInputElement[]>([]);
  const onChange = (currentIndex: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    if (regExp) {
      target.value = target.value.replace(regExp, '');
    }
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

  useEffect(() => {
    getInputListValue(value);
  }, [value, getInputListValue]);

  return (
    <StyledInputListBox>
      <div>
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
      </div>
      {children}
    </StyledInputListBox>
  );
}

const StyledInputListBox = styled.div`
  display: flex;
  align-items: center;
`;

export default InputListBox;
