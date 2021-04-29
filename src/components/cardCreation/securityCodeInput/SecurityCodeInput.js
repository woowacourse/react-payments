import PropTypes from 'prop-types';
import { memo, useEffect } from 'react';
import { COLOR } from '../../../constants/color';
import { CARD_INPUT } from '../../../constants/standard';
import { TransparentInput } from '../../commons/input/TransparentInput';
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
  useEffect(() => {
    setValidSecurityCode(isValidInput(securityCode));
  }, [setValidSecurityCode, securityCode]);

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
            onChange={({ target }) => setSecurityCode(target.value)}
            styles={transparentInputStyles}
          />
        </Styled.InputContainer>
        <QuestionDescription />
      </Styled.Container>
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
