import PropTypes from 'prop-types';
import * as Styled from './index.styled';

const Button = ({ type = 'button', children, ...rest }) => {
  return type === 'link' ? (
    <Styled.LinkButton {...rest}>{children}</Styled.LinkButton>
  ) : (
    <Styled.GeneralButton {...rest}>{children}</Styled.GeneralButton>
  );
};

const ButtonType = ['link', 'button'];

Button.propTypes = {
  type: PropTypes.oneOf(ButtonType),
  children: PropTypes.string,
};

export default Button;
