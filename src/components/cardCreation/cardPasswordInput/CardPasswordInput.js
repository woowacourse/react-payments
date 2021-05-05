import PropTypes from 'prop-types';
import { useRef, useEffect, useState, useContext } from 'react';
import { COLOR } from '../../../constants/color';
import { INPUT_LENGTH, INPUT_NAME } from '../../../constants/input';
import { TransparentInput } from '../../commons/input/TransparentInput';
import Styled from './CardPasswordInput.style';
import { Circle } from '../../commons/circle/Circle';
import { printColorBasedOnBoolean } from '../../../utils/printColor';
import VirtualKeyboard from '../virtualKeyboard/VirtualKeyboard';
import { MODAL_TYPE, useBottomModal } from '../../../hooks/useBottomModal';
import CardDataContext from '../../../context/CardDataContext';

const { FIRST, SECOND } = INPUT_NAME;

const transparentInputStyles = {
  color: COLOR.MINT_500,
  fontSize: '24px',
  textAlign: 'center',
};

const CardPasswordInput = ({ isValidCardPassword }) => {
  const { isModalOpened, openModal, closeModal, BottomModal } = useBottomModal();
  const [currentInputName, setCurrentInputName] = useState(null);
  const {
    cardInfo: { cardPassword },
    setCardInfo,
  } = useContext(CardDataContext);

  const $secondInput = useRef(null);

  useEffect(() => {
    isValidCardPassword && closeModal(MODAL_TYPE.VIRTUAL_KEYBOARD);

    if (currentInputName === FIRST && cardPassword[FIRST].length === INPUT_LENGTH.CARD_PASSWORD) {
      $secondInput.current.focus();
    }
  }, [isValidCardPassword, currentInputName, cardPassword, closeModal]);

  const handleInputFocus = ({ target }) => {
    setCurrentInputName(target.name);
    setCardInfo(prevState => {
      const copiedCardPassword = { ...cardPassword };
      copiedCardPassword[target.name] = '';

      return { ...prevState, cardPassword: copiedCardPassword };
    });
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
              minLength={INPUT_LENGTH.CARD_PASSWORD}
              maxLength={INPUT_LENGTH.CARD_PASSWORD}
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
              minLength={INPUT_LENGTH.CARD_PASSWORD}
              maxLength={INPUT_LENGTH.CARD_PASSWORD}
              type="password"
              ref={$secondInput}
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
          maxLength={INPUT_LENGTH.CARD_PASSWORD}
          targetKey="cardPassword"
        />
      )}
    </>
  );
};

CardPasswordInput.propTypes = {
  isValidCardPassword: PropTypes.bool.isRequired,
};

export default CardPasswordInput;
