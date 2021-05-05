import PropTypes from 'prop-types';
import Styled from './Button.styles';

const Button = ({ children, type, onClick }) => (
  <Styled.Container onClick={onClick} type={type}>
    {children}
  </Styled.Container>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  type: 'submit',
};

export default Button;
