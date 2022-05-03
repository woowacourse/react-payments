import { useMemo } from 'react';
import { PASS, FAIL } from '../../constants';

const MessageList = {
  company: { [PASS]: '카드사가 입력되었습니다.', [FAIL]: '카드사를 입력해주세요.' },
  cardNumber: { [PASS]: '카드 번호가 입력되었습니다.', [FAIL]: '카드 번호를 입력해주세요.' },
  expiryDate: { [PASS]: '만료일이 입력되었습니다.', [FAIL]: '만료일을 입력해주세요.' },
  privacyCode: { [PASS]: '보안코드가 입력되었습니다.', [FAIL]: '보안코드를 입력해주세요.' },
  password: { [PASS]: '카드 비밀번호가 입력되었습니다.', [FAIL]: '카드 비밀번호를 입력해주세요.' },
};

const Message = ({ name, isFilled, align = 'text-left' }) => {
  const type = useMemo(() => (isFilled ? PASS : FAIL), [isFilled]);

  return (
    <div className={(isFilled ? 'fullFilled ' : 'unFullFilled ') + align}>
      {MessageList[name][type]}
    </div>
  );
};

export default Message;
