import PropTypes from 'prop-types';
import { useState } from 'react';
import { memo, useEffect } from 'react';
import { COLOR } from '../../../constants/color';
import { SECURITY_CODE_INPUT } from '../../../constants/input';
import { TransparentInput } from '../../commons/input/TransparentInput';
import { QuestionDescription } from '../../commons/questionDescription/QuestionDescription';
import VirtualKeyboardModal from '../virtualKeyboardModal/VirtualKeyboardModal';
import Styled from './SecurityCodeInput.style';

const transparentInputStyles = {
  color: COLOR.MINT,
  fontSize: '24px',
  textAlign: 'center',
};

const isValidInput = securityCode => {
  return securityCode.length === SECURITY_CODE_INPUT.LENGTH && !isNaN(securityCode);
};

const SecurityCodeInput = ({ securityCode, setSecurityCode, isValidSecurityCode, setValidSecurityCode }) => {
  const [isModalOpened, setModalOpen] = useState(false);

  useEffect(() => {
    setValidSecurityCode(isValidInput(securityCode));
  }, [setValidSecurityCode, securityCode]);

  return (
    <>
      <div>
        <Styled.InputLabelContainer>보안 코드(CVC/CVV) {isValidSecurityCode && '✔️'}</Styled.InputLabelContainer>
        <Styled.Container>
          <Styled.InputContainer isValidInput={isValidSecurityCode} onClick={() => setModalOpen(true)}>
            <TransparentInput
              type="password"
              minLength={SECURITY_CODE_INPUT.LENGTH}
              maxLength={SECURITY_CODE_INPUT.LENGTH}
              value={securityCode}
              onChange={({ target }) => setSecurityCode(target.value)}
              styles={transparentInputStyles}
              disabled
            />
          </Styled.InputContainer>
          <QuestionDescription />
        </Styled.Container>
      </div>
      {isModalOpened && (
        <VirtualKeyboardModal
          closeModal={() => setModalOpen(false)}
          currentInput="securityCode"
          state={securityCode}
          setState={setSecurityCode}
        />
      )}
    </>
  );
};

SecurityCodeInput.propTypes = {
  securityCode: PropTypes.string.isRequired,
  setSecurityCode: PropTypes.func.isRequired,
  isValidSecurityCode: PropTypes.bool.isRequired,
  setValidSecurityCode: PropTypes.func.isRequired,
};

export default memo(SecurityCodeInput);
