import PropTypes from 'prop-types';
import { memo, useRef, useEffect, useState } from 'react';
import { COLOR, CARD_INPUT, INPUT } from '../../../constants';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './CardPasswordInput.style';
import { Circle } from '../../commons/circle/Circle';
import { DecimalKeyboard } from '../../commons/keyboard/DecimalKeyboard';
import { isInputFilledUp } from '../../../utils/isInputFilledUp';
import { CardValidator } from '../../../validations/card';

const transparentInputStyles = {
  color: COLOR.MINT,
  textAlign: 'center',
};

const isPasswordFilledUp = input => {
  return isInputFilledUp(input, CARD_INPUT.PASSWORD_UNIT_LENGTH);
};

const CardPasswordInput = memo(({ cardPassword, setCardPassword }) => {
  const $secondPasswordInput = useRef(null);
  const [firstPasswordInput, setFirstPasswordInput] = useState('');
  const [secondPasswordInput, setSecondPasswordInput] = useState('');
  const [isKeyboardOpened, setKeyboardOpen] = useState(false);
  const CardValidatorPassword = CardValidator.Password(cardPassword);

  useEffect(() => {
    setCardPassword(prevState => ({ ...prevState, [INPUT.FIRST]: firstPasswordInput }));

    if (isPasswordFilledUp($secondPasswordInput.current.value)) {
      $secondPasswordInput.current.disabled = false;
      isPasswordFilledUp(firstPasswordInput) && $secondPasswordInput.current.focus();
    }
  }, [firstPasswordInput, setCardPassword]);

  useEffect(() => {
    setCardPassword(prevState => ({ ...prevState, [INPUT.SECOND]: secondPasswordInput }));
    isPasswordFilledUp(secondPasswordInput) && setKeyboardOpen(false);
  }, [secondPasswordInput, setCardPassword]);

  const handleSecurityInputFocus = ({ target }) => {
    setKeyboardOpen(true);

    if (target.name === INPUT.FIRST) {
      setFirstPasswordInput('');

      return;
    }

    if (target.name === INPUT.SECOND) {
      setSecondPasswordInput('');

      return;
    }
  };

  return (
    <div>
      <Styled.InputLabelContainer>카드 비밀번호 {CardValidatorPassword && '✔️'}</Styled.InputLabelContainer>
      <Styled.Container>
        <Styled.InputContainer isValidInput={CardValidatorPassword}>
          <TransparentInput
            name={INPUT.FIRST}
            minLength={CARD_INPUT.PASSWORD_UNIT_LENGTH}
            maxLength={CARD_INPUT.PASSWORD_UNIT_LENGTH}
            type="password"
            inputmode="none"
            value={firstPasswordInput}
            onFocus={handleSecurityInputFocus}
            styles={transparentInputStyles}
            readOnly
          />
        </Styled.InputContainer>
        <Styled.InputContainer isValidInput={CardValidatorPassword}>
          <TransparentInput
            name={INPUT.SECOND}
            minLength={CARD_INPUT.PASSWORD_UNIT_LENGTH}
            maxLength={CARD_INPUT.PASSWORD_UNIT_LENGTH}
            type="password"
            inputmode="none"
            value={secondPasswordInput}
            innerRef={$secondPasswordInput}
            onFocus={handleSecurityInputFocus}
            styles={transparentInputStyles}
            disabled
            readOnly
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
          setInput={isPasswordFilledUp(firstPasswordInput) ? setSecondPasswordInput : setFirstPasswordInput}
          maxLength={CARD_INPUT.PASSWORD_UNIT_LENGTH}
        />
      )}
    </div>
  );
});

CardPasswordInput.propTypes = {
  cardPassword: PropTypes.object.isRequired,
  setCardPassword: PropTypes.func.isRequired,
};

export default CardPasswordInput;
