import React from 'react';
import PropTypes from 'prop-types';
import HelpContent from '../HelpContent';

function Input({ labelTitle, inputSize = '', helpText, children }) {
  return (
    <div className="input-container">
      <span className="input-title">{labelTitle}</span>
      <div className={`input-box ${inputSize}`}>
        {children}
        <HelpContent helpText={helpText} />
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
