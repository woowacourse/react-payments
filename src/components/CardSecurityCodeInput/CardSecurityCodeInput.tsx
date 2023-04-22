import { useState } from 'react';
import CardInfoInput from '../CardInfoInput/CardInfoInput';
import HelpButton from '../HelpButton/HelpButton';
import Input from '../Input/Input';
import { NUMBER_REGEX } from '../../constant/regex';

const CardSecurityCodeInput = () => {
  const [securityCode, setSecurityCode] = useState('');

  const updateSecurityCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentSecurityCode = e.target.value;

    if (NUMBER_REGEX.test(currentSecurityCode)) return alert('숫자만 입력이 가능합니다!');
    setSecurityCode(currentSecurityCode);
  };

  return (
    <CardInfoInput title="보안 코드(CVC/CVV)">
      <Input width="30%" onChange={updateSecurityCode} maxLength={3} value={securityCode} />
      <HelpButton message="카드 뒷면 3자리 숫자" />
    </CardInfoInput>
  );
};

export default CardSecurityCodeInput;
