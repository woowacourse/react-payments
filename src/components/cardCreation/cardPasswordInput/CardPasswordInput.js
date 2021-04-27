import PropTypes from 'prop-types';
import { memo, useRef, useEffect } from 'react';
import { COLOR } from '../../../constants/color';
import { FIRST, SECOND } from '../../../constants/inputName';
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
  const $secondInput = useRef(null);

  useEffect(() => {
    setValidCardPassword(isValidInput(cardPassword));
  }, [setValidCardPassword, cardPassword]);

  const handleInputChange = ({ target }) => {
    setCardPassword(prevState => ({ ...prevState, [target.name]: target.value }));

    if (target.name === FIRST && target.value.length === 1) {
      $secondInput.current.focus();
    }
  };

  return (
    <div>
      <Styled.InputLabelContainer>카드 비밀번호 {isValidCardPassword && '✔️'}</Styled.InputLabelContainer>
      <Styled.Container>
        <Styled.InputContainer isValidInput={isValidCardPassword}>
          <TransparentInput
            name={FIRST}
            minLength="1"
            maxLength="1"
            type="password"
            value={cardPassword[FIRST]}
            onChange={handleInputChange}
            styles={transparentInputStyles}
          />
        </Styled.InputContainer>
        <Styled.InputContainer isValidInput={isValidCardPassword}>
          <TransparentInput
            name={SECOND}
            minLength="1"
            maxLength="1"
            type="password"
            innerRef={$secondInput}
            value={cardPassword[SECOND]}
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

CardPasswordInput.defaultProps = {
  cardPassword: { [FIRST]: '', [SECOND]: '' },
};

CardPasswordInput.propTypes = {
  cardPassword: PropTypes.objectOf(PropTypes.string).isRequired,
  setCardPassword: PropTypes.func.isRequired,
  isValidCardPassword: PropTypes.bool.isRequired,
  setValidCardPassword: PropTypes.func.isRequired,
};

export default CardPasswordInput;
