import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="root">
        <div className="app">{children}</div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  /**
   * component of layout
   */
  children: PropTypes.element,
};

export default Layout;
