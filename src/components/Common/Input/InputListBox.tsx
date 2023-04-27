/* eslint-disable react/no-array-index-key */
import { useRef } from 'react';
import styled from 'styled-components';
import Input from '.';

interface InputListBoxProps {
  inputInformation: React.ComponentPropsWithRef<typeof Input>[];
  bridgeLetter?: string;
  autoFocus?: boolean;
  regExp?: RegExp;
  getInputListValue: (value: React.SetStateAction<string[]>) => void;
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
  const refs = useRef<HTMLInputElement[]>([]);
  const onChange = (currentIndex: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    if (regExp) {
      target.value = target.value.replace(regExp, '');
    }
    getInputListValue(prev => prev.map((prevValue, index) => (index === currentIndex ? target.value : prevValue)));

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
    <StyledInputListBox>
      <div>
        {inputInformation
          .map<React.ReactNode>((info, index) => (
            <Input
              {...info}
              key={index}
              onChange={onChange(index)}
              ref={(element: HTMLInputElement) => {
                refs.current[index] = element;
              }}
            />
          ))
          .reduce((prev, current) => [prev, bridgeLetter, current])}
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
