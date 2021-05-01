import PropTypes from 'prop-types';
import BackIcon from '../BackIcon/BackIcon';
import Styled from './Header.styles';

const Header = ({ text, hasBackButton, onClickBackButton }) => (
  <Styled.Container>
    {hasBackButton && (
      <Styled.BackButton onClick={onClickBackButton}>
        <BackIcon />
      </Styled.BackButton>
    )}
    <Styled.Title>{text}</Styled.Title>
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
