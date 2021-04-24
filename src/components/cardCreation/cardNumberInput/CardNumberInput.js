import { COLOR } from '../../../constants/color';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './CardNumberInput.style';

const transparentInputStyles = {
  0: {
    color: COLOR.MINT,
    paddingLeft: '14%',
    textAlign: 'center',
    width: '32%',
  },
  1: {
    color: COLOR.MINT,
    textAlign: 'center',
    width: '18%',
  },
  2: {
    color: COLOR.MINT,
    textAlign: 'center',
    width: '18%',
    fontSize: '30px',
  },
  3: { color: COLOR.MINT, paddingRight: '14%', textAlign: 'center', width: '32%', fontSize: '30px' },
};

const CardNumberInput = () => (
  <>
    <Styled.InputLabelContainer>카드 번호</Styled.InputLabelContainer>
    <Styled.InputContainer>
      <TransparentInput type="number" min="0" max="9999" styles={transparentInputStyles['0']} />
      <Styled.Dash>-</Styled.Dash>
      <TransparentInput type="number" min="0" max="9999" styles={transparentInputStyles['1']} />
      <Styled.Dash>-</Styled.Dash>
      <TransparentInput type="password" minLength="4" maxLength="4" styles={transparentInputStyles['2']} />
      <Styled.Dash>-</Styled.Dash>
      <TransparentInput type="password" minLength="4" maxLength="4" styles={transparentInputStyles['3']} />
    </Styled.InputContainer>
  </>
);

export default CardNumberInput;
