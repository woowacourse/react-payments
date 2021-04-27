import PropTypes from 'prop-types';
import { memo, useRef, useEffect } from 'react';
import { COLOR } from '../../../constants/color';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './CardPasswordInput.style';
import { Circle } from '../../commons/circle/Circle';

const transparentInputStyles = {
  color: COLOR.MINT,
  fontSize: '24px',
  textAlign: 'center',
};

const isValidInput = cardPassword => {
  return Object.values(cardPassword).every(cardPassword => cardPassword.length === 1 && !isNaN(cardPassword));
};

const CardPasswordInput = memo(({ cardPassword, setCardPassword, isValidCardPassword, setValidCardPassword }) => {
  const $input1 = useRef(null);

  useEffect(() => {
    setValidCardPassword(isValidInput(cardPassword));
  }, [setValidCardPassword, cardPassword]);

  const handleInputChange = ({ target }) => {
    setCardPassword(prevState => ({ ...prevState, [target.name]: target.value }));

    if (target.name === '0' && target.value.length === 1) {
      $input1.current.focus();
    }
  };

  return (
    <div>
      <Styled.InputLabelContainer>카드 비밀번호 {isValidCardPassword && '✔️'}</Styled.InputLabelContainer>
      <Styled.Container>
        <Styled.InputContainer isValidInput={isValidCardPassword}>
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
        <Styled.InputContainer isValidInput={isValidCardPassword}>
          <TransparentInput
            name="1"
            minLength="1"
            maxLength="1"
            type="password"
            innerRef={$input1}
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

CardPasswordInput.propTypes = {
  cardPassword: PropTypes.object.isRequired,
  setCardPassword: PropTypes.func.isRequired,
  isValidCardPassword: PropTypes.bool.isRequired,
  setValidCardPassword: PropTypes.func.isRequired,
};

export default CardPasswordInput;
