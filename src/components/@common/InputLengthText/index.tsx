import * as React from 'react';
import Container from './styles';

interface PropTypes {
  maxLength?: number;
  children: React.ReactNode;
}

function InputLengthText({ maxLength, children }: PropTypes) {
  return (
    <Container inputLength={children} maxLength={maxLength.toString()}>
      {`${children} / ${maxLength.toString()}`}
    </Container>
  );
}

InputLengthText.defaultProps = {
  maxLength: 0,
};

export default InputLengthText;
