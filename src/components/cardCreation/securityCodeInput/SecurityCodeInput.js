import PropTypes from 'prop-types';
import { memo, useEffect, useState } from 'react';
import { COLOR } from '../../../constants/color';
import { CARD_INPUT } from '../../../constants/standard';
import { TransparentInput } from '../../commons/input/TransparentInput';
import { DecimalKeyboard } from '../../commons/keyboard/DecimalKeyboard';
import { QuestionDescription } from '../../commons/questionDescription/QuestionDescription';
import Styled from './SecurityCodeInput.style';

const transparentInputStyles = {
  color: COLOR.MINT,
  textAlign: 'center',
};

const isValidInput = securityCode => {
  return securityCode.length === CARD_INPUT.SECURITY_CODE_LENGTH && !isNaN(securityCode);
};

const SecurityCodeInput = memo(({ securityCode, setSecurityCode, isValidSecurityCode, setValidSecurityCode }) => {
  const [isKeyboardOpened, setKeyboardOpen] = useState(false);

  useEffect(() => {
    if (isValidInput(securityCode)) {
      setValidSecurityCode(true);
      setKeyboardOpen(false);
    }
  }, [setValidSecurityCode, securityCode]);

  const handleSecurityInputFocus = () => {
    setKeyboardOpen(true);

    setSecurityCode('');
  };

  return (
    <div>
      <Styled.InputLabelContainer>보안 코드(CVC/CVV) {isValidSecurityCode && '✔️'}</Styled.InputLabelContainer>
      <Styled.Container>
        <Styled.InputContainer isValidInput={isValidSecurityCode}>
          <TransparentInput
            type="password"
            inputmode="none"
            minLength={CARD_INPUT.SECURITY_CODE_LENGTH}
            maxLength={CARD_INPUT.SECURITY_CODE_LENGTH}
            value={securityCode}
            onFocus={handleSecurityInputFocus}
            styles={transparentInputStyles}
          />
        </Styled.InputContainer>
        <QuestionDescription />
      </Styled.Container>
      {isKeyboardOpened && (
        <DecimalKeyboard
          closeKeyboard={() => setKeyboardOpen(false)}
          setInput={setSecurityCode}
          maxLength={CARD_INPUT.SECURITY_CODE_LENGTH}
        />
      )}
    </div>
  );
});

SecurityCodeInput.propTypes = {
  securityCode: PropTypes.string.isRequired,
  setSecurityCode: PropTypes.func.isRequired,
  isValidSecurityCode: PropTypes.bool.isRequired,
  setValidSecurityCode: PropTypes.func.isRequired,
};

export default SecurityCodeInput;
