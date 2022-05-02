import React from 'react';

import { CVC_DESCRIPTION } from '../../constants';

function Tooltip() {
  return (
    <button type="button" className="tooltip">
      ?<span className="tooltiptext">{CVC_DESCRIPTION}</span>
    </button>
  );
}

export default Tooltip;
