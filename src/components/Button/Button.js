import PropTypes from 'prop-types';
import Styled from './Button.styles';

const Button = ({ children }) => <Styled.Container>{children}</Styled.Container>;

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
