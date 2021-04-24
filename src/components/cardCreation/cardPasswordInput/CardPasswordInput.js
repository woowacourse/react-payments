import { COLOR } from '../../../constants/color';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './CardPasswordInput.style';
import { Circle } from '../../commons/circle/Circle';
import { memo } from 'react';

const transparentInputStyles = {
  color: COLOR.MINT,
  fontSize: '24px',
  textAlign: 'center',
};

const CardPasswordInput = memo(({ cardPassword, setCardPassword }) => {
  const handleInputChange = ({ target }) => {
    setCardPassword(prevState => ({ ...prevState, [target.name]: target.value }));
  };

  return (
    <div>
      <Styled.InputLabelContainer>카드 비밀번호</Styled.InputLabelContainer>
      <Styled.Container>
        <Styled.InputContainer>
          <TransparentInput
            name="0"
            minLength="1"
            maxLength="1"
            type="password"
            value={cardPassword['0']}
            onChange={handleInputChange}
            styles={transparentInputStyles}
          />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <TransparentInput
            name="1"
            minLength="1"
            maxLength="1"
            type="password"
            value={cardPassword['1']}
            onChange={handleInputChange}
            styles={transparentInputStyles}
          />
        </Styled.InputContainer>
        <Styled.CircleContainer>
          <Circle styles={{ backgroundColor: COLOR.MINT }} />
        </Styled.CircleContainer>
        <Styled.CircleContainer>
          <Circle styles={{ backgroundColor: COLOR.MINT }} />
        </Styled.CircleContainer>
      </Styled.Container>
    </div>
  );
});

export default CardPasswordInput;
