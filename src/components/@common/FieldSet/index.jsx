import PropTypes from 'prop-types';

import { Container, InputTitle, InputContainer, ErrorMessage } from './styles';

function FieldSet({ title, errorMessage, inputWidth, children }) {
  return (
    <Container isError={!!errorMessage}>
      <InputTitle>{title}</InputTitle>
      <InputContainer style={{ width: `${inputWidth}%` }}>{children}</InputContainer>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Container>
  );
}

FieldSet.defaultProps = {
  title: '',
  errorMessage: '',
  inputWidth: 100,
};

FieldSet.propTypes = {
  title: PropTypes.string,
  errorMessage: PropTypes.string,
  inputWidth: PropTypes.number,
};

export default FieldSet;
