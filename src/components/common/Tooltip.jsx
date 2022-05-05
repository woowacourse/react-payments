import PropTypes from 'prop-types';
import useHover from 'hooks/useHover';
import { ReactComponent as TooltipIcon } from 'assets/tooltip_icon.svg';
import { TOOLTIP_TYPES } from 'constants';

const Tooltip = ({ type }) => {
  const [isHover, handleMouseEnter, handleMouseLeave] = useHover(false);

  return (
    <div className="tooltip">
      <TooltipIcon onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      {isHover && (
        <div
          className="tooltip-content"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {TOOLTIP_TYPES[type]}
        </div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  type: PropTypes.string,
};

export default Tooltip;
