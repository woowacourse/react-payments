import React from 'react';
import PropTypes from 'prop-types';
import * as Style from './style';

const Button = (props) => {
  const { text, formId } = props;

  return (
    <Style.Root type="submit" form={formId}>
      {text}
    </Style.Root>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  formId: PropTypes.string,
};

export default Button;
