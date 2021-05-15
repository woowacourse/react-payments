import PropTypes from 'prop-types';
import Styled from './Header.styles';

const BackIcon = (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.30426 1L1.36476 8.78658L9.15134 15.7261" stroke="#525252" strokeWidth="1.5" />
  </svg>
);

const Header = ({ text, hasBackButton, onClickBackButton }) => (
  <Styled.Container>
    {hasBackButton && <Styled.BackButton onClick={onClickBackButton}>{BackIcon}</Styled.BackButton>}
    <Styled.Title hasBackButton={hasBackButton}>{text}</Styled.Title>
  </Styled.Container>
);

Header.propTypes = {
  text: PropTypes.string,
  hasBackButton: PropTypes.bool,
  onClickBackButton: PropTypes.func,
};

Header.defaultProps = {
  text: '',
  hasBackButton: false,
  onClickBackButton: null,
};

export default Header;
