import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RegisterInputWrapper from '../../shared/RegisterInputWrapper';
import helpSvg from '../../../assets/cvc-help.svg';
import CVCGuideImg from '../../../assets/cvc_guide.png';
import * as Style from './style';

const SecureCodeInput = (props) => {
  const { type, label, width, secureCode, setSecureCode } = props;
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
      <RegisterInputWrapper type={type} label={label} width={width}>
        <Style.InputWrapper>
          <Style.PasswordInput
            type="password"
            aria-label="secure-code-input"
            value={secureCode}
            onChange={handleChangeNumbers}
            required
          />
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

SecureCodeInput.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  secureCode: PropTypes.string.isRequired,
  setSecureCode: PropTypes.func.isRequired,
};

export default SecureCodeInput;
