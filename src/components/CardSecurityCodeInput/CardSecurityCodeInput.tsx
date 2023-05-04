import { useState } from 'react';
import CardInfoInput from '../CardInfoInput/CardInfoInput';
import HelpButton from '../HelpButton/HelpButton';
import Input from '../Input/Input';
import { NUMBER_REGEX } from '../../constant/regex';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useCardStore } from '../../hook/useCardState';

const CardSecurityCodeInput = () => {
  const { get, setSecurityCode } = useCardStore();
  const securityCode = get().securityCode;
  const [error, setError] = useState('');

  const updateSecurityCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentSecurityCode = e.target.value;

    if (NUMBER_REGEX.test(currentSecurityCode)) {
      setError('0부터 9까지 숫자만 입력이 가능합니다.');
      return;
    }
    setSecurityCode(currentSecurityCode);
    setError('');
  };

  return (
    <section>
      <CardInfoInput title="보안 코드(CVC/CVV)">
        <Input type="password" width="30%" onChange={updateSecurityCode} maxLength={3} value={securityCode} required />
        <HelpButton message="카드 뒷면 3자리 숫자" />
      </CardInfoInput>
      <ErrorMessage>{error}</ErrorMessage>
    </section>
  );
};

export default CardSecurityCodeInput;
