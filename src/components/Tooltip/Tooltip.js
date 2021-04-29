import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Tooltip = (props) => {
  const { innerText = '?', content } = props;
  const [isShowTooltip, setIsShowTooltip] = useState(false);

  const handleToggleTooltip = () => {
    setIsShowTooltip(!isShowTooltip);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center justify-center ml-2 w-6 h-6 text-gray-400 text-lg rounded-full focus:outline-none ring-gray-400 ring-1"
        onClick={handleToggleTooltip}
      >
        {innerText}
      </button>
      {isShowTooltip && (
        <div className="absolute left-7 top-4 w-24 bg-gray-100 rounded-2xl rounded-tl-none ring-gray-400 ring-1">
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
Tooltip.propTypes = {
  innerText: PropTypes.string,
  content: PropTypes.element.isRequired,
};
