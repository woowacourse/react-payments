import PropTypes from 'prop-types';

const Layout = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      <div className="root">
        <div className="app">{children}</div>
      </div>
    </>
  );
};

Layout.propTypes = {
  /**
   * title of layout
   */
  title: PropTypes.string,
  /**
   * component of layout
   */
  children: PropTypes.element,
};

export default Layout;
