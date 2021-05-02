import PropTypes from 'prop-types';
import Styled from './Header.style';

export const Header = ({ children, styles, ...props }) => {
  return (
    <Styled.Header {...props} styles={styles}>
      {children}
    </Styled.Header>
  );
};

Header.propTypes = {
  styles: PropTypes.object,
};
