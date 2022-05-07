import PropTypes from 'prop-types';

function Header({ className, children }) {
  return <h1 className={`page-title ${className}`}>{children}</h1>;
}

Header.defaultProps = {
  className: '',
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
