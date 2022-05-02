import PropTypes from 'prop-types';

const Header = ({ title, children }) => {
  return (
    <div className="header-container">
      {children}
      <h2 className="page-title">{title}</h2>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Header;
