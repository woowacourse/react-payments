import * as React from 'react';
import { useRef, RefObject } from 'react';

import { getIndexFromSameTag, setFocusSameTagByIndex } from 'utils';
import { Container, InputTitle, InputContainer, ErrorMessage } from './styles';

interface PropTypes {
  title: string;
  errorMessage?: string;
  inputWidth?: number;
  children: React.ReactNode;
}

function FieldSet({ title, errorMessage, inputWidth, children }: PropTypes) {
  const inputContainer: RefObject<HTMLDivElement> = useRef();

  const handleTextFieldAutoFocus = ({ target }) => {
    const { value, tagName, maxLength }: HTMLInputElement = target;
    const textFieldLength = value.length;

    if (!maxLength || tagName !== 'INPUT' || (textFieldLength > 0 && textFieldLength < maxLength)) {
      return;
    }

    const currentIndex: number = getIndexFromSameTag(inputContainer.current, target);
    const targetIndex: number =
      (value.length === 0 && currentIndex - 1) ||
      (value.length === maxLength && currentIndex + 1) ||
      0;

    setFocusSameTagByIndex(target, targetIndex);
  };

  return (
    <Container isError={!!errorMessage}>
      <InputTitle>{title}</InputTitle>
      <InputContainer
        ref={inputContainer}
        onChange={handleTextFieldAutoFocus}
        style={{ width: `${inputWidth}%` }}
      >
        {children}
      </InputContainer>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Container>
  );
}

FieldSet.defaultProps = {
  errorMessage: '',
  inputWidth: 100,
};

export default FieldSet;
