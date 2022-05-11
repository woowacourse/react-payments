import React from 'react';
import PropTypes from 'prop-types';
const POSITION_CLASSNAME = {
  absolute: 'position-absolute',
  relative: 'position-relative',
  fixed: 'position-fixed',
};

function Position({ position, children, ...positionStyles }) {
  return (
    <div className={POSITION_CLASSNAME[position]} style={{ ...positionStyles }}>
      {children}
    </div>
  );
}

Position.propTypes = {
  position: PropTypes.string,
  children: PropTypes.node,
};

export default Position;
