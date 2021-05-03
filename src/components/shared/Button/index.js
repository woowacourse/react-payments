import React from 'react';
import PropTypes from 'prop-types';
import * as Style from './style';

const Button = (props) => {
  const { type, text, formId } = props;

  return (
    <Style.Root type={type} form={formId}>
      {text}
    </Style.Root>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  formId: PropTypes.string,
};

export default Button;
