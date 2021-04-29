import PropTypes from 'prop-types';
import { memo, useRef, useEffect, useState } from 'react';
import { COLOR } from '../../../constants/color';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './CardPasswordInput.style';
import { Circle } from '../../commons/circle/Circle';
import { CARD_INPUT } from '../../../constants/standard';
import { DecimalKeyboard } from '../../commons/keyboard/DecimalKeyboard';

const transparentInputStyles = {
  color: COLOR.MINT,
  textAlign: 'center',
};

const isValidInput = cardPassword => {
  return Object.values(cardPassword).every(
    cardPassword => cardPassword.length === CARD_INPUT.PASSWORD_UNIT_LENGTH && !isNaN(cardPassword)
  );
};

const isInputFilledUp = input => {
  return input.length === CARD_INPUT.PASSWORD_UNIT_LENGTH;
};

const CardPasswordInput = memo(({ cardPassword, setCardPassword, isValidCardPassword, setValidCardPassword }) => {
  const $input1 = useRef(null);
  const [input0, setInput0] = useState('');
  const [input1, setInput1] = useState('');
  const [isKeyboardOpened, setKeyboardOpen] = useState(false);

  useEffect(() => {
    setValidCardPassword(isValidInput(cardPassword));
  }, [setValidCardPassword, cardPassword]);

  useEffect(() => {
    setCardPassword(prevState => ({ ...prevState, 0: input0 }));

    if (isInputFilledUp($input1.current.value)) {
      $input1.current.disabled = false;
      $input1.current.focus();
    }
  }, [input0, setCardPassword]);

  useEffect(() => {
    setCardPassword(prevState => ({ ...prevState, 1: input1 }));
    isInputFilledUp(input1) && setKeyboardOpen(false);
  }, [input1, setCardPassword]);

  const handleSecurityInputFocus = ({ target }) => {
    setKeyboardOpen(true);

    if (target.name === '0') {
      setInput0('');

      return;
    }

    if (target.name === '1') {
      setInput1('');

      return;
    }
  };

  return (
    <div>
      <Styled.InputLabelContainer>카드 비밀번호 {isValidCardPassword && '✔️'}</Styled.InputLabelContainer>
      <Styled.Container>
        <Styled.InputContainer isValidInput={isValidCardPassword}>
          <TransparentInput
            name="0"
            minLength={CARD_INPUT.PASSWORD_UNIT_LENGTH}
            maxLength={CARD_INPUT.PASSWORD_UNIT_LENGTH}
            type="password"
            inputmode="none"
            value={input0}
            onFocus={handleSecurityInputFocus}
            styles={transparentInputStyles}
          />
        </Styled.InputContainer>
        <Styled.InputContainer isValidInput={isValidCardPassword}>
          <TransparentInput
            name="1"
            minLength={CARD_INPUT.PASSWORD_UNIT_LENGTH}
            maxLength={CARD_INPUT.PASSWORD_UNIT_LENGTH}
            type="password"
            inputmode="none"
            value={input1}
            innerRef={$input1}
            onFocus={handleSecurityInputFocus}
            styles={transparentInputStyles}
            disabled
          />
        </Styled.InputContainer>
        <Styled.CircleContainer>
          <Circle styles={{ backgroundColor: COLOR.MINT }} />
        </Styled.CircleContainer>
        <Styled.CircleContainer>
          <Circle styles={{ backgroundColor: COLOR.MINT }} />
        </Styled.CircleContainer>
      </Styled.Container>
      {isKeyboardOpened && (
        <DecimalKeyboard
          closeKeyboard={() => setKeyboardOpen(false)}
          setInput={isInputFilledUp(input0) ? setInput1 : setInput0}
          maxLength={CARD_INPUT.PASSWORD_UNIT_LENGTH}
        />
      )}
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
