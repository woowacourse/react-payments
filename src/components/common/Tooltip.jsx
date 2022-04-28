import { useState } from 'react';
import { ReactComponent as TooltipIcon } from '../../assets/tooltip_icon.svg';
import { TOOLTIP_TYPES } from '../../constants';

const Tooltip = ({ type }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="tooltip">
      <TooltipIcon onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} />
      {isHover && (
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="tooltip-content"
        >
          {TOOLTIP_TYPES[type]}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
