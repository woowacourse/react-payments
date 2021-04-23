import { COLOR } from '../../../constants/color';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './CardPasswordInput.style';
import { Circle } from '../../commons/circle/Circle';

const CardPasswordInput = props => (
  <>
    <Styled.InputLabelContainer>카드 비밀번호</Styled.InputLabelContainer>
    <Styled.Container>
      <Styled.InputContainer>
        <TransparentInput
          color={COLOR.MINT}
          fontSize="30px"
          textAlign="center"
          minLength="1"
          maxLength="1"
          type="password"
        />
      </Styled.InputContainer>
      <Styled.InputContainer>
        <TransparentInput
          color={COLOR.MINT}
          fontSize="30px"
          textAlign="center"
          minLength="1"
          maxLength="1"
          type="password"
        />
      </Styled.InputContainer>
      <Styled.CircleContainer>
        <Circle color={COLOR.MINT} />
      </Styled.CircleContainer>
      <Styled.CircleContainer>
        <Circle color={COLOR.MINT} />
      </Styled.CircleContainer>
    </Styled.Container>
  </>
);

export default CardPasswordInput;
