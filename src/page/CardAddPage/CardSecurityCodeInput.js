import React, { useContext } from 'react';
import Input from '../../components/Input/Input';
import InputContainer from '../../components/InputContainer/InputContainer';
import Tooltip from '../../components/Tooltip/Tooltip';
import { PaymentsContext } from '../../contexts/PaymentsContextProvider';

const CardSecurityCodeInput = () => {
  const { securityCode } = useContext(PaymentsContext);

  return (
    <InputContainer title={'보안코드(CVC/CVV)'} width={'w-1/3'}>
      <>
        <Input
          type={'password'}
          length={3}
          value={securityCode.value}
          className={'px-4 text-center'}
          onChange={securityCode.handleChange}
        />
        <Tooltip content={<img src="images/CVC.png" alt="카드 뒷면 서명란 끝의 세자리 숫자입니다." />} />
      </>
    </InputContainer>
  );
};

export default CardSecurityCodeInput;
