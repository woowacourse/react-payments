import PropTypes from 'prop-types';

import Container from './styles';

function Header({ onClickPreviousButton, children }) {
  return (
    <Container>
      {onClickPreviousButton && (
        <div className="previous-button" onClick={onClickPreviousButton}>
          &lt;
        </div>
      )}
      <div className="title">{children}</div>
    </Container>
  );
}

Header.defaultProps = {
  onClickPreviousButton: null,
};

Header.propTypes = {
  onClickPreviousButton: PropTypes.func,
};

export default Header;
