import React from 'react';
import PropTypes from 'prop-types';

function LineInput({ children }) {
  return (
    <div className="input-container">
      <div className="line-input-box">{children}</div>
    </div>
  );
}

LineInput.propTypes = {
  children: PropTypes.node,
};

export default LineInput;
