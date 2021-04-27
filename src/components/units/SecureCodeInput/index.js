import React, { useState } from 'react';
import RegisterInputWrapper from '../../shared/RegisterInputWrapper';
import helpSvg from '../../../assets/cvc-help.svg';
import CVCGuideImg from '../../../assets/cvc_guide.png';
import * as Style from './style';

const SecureCodeInput = (props) => {
  const { type, label, secureCode, setSecureCode } = props;
  const [isCVCGuideOpen, setCVCGuideOpen] = useState(false);

  const isOverLength = (value) => value.length > 3;

  const handleChangeNumbers = (event) => {
    const currentValue = event.target.value;
    if (isNaN(currentValue)) return;
    if (isOverLength(currentValue)) return;

    setSecureCode(currentValue);
  };

  return (
    <>
      <RegisterInputWrapper type={type} label={label}>
        <Style.InputWrapper>
          <Style.PasswordInput type="password" value={secureCode} onChange={handleChangeNumbers} />
          <Style.HelpMark
            src={helpSvg}
            onMouseOver={() => setCVCGuideOpen(true)}
            onMouseLeave={() => setCVCGuideOpen(false)}
          />
          {isCVCGuideOpen && <Style.CVCImg src={CVCGuideImg} />}
        </Style.InputWrapper>
      </RegisterInputWrapper>
    </>
  );
};

export default SecureCodeInput;
