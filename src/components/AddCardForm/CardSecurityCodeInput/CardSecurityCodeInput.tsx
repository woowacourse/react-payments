import { useState } from 'react';
import useValidator from '../../../hooks/useValidator';
import { checkValidCVC } from '../validators';
import CardInfoInput from '../LabeledInput/LabeledInput';
import HelpButton from '../../common/HelpButton/HelpButton';
import Input from '../../common/Input/Input';

const CardSecurityCodeInput = () => {
  const { value, isValid, errorMessage, setValueWithValidation } = useValidator(checkValidCVC);

  const updateSecurityCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const securityCode = e.target.value;

    setValueWithValidation(securityCode);
  };

  return (
    <CardInfoInput title="보안 코드(CVC/CVV)" errorMessage={errorMessage}>
      <Input width="30%" onChange={updateSecurityCode} maxLength={3} value={value} required={true} type="password" />
      <HelpButton message="보안 코드(CVC/CVV)는 신용카드나 체크카드의 뒷면에 있는 3자리의 번호입니다." />
    </CardInfoInput>
  );
};

export default CardSecurityCodeInput;
