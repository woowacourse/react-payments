import PropTypes from 'prop-types';
import { memo, useRef, useEffect, useState } from 'react';
import { COLOR } from '../../../constants/color';
import { FIRST, SECOND } from '../../../constants/inputName';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './CardPasswordInput.style';
import { Circle } from '../../commons/circle/Circle';
import { printColorBasedOnBoolean } from '../../../utils/printColor';
import VirtualKeyboard from '../virtualKeyboard/VirtualKeyboard';
import { MODAL_TYPE, useBottomModal } from '../../../hooks/useBottomModal';

const FULL_INPUT_LENGTH = 1;
const transparentInputStyles = {
  color: COLOR.MINT_500,
  fontSize: '24px',
  textAlign: 'center',
};

const CardPasswordInput = memo(({ cardPassword, setCardPassword, isValidCardPassword, setValidCardPassword }) => {
  const { isModalOpened, openModal, closeModal, BottomModal } = useBottomModal();
  const [currentInputName, setCurrentInputName] = useState(null);
  const $secondInput = useRef(null);

  useEffect(() => {
    const isValidInput = Object.values(cardPassword).every(cardPassword => cardPassword.length === FULL_INPUT_LENGTH);
    setValidCardPassword(isValidInput);
    isValidInput && closeModal(MODAL_TYPE.VIRTUAL_KEYBOARD);

    if (currentInputName === FIRST && cardPassword[FIRST].length === FULL_INPUT_LENGTH) {
      $secondInput.current.focus();
    }
  }, [setValidCardPassword, currentInputName, cardPassword, closeModal]);

  const handleInputFocus = ({ target }) => {
    setCurrentInputName(target.name);
    setCardPassword(prevState => ({ ...prevState, [target.name]: '' }));
    openModal(MODAL_TYPE.VIRTUAL_KEYBOARD);
  };

  return (
    <>
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
              onFocus={handleInputFocus}
              styles={transparentInputStyles}
              readOnly
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
              onFocus={handleInputFocus}
              styles={transparentInputStyles}
              readOnly
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
      {isModalOpened && (
        <VirtualKeyboard
          BottomModal={BottomModal}
          closeModal={closeModal}
          currentInputName={currentInputName}
          inputValue={cardPassword}
          setInputValue={setCardPassword}
          maxLength={FULL_INPUT_LENGTH}
        />
      )}
    </>
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
