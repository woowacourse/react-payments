import PropTypes from 'prop-types';
import { memo, useEffect } from 'react';
import { COLOR } from '../../../constants/color';
import { TransparentInput } from '../../commons/input/TransparentInput';
import { QuestionDescription } from '../../commons/questionDescription/QuestionDescription';
import Styled from './SecurityCodeInput.style';

const FULL_INPUT_LENGTH = 3;
const transparentInputStyles = {
  color: COLOR.MINT,
  fontSize: '24px',
  textAlign: 'center',
};

const isValidInput = securityCode => {
  return securityCode.length === FULL_INPUT_LENGTH && !isNaN(securityCode);
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
            minLength={FULL_INPUT_LENGTH}
            maxLength={FULL_INPUT_LENGTH}
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

SecurityCodeInput.defaultProps = {
  securityCode: '',
};

SecurityCodeInput.propTypes = {
  securityCode: PropTypes.string.isRequired,
  setSecurityCode: PropTypes.func.isRequired,
  isValidSecurityCode: PropTypes.bool.isRequired,
  setValidSecurityCode: PropTypes.func.isRequired,
};

export default SecurityCodeInput;
