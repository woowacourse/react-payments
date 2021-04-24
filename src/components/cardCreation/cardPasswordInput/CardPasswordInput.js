import { COLOR } from '../../../constants/color';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './CardPasswordInput.style';
import { Circle } from '../../commons/circle/Circle';

const transparentInputStyles = {
  color: COLOR.MINT,
  fontSize: '30px',
  textAlign: 'center',
};

const CardPasswordInput = () => (
  <>
    <Styled.InputLabelContainer>카드 비밀번호</Styled.InputLabelContainer>
    <Styled.Container>
      <Styled.InputContainer>
        <TransparentInput minLength="1" maxLength="1" type="password" styles={transparentInputStyles} />
      </Styled.InputContainer>
      <Styled.InputContainer>
        <TransparentInput minLength="1" maxLength="1" type="password" styles={transparentInputStyles} />
      </Styled.InputContainer>
      <Styled.CircleContainer>
        <Circle styles={{ backgroundColor: COLOR.MINT }} />
      </Styled.CircleContainer>
      <Styled.CircleContainer>
        <Circle styles={{ backgroundColor: COLOR.MINT }} />
      </Styled.CircleContainer>
    </Styled.Container>
  </>
);

export default CardPasswordInput;
