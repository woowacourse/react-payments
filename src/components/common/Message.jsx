import { useMemo } from 'react';
import { PASS, FAIL, GUIDE_MESSAGE } from 'constants';

const Message = ({ name, isFilled, align = 'text-left' }) => {
  const type = useMemo(() => (isFilled ? PASS : FAIL), [isFilled]);

  return (
    <div className={(isFilled ? 'fullFilled ' : 'unFullFilled ') + align}>
      {GUIDE_MESSAGE[name][type]}
    </div>
  );
};

export default Message;
