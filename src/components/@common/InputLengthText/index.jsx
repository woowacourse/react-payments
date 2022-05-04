import PropTypes from 'prop-types';

import Container from './styles';

function InputLengthText({ maxLength, children }) {
  return (
    <Container inputLength={children} maxLength={maxLength.toString()}>
      {`${children} / ${maxLength.toString()}`}
    </Container>
  );
}

InputLengthText.defaultProps = {
  maxLength: 0,
};

InputLengthText.propTypes = {
  maxLength: PropTypes.number,
};

export default InputLengthText;
