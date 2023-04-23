import { useState } from 'react';
import CardInfoInput from '../CardInfoInput/CardInfoInput';
import HelpButton from '../../common/HelpButton/HelpButton';
import Input from '../../common/Input/Input';

const CardSecurityCodeInput = () => {
  const [securityCode, setSecurityCode] = useState('');

  const updateSecurityCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentSecurityCode = e.target.value;

    if (/[^0-9-]/.test(currentSecurityCode)) return alert('숫자만 입력이 가능합니다!');
    setSecurityCode(currentSecurityCode);
  };

  return (
    <CardInfoInput title="보안 코드(CVC/CVV)">
      <Input width="30%" onChange={updateSecurityCode} maxLength={3} value={securityCode} />
      <HelpButton message="보안 코드(CVC/CVV)는 신용카드나 체크카드의 뒷면에 있는 3자리의 번호입니다." />
    </CardInfoInput>
  );
};

export default CardSecurityCodeInput;
