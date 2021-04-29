import PropTypes from 'prop-types';
import Styled from './Button.style';

export const Button = ({ children, styles, ...props }) => {
  return (
    <Styled.Button {...props} styles={styles}>
      {children}
    </Styled.Button>
  );
};

Button.propTypes = {
  styles: PropTypes.object,
};
