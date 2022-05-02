import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div className="root">
      <div className="app">{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Layout;
