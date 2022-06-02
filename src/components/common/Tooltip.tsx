import useHover from 'hooks/useHover';
import { ReactComponent as TooltipIcon } from 'assets/tooltip_icon.svg';
import { TOOLTIP_TYPES } from 'constants/index';

type ToolTipType = 'PRIVACY_CODE';

interface TooltipProps {
  type: ToolTipType;
}

const Tooltip = ({ type }: TooltipProps) => {
  const { isHover, handleMouseEnter, handleMouseLeave } = useHover(false);

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

export default Tooltip;
