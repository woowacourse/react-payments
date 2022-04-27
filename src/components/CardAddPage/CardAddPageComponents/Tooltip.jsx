import React from 'react';

function Tooltip(props) {
  return (
    <button type="button" className="tooltip">
      ?<span className="tooltiptext">카드 뒷면에 있는 3자리 숫자를 입력해주세요.</span>
    </button>
  );
}

export default Tooltip;
