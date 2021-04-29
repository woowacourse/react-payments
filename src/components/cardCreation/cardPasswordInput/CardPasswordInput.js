import PropTypes from 'prop-types';
import { memo, useRef, useEffect } from 'react';
import { COLOR } from '../../../constants/color';
import { FIRST, SECOND } from '../../../constants/inputName';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './CardPasswordInput.style';
import { Circle } from '../../commons/circle/Circle';
import { printColorBasedOnBoolean } from '../../../utils/printColor';
import { NUMBER_REG_EXR } from '../../../constants/regExp';

const FULL_INPUT_LENGTH = 1;
const transparentInputStyles = {
  color: COLOR.MINT_500,
  fontSize: '24px',
  textAlign: 'center',
};

const isValidInput = cardPassword => {
  return Object.values(cardPassword).every(cardPassword => cardPassword.length === FULL_INPUT_LENGTH);
};

const CardPasswordInput = memo(({ cardPassword, setCardPassword, isValidCardPassword, setValidCardPassword }) => {
  const $secondInput = useRef(null);

  useEffect(() => {
    setValidCardPassword(isValidInput(cardPassword));
  }, [setValidCardPassword, cardPassword]);

  const handleInputChange = ({ target }) => {
    if (target.value.length > FULL_INPUT_LENGTH || !NUMBER_REG_EXR.test(target.value)) return;

    setCardPassword(prevState => ({ ...prevState, [target.name]: target.value }));

    if (target.name === FIRST && target.value.length === FULL_INPUT_LENGTH) {
      $secondInput.current.focus();
    }
  };

  return (
    <div>
      <Styled.InputLabelContainer>카드 비밀번호 {isValidCardPassword && '✔️'}</Styled.InputLabelContainer>
      <Styled.Container>
        <Styled.InputContainer validColor={cardPassword[FIRST] && printColorBasedOnBoolean(true)}>
          <TransparentInput
            name={FIRST}
            minLength={FULL_INPUT_LENGTH}
            maxLength={FULL_INPUT_LENGTH}
            type="password"
            value={cardPassword[FIRST]}
            onChange={handleInputChange}
            styles={transparentInputStyles}
          />
        </Styled.InputContainer>
        <Styled.InputContainer validColor={cardPassword[SECOND] && printColorBasedOnBoolean(true)}>
          <TransparentInput
            name={SECOND}
            minLength={FULL_INPUT_LENGTH}
            maxLength={FULL_INPUT_LENGTH}
            type="password"
            innerRef={$secondInput}
            value={cardPassword[SECOND]}
            onChange={handleInputChange}
            styles={transparentInputStyles}
          />
        </Styled.InputContainer>
        <Styled.CircleContainer>
          <Circle styles={{ backgroundColor: COLOR.MINT_500 }} />
        </Styled.CircleContainer>
        <Styled.CircleContainer>
          <Circle styles={{ backgroundColor: COLOR.MINT_500 }} />
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
