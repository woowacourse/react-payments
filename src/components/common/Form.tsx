import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

interface Props {
  children: React.ReactNode;
  onSubmit?: (e?: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({ children, onSubmit }: Props) {
  const formRef = useRef<HTMLFormElement>(null);

  const moveFocus = (curElement: HTMLInputElement, direction: number) => {
    const formElements = Array.from(formRef.current.elements) as any as HTMLInputElement[];
    const curElementIndex = formElements.indexOf(curElement);
    formElements[curElementIndex + direction]?.focus();
  };

  const handlePrevInputFocus = ({ target, key }): React.KeyboardEventHandler<HTMLInputElement> => {
    if (key !== 'Backspace') return;

    if (target.value.length === 0) {
      moveFocus(target, -1);
    }
  };

  const handleNextInputFocus = ({ target }): React.ChangeEventHandler<HTMLFormElement> => {
    if (!target.maxLength) return;

    if (target.value.length === target.maxLength) {
      moveFocus(target, +1);
    }
  };

  useEffect(() => {
    const formElements = Array.from(formRef.current.elements) as HTMLInputElement[];
    formElements[0].focus();
  }, []);

  return (
    <StyledForm
      ref={formRef}
      onSubmit={onSubmit}
      onKeyUp={handleNextInputFocus}
      onKeyDown={handlePrevInputFocus}
      autoComplete="off">
      {children}
    </StyledForm>
  );
}
