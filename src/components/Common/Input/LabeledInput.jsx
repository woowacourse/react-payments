import React from 'react';
import PropTypes from 'prop-types';
import HelpContent from '../HelpContent/HelpContent';

function LabeledInput({ labelTitle, inputSize = '', helpText, children }) {
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

LabeledInput.propTypes = {
  labelTitle: PropTypes.string,
  inputSize: PropTypes.string,
  helpText: PropTypes.string,
  children: PropTypes.node,
};

export default LabeledInput;
