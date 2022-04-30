import React from 'react';
import PropTypes from 'prop-types';
import { useMouseHover } from '../../hooks/useMouseHover';

function LabelInputContainer({ labelTitle, inputSize = '', helpText, htmlFor, children }) {
  const [isMouseOver, onMouseOver, onMouseLeave] = useMouseHover();

  return (
    <div className="input-container">
      <label className="input-title" htmlFor={htmlFor}>
        {labelTitle}
      </label>
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

LabelInputContainer.propTypes = {
  labelTitle: PropTypes.string,
  inputSize: PropTypes.string,
  helpText: PropTypes.string,
  children: PropTypes.node,
  htmlFor: PropTypes.string,
};

export default LabelInputContainer;
