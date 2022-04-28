import React from 'react';
import PropTypes from 'prop-types';
import { useMouseHover } from '../../hooks/useMouseHover';

function Input({ labelTitle, inputSize = '', helpText, children }) {
  const [isMouseOver, onMouseOver, onMouseLeave] = useMouseHover();

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
