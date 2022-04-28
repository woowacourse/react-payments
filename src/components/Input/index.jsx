import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Input({ labelTitle, inputSize = '', helpText, children }) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const onMouseOver = () => {
    setIsMouseOver(true);
  };

  const onMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <div className="input-container">
      <span className="input-title">{labelTitle}</span>
      <div className={`input-box ${inputSize}`}>
        {children}

        {helpText && (
          <div className="help-content" onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
            ?
          </div>
        )}

        {isMouseOver && <div className="help-content-text">{helpText}</div>}
      </div>
    </div>
  );
}

Input.propTypes = {
  labelTitle: PropTypes.string,
  inputSize: PropTypes.string,
  helpText: PropTypes.string,
  children: PropTypes.node,
};

export default Input;
