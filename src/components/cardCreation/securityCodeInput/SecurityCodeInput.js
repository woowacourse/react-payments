import { memo } from 'react';
import { COLOR } from '../../../constants/color';
import { TransparentInput } from '../../commons/input/TransparentInput';
import { QuestionDescription } from '../../commons/questionDescription/QuestionDescription';
import Styled from './SecurityCodeInput.style';

const transparentInputStyles = {
  color: COLOR.MINT,
  fontSize: '24px',
  textAlign: 'center',
};

const SecurityCodeInput = memo(({ securityCode, setSecurityCode }) => {
  return (
    <div>
      <Styled.InputLabelContainer>보안 코드(CVC/CVV)</Styled.InputLabelContainer>
      <Styled.Container>
        <Styled.InputContainer>
          <TransparentInput
            type="password"
            minLength="3"
            maxLength="3"
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

export default SecurityCodeInput;
