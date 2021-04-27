import PropTypes from 'prop-types';
import { memo } from 'react';
import { COLOR } from '../../../constants/color';
import { NUMBER_REG_EXR } from '../../../constants/regExp';
import { printColorBasedOnBoolean } from '../../../utils/printColor';
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
  const handleInputChange = ({ target }) => {
    if (target.value.length > FULL_INPUT_LENGTH || !NUMBER_REG_EXR.test(target.value)) return;

    setSecurityCode(target.value);
    setValidSecurityCode(isValidInput(target.value));
  };

  return (
    <div>
      <Styled.InputLabelContainer>보안 코드(CVC/CVV) {isValidSecurityCode && '✔️'}</Styled.InputLabelContainer>
      <Styled.Container>
        <Styled.InputContainer validColor={securityCode && printColorBasedOnBoolean(isValidSecurityCode)}>
          <TransparentInput
            type="password"
            minLength={FULL_INPUT_LENGTH}
            maxLength={FULL_INPUT_LENGTH}
            value={securityCode}
            onChange={handleInputChange}
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
