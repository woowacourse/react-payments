import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RegisterInputWrapper from '../../shared/RegisterInputWrapper';
import VirtualKeyboard, { KeyboardPortal } from '../../units/VirtualKeyboard';
import helpSvg from '../../../assets/cvc-help.svg';
import CVCGuideImg from '../../../assets/cvc_guide.png';
import * as Style from './style';

const SecureCodeInput = (props) => {
  const { type, label, width, secureCode, setSecureCode } = props;
  const [isCVCGuideOpen, setCVCGuideOpen] = useState(false);
  const [isVirtualKeyboardOpened, setVirtualKeyboardOpened] = useState(false);

  const isOverLength = (value) => value.length > 3;

  const handleChangeNumbers = (event) => {
    const currentValue = event.target.value;
    if (isNaN(currentValue)) return;
    if (isOverLength(currentValue)) {
      setVirtualKeyboardOpened(false);
      return;
    }

    setSecureCode(currentValue);
  };

  useEffect(() => {
    if (secureCode.length === 3) {
      setVirtualKeyboardOpened(false);
    }
  }, [secureCode]);

  return (
    <>
      <RegisterInputWrapper type={type} label={label} width={width}>
        <Style.InputWrapper>
          <Style.PasswordInput
            type="password"
            aria-label="secure-code-input"
            value={secureCode}
            onChange={handleChangeNumbers}
            onFocus={() => setVirtualKeyboardOpened(true)}
            required
          />
          <Style.HelpMark
            src={helpSvg}
            onMouseOver={() => setCVCGuideOpen(true)}
            onMouseLeave={() => setCVCGuideOpen(false)}
          />
          {isCVCGuideOpen && <Style.CVCImg src={CVCGuideImg} />}
        </Style.InputWrapper>
        <KeyboardPortal>
          {isVirtualKeyboardOpened && <VirtualKeyboard inputNumbers={secureCode} setInputNumbers={setSecureCode} />}
        </KeyboardPortal>
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
