import PropTypes from 'prop-types';

function Header({ title, onClickPrevious }) {
  return (
    <h2 className="page-title" onClickPrevious={onClickPrevious}>
      {`${onClickPrevious && '<'} ${title}`}
    </h2>
  );
}

Header.defaultProps = {
  onClickPrevious: null,
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onClickPrevious: PropTypes.oneOfType([PropTypes.func, [null]]),
};

export default Header;
