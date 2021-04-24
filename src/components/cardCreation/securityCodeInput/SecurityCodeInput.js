import { COLOR } from '../../../constants/color';
import { TransparentInput } from '../../commons/input/TransparentInput';
import { QuestionDescription } from '../../commons/questionDescription/QuestionDescription';
import Styled from './SecurityCodeInput.style';

const transparentInputStyles = {
  color: COLOR.MINT,
  textAlign: 'center',
  fontSize: '30px',
};

const SecurityCodeInput = () => (
  <>
    <Styled.InputLabelContainer>보안 코드(CVC/CVV)</Styled.InputLabelContainer>
    <Styled.Container>
      <Styled.InputContainer>
        <TransparentInput type="password" minLength="3" maxLength="3" styles={transparentInputStyles} />
      </Styled.InputContainer>
      <QuestionDescription />
    </Styled.Container>
  </>
);

export default SecurityCodeInput;
