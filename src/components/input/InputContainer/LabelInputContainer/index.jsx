import React from 'react';
import PropTypes from 'prop-types';
import Position from '../../../commons/Position';
import { useMouseHover } from '../../../../hooks/useMouseHover';

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

        {isMouseOver && (
          <Position position="absolute" right="0" bottom="10px">
            <div className="help-content-text">{helpText}</div>
          </Position>
        )}
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
