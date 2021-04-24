import { COLOR } from '../../../constants/color';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './ExpiredDateInput.style';

const transparentInputStyles = {
  color: COLOR.MINT,
  width: '30%',
  textAlign: 'center',
};

const ExpiredDateInput = () => (
  <>
    <Styled.InputLabelContainer>만료일</Styled.InputLabelContainer>
    <Styled.InputContainer>
      <TransparentInput type="number" min="1" max="12" placeholder="MM" styles={transparentInputStyles} />
      <Styled.Slash>/</Styled.Slash>
      <TransparentInput type="number" min="0" max="99" placeholder="YY" styles={transparentInputStyles} />
    </Styled.InputContainer>
  </>
);

export default ExpiredDateInput;
