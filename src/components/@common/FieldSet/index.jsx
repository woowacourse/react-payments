import { useRef } from 'react';
import PropTypes from 'prop-types';

import { getIndexFromSameTag, setFocusSameTagByIndex } from 'utils';

import { Container, InputTitle, InputContainer, ErrorMessage } from './styles';

function FieldSet({ title, errorMessage, inputWidth, autoFocusLength, children }) {
  const inputContainer = useRef();

  const handleTextFieldAutoFocus = ({ target }) => {
    const { value, tagName } = target;
    const textFieldLength = value.length;

    if (
      !autoFocusLength ||
      tagName !== 'INPUT' ||
      (textFieldLength > 0 && textFieldLength < autoFocusLength)
    ) {
      return;
    }

    const currentIndex = getIndexFromSameTag(inputContainer.current, target);
    const targetIndex =
      (value.length === 0 && currentIndex - 1) ||
      (value.length === autoFocusLength && currentIndex + 1) ||
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
  title: '',
  errorMessage: '',
  inputWidth: 100,
  autoFocusLength: 0,
};

FieldSet.propTypes = {
  title: PropTypes.string,
  errorMessage: PropTypes.string,
  inputWidth: PropTypes.number,
  autoFocusLength: PropTypes.number,
};

export default FieldSet;
