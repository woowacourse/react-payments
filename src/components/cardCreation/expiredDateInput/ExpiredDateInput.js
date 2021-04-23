import { COLOR } from '../../../constants/color';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './ExpiredDateInput.style';

const ExpiredDateInput = () => (
  <>
    <Styled.InputLabelContainer>만료일</Styled.InputLabelContainer>
    <Styled.InputContainer>
      <TransparentInput
        color={COLOR.MINT}
        width="30%"
        placeholder="MM"
        type="number"
        min="1"
        max="12"
        textAlign="center"
      />
      <Styled.Slash>/</Styled.Slash>
      <TransparentInput
        color={COLOR.MINT}
        width="30%"
        placeholder="YY"
        type="number"
        min="0"
        max="99"
        textAlign="center"
      />
    </Styled.InputContainer>
  </>
);

export default ExpiredDateInput;
