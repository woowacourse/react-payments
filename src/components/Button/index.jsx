import PropTypes from 'prop-types';
import * as styled from './index.styled';

const Button = ({ type = 'button', children, ...rest }) => {
  return type === 'link' ? (
    <styled.LinkButton {...rest}>{children}</styled.LinkButton>
  ) : (
    <styled.GeneralButton {...rest}>{children}</styled.GeneralButton>
  );
};

const ButtonType = ['link', 'button'];

Button.propTypes = {
  type: PropTypes.oneOf(ButtonType),
  children: PropTypes.string,
};

export default Button;
