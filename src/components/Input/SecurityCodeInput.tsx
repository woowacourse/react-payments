import { ChangeEventHandler, useState } from 'react';
import Input from 'components/common/Input/Input';

function SecurityCodeInput() {
  const [securityCode, setSecurityCode] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    const isNumber = !isNaN(Number(value));

    if (!isNumber) {
      setSecurityCode(value.slice(0, -1));
      return;
    }
    setSecurityCode(value);
  };

  return <Input value={securityCode} type="password" maxLength={3} onChange={handleChange} />;
}

export default SecurityCodeInput;
