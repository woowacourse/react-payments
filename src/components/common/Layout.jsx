import PropTypes from 'prop-types';
import { memo } from 'react';

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

export default memo(Layout);
