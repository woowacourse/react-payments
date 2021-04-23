import { COLOR } from '../../../constants/color';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './CardNumberInput.style';

const CardNumberInput = () => (
  <>
    <Styled.InputLabelContainer>카드 번호</Styled.InputLabelContainer>
    <Styled.InputContainer>
      <TransparentInput
        color={COLOR.MINT}
        paddingLeft="14%"
        textAlign="center"
        width="32%"
        type="number"
        min="0"
        max="9999"
      />
      <Styled.Dash>-</Styled.Dash>
      <TransparentInput color={COLOR.MINT} textAlign="center" width="18%" type="number" min="0" max="9999" />
      <Styled.Dash>-</Styled.Dash>
      <TransparentInput
        color={COLOR.MINT}
        textAlign="center"
        width="18%"
        fontSize="30px"
        type="password"
        minLength="4"
        maxLength="4"
      />
      <Styled.Dash>-</Styled.Dash>
      <TransparentInput
        color={COLOR.MINT}
        paddingRight="14%"
        textAlign="center"
        width="32%"
        fontSize="30px"
        type="password"
        minLength="4"
        maxLength="4"
      />
    </Styled.InputContainer>
  </>
);

export default CardNumberInput;
