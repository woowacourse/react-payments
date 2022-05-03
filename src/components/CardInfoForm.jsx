import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default function CardInfoForm({ children }) {
  const formRef = useRef('');

  const moveFocus = (curElement, direction) => {
    const formElements = Array.from(formRef.current.elements);
    const curElementIndex = formElements.indexOf(curElement);
    formElements[curElementIndex + direction]?.focus();
  };

  const handlePrevInputFocus = ({ target, key }) => {
    if (key !== 'Backspace') return;

    if (target.value.length === 0) {
      moveFocus(target, -1);
    }
  };

  const handleNextInputFocus = ({ target }) => {
    if (!target.maxLength) return;

    if (target.value.length === target.maxLength) {
      moveFocus(target, +1);
    }
  };

  useEffect(() => {
    formRef.current.elements[0].focus();
  }, []);

  return (
    <StyledForm ref={formRef} onChange={handleNextInputFocus} onKeyDown={handlePrevInputFocus}>
      {children}
    </StyledForm>
  );
}
