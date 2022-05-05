import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { PASS, FAIL, GUIDE_MESSAGE } from 'constants';

const Message = ({ name, isFilled, align = 'text-left' }) => {
  const type = useMemo(() => (isFilled ? PASS : FAIL), [isFilled]);

  return (
    <div className={(isFilled ? 'fullFilled ' : 'unFullFilled ') + align}>
      {GUIDE_MESSAGE[name][type]}
    </div>
  );
};

Message.propTypes = {
  name: PropTypes.string,
  isFilled: PropTypes.bool,
  align: PropTypes.string,
};

export default Message;
