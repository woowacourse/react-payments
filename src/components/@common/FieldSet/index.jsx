import PropTypes from 'prop-types';
import { setFocusNextElement } from 'utils';

import { Container, InputTitle, InputContainer, ErrorMessage } from './styles';

function FieldSet({
  title,
  errorMessage,
  inputWidth,
  autoFocusSetting = { enabled: false, length: 0 },
  children,
}) {
  const { enabled: isAutoFocusEnabled, length: autoFocusLength } = autoFocusSetting;

  const onChangeTextField = ({ target }) => {
    const { value, tagName } = target;

    if (isAutoFocusEnabled === false || tagName !== 'INPUT' || value.length < autoFocusLength) {
      return;
    }

    setFocusNextElement(target);
  };

  return (
    <Container onChange={onChangeTextField} isError={!!errorMessage}>
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
