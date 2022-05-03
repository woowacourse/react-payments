import PropTypes from 'prop-types';
import * as styled from './index.styled';

const Header = ({ title }) => {
  return (
    <styled.Container>
      <styled.BackButton type="button">
        <styled.Arrow />
      </styled.BackButton>
      <styled.Title>{title}</styled.Title>
    </styled.Container>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
