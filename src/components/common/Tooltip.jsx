import { useState } from 'react';
import { ReactComponent as TooltipIcon } from '../../assets/tooltip_icon.svg';

const TOOLTIP_TYPES = {
  PRIVACY_CODE: `보안 코드는 온라인으로 카드를 사용할 경우 신용카드 보안을 위한 추가 수단을 제공합니다.`,
};

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
