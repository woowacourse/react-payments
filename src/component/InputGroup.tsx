import styled from 'styled-components';
import React, {
  useRef,
  Children,
  isValidElement,
  cloneElement,
  ComponentPropsWithRef,
} from 'react';
import type { InputRef, InputProps } from './Input'; // Input 컴포넌트의 ref 타입 임포트
import Input from './Input';

interface InputGroupProps {
  label: string;
  children: React.ReactNode;
  errorMessages: string;
}

export const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Label = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: ${({ theme }) => theme.fontWeights.body};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  font-weight: ${({ theme }) => theme.fontWeights.caption};
`;

const ErrorMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const InputGroup = ({ label, children, errorMessages }: InputGroupProps) => {
  const inputRefs = useRef<InputRef[]>([]);

  const enhancedChildren = Children.map(children, (child, index) => {
    if (isValidElement<InputProps>(child)) {
      return cloneElement(child, {
        ref: (instance: InputRef | null) => {
          if (instance) {
            inputRefs.current[index] = instance;
          }
        },
        onComplete: () => {
          const nextIndex = index + 1;
          if (nextIndex < Children.count(children)) {
            setTimeout(() => {
              inputRefs.current[nextIndex]?.focus();
            }, 0);
          }
        },
      } as ComponentPropsWithRef<typeof Input>);
    }
    return child;
  });

  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer>{enhancedChildren}</InputContainer>
      <ErrorMessageContainer>
        <ErrorMessage>{errorMessages}</ErrorMessage>
      </ErrorMessageContainer>
    </Container>
  );
};

export default InputGroup;
