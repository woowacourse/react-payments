import React, { useState } from 'react';
import PropTypes from 'prop-types';

function HelpContent({ helpText }) {
  if (!helpText) {
    return;
  }
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleTouch = () => {
    if (isMouseOver) {
      setIsMouseOver(false);
    } else {
      setIsMouseOver(true);
    }
  };

  return (
    <>
      <div className="help-content" onClick={handleTouch}>
        ?
      </div>
      {isMouseOver && <div className="help-content-text">{helpText}</div>}
    </>
  );
}

export default HelpContent;

HelpContent.propTypes = {
  helpText: PropTypes.string,
};
