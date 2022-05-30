import { useMemo } from 'react';

import { PASS, FAIL, GUIDE_MESSAGE } from 'constants/index';

interface MessageProps {
  name: string;
  isFilled: boolean;
  align: string;
}

const Message = ({ name, isFilled, align }: MessageProps) => {
  const type = useMemo(() => (isFilled ? PASS : FAIL), [isFilled]);

  return (
    <div className={(isFilled ? 'fullFilled ' : 'unFullFilled ') + align}>
      {GUIDE_MESSAGE[name][type]}
    </div>
  );
};

Message.defaultProps = {
  align: 'text-left',
};

export default Message;
