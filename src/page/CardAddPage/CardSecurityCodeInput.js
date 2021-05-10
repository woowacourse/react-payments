import React from 'react';
import Input from '../../components/Input/Input';
import InputContainer from '../../components/InputContainer/InputContainer';
import Tooltip from '../../components/Tooltip/Tooltip';
import PropTypes from 'prop-types';

const CardSecurityCodeInput = (props) => {
  const { securityCode, handleSecurityCodeInput } = props;

  return (
    <InputContainer title={'보안코드(CVC/CVV)'} width={'w-1/3'}>
      <>
        <Input
          type={'password'}
          length={3}
          value={securityCode}
          className={'px-4 text-center'}
          onChange={handleSecurityCodeInput}
        />
        <Tooltip content={<img src="images/CVC.png" alt="카드 뒷면 서명란 끝의 세자리 숫자입니다." />} />
      </>
    </InputContainer>
  );
};

export default CardSecurityCodeInput;

CardSecurityCodeInput.propTypes = {
  securityCode: PropTypes.string.isRequired,
  handleSecurityCodeInput: PropTypes.func.isRequired,
};
