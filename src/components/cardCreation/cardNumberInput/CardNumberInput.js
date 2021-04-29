import PropTypes from 'prop-types';
import { memo, useRef, useEffect, useState } from 'react';
import { COLOR } from '../../../constants/color';
import { FIRST, SECOND, THIRD, FOURTH } from '../../../constants/inputName';
import { NUMBER_REG_EXR } from '../../../constants/regExp';
import { MODAL_TYPE, useBottomModal } from '../../../hooks/useBottomModal';
import { hasObjectAnyValue } from '../../../utils/object';
import { printColorBasedOnBoolean } from '../../../utils/printColor';
import { TransparentInput } from '../../commons/input/TransparentInput';
import CardSelectionModal from '../cardSelectionModal/CardSelectionModal';
import VirtualKeyboard from '../virtualKeyboard/VirtualKeyboard';
import Styled from './CardNumberInput.style';

const transparentInputStyles = {
  [FIRST]: {
    color: COLOR.MINT_500,
    paddingLeft: '14%',
    textAlign: 'center',
    width: '32%',
  },
  [SECOND]: {
    color: COLOR.MINT_500,
    textAlign: 'center',
    width: '18%',
  },
  [THIRD]: {
    color: COLOR.MINT_500,
    textAlign: 'center',
    width: '18%',
    fontSize: '24px',
  },
  [FOURTH]: {
    color: COLOR.MINT_500,
    paddingRight: '14%',
    textAlign: 'center',
    width: '32%',
    fontSize: '24px',
  },
};

const FULL_INPUT_LENGTH = 4;

const isValidCardNumberInput = cardNumber => {
  return Object.values(cardNumber).every(cardNumber => cardNumber.length === FULL_INPUT_LENGTH && !isNaN(cardNumber));
};

const CardNumberInput = memo(
  ({ cardNumber, selectedCardInfo, setCardNumber, isValidCardNumber, setValidCardNumber, setSelectedCardInfo }) => {
    const { modalType, isModalOpened, openModal, closeModal, BottomModal } = useBottomModal();
    const [currentInputName, setCurrentInputName] = useState(null);

    const $secondInput = useRef(null);
    const $thirdInput = useRef(null);
    const $fourthInput = useRef(null);

    const isSelectedCardInfo = !!selectedCardInfo.id;

    useEffect(() => {
      const isValidInput = isValidCardNumberInput(cardNumber) && isSelectedCardInfo;
      isValidInput && closeModal(MODAL_TYPE.VIRTUAL_KEYBOARD);
      setValidCardNumber(isValidInput);

      if (currentInputName === THIRD && cardNumber[THIRD].length === FULL_INPUT_LENGTH) {
        $fourthInput.current.focus();
      }
    });

    useEffect(() => {
      isSelectedCardInfo && $thirdInput.current.focus();
    }, [isSelectedCardInfo]);

    const handleInputChange = ({ target }) => {
      if (target.value.length > FULL_INPUT_LENGTH || !NUMBER_REG_EXR.test(target.value)) return;

      setCardNumber(prevState => ({ ...prevState, [target.name]: target.value }));

      if (target.value.length !== FULL_INPUT_LENGTH) return;

      if (target.name === FIRST) {
        $secondInput.current.disabled = false;
        $secondInput.current.focus();

        return;
      }

      if (target.name === SECOND) {
        openModal(MODAL_TYPE.DIALOG);
        $secondInput.current.blur();

        return;
      }
    };

    const handleInputClick = () => {
      cardNumber[FIRST].length === FULL_INPUT_LENGTH &&
        cardNumber[SECOND].length === FULL_INPUT_LENGTH &&
        !isSelectedCardInfo &&
        openModal(MODAL_TYPE.DIALOG);
    };

    const handleInputFocus = ({ target }) => {
      setCardNumber(prevState => ({ ...prevState, [target.name]: '' }));
      setCurrentInputName(target.name);
      openModal(MODAL_TYPE.VIRTUAL_KEYBOARD);
    };

    return (
      <>
        <div>
          <Styled.InputLabelContainer>카드 번호 {isValidCardNumber && '✔️'}</Styled.InputLabelContainer>
          <Styled.InputContainer
            validColor={hasObjectAnyValue(cardNumber) && printColorBasedOnBoolean(isValidCardNumber)}
            onClick={handleInputClick}
          >
            <TransparentInput
              name={FIRST}
              minLength={FULL_INPUT_LENGTH}
              maxLength={FULL_INPUT_LENGTH}
              value={cardNumber[FIRST]}
              onChange={handleInputChange}
              styles={transparentInputStyles[FIRST]}
              autoFocus
            />
            {cardNumber[FIRST].length === FULL_INPUT_LENGTH && <Styled.Dash>-</Styled.Dash>}
            <TransparentInput
              name={SECOND}
              minLength={FULL_INPUT_LENGTH}
              maxLength={FULL_INPUT_LENGTH}
              value={cardNumber[SECOND]}
              onChange={handleInputChange}
              innerRef={$secondInput}
              styles={transparentInputStyles[SECOND]}
              disabled
            />
            {cardNumber[SECOND].length === FULL_INPUT_LENGTH && <Styled.Dash>-</Styled.Dash>}
            <TransparentInput
              name={THIRD}
              type="password"
              minLength={FULL_INPUT_LENGTH}
              maxLength={FULL_INPUT_LENGTH}
              value={cardNumber[THIRD]}
              onFocus={handleInputFocus}
              innerRef={$thirdInput}
              styles={transparentInputStyles[THIRD]}
              readOnly
            />
            {cardNumber[THIRD].length === FULL_INPUT_LENGTH && <Styled.Dash>-</Styled.Dash>}
            <TransparentInput
              name={FOURTH}
              type="password"
              minLength={FULL_INPUT_LENGTH}
              maxLength={FULL_INPUT_LENGTH}
              value={cardNumber[FOURTH]}
              onFocus={handleInputFocus}
              innerRef={$fourthInput}
              styles={transparentInputStyles[FOURTH]}
              readOnly
            />
          </Styled.InputContainer>
        </div>
        {modalType === MODAL_TYPE.DIALOG && isModalOpened && (
          <CardSelectionModal
            BottomModal={BottomModal}
            closeModal={closeModal}
            setSelectedCardInfo={setSelectedCardInfo}
          />
        )}
        {modalType === MODAL_TYPE.VIRTUAL_KEYBOARD && isModalOpened && isSelectedCardInfo && (
          <VirtualKeyboard
            BottomModal={BottomModal}
            closeModal={closeModal}
            currentInputName={currentInputName}
            inputValue={cardNumber}
            setInputValue={setCardNumber}
            maxLength={FULL_INPUT_LENGTH}
          />
        )}
      </>
    );
  }
);

CardNumberInput.defaultProps = {
  cardNumber: { [FIRST]: '', [SECOND]: '', [THIRD]: '', [FOURTH]: '' },
  selectedCardInfo: { id: null, name: '', color: COLOR.GRAY_100 },
  isValidCardNumber: false,
};

CardNumberInput.propTypes = {
  cardNumber: PropTypes.objectOf(PropTypes.string).isRequired,
  selectedCardInfo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.oneOf([null])]),
    name: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
  setCardNumber: PropTypes.func.isRequired,
  isValidCardNumber: PropTypes.bool.isRequired,
  setValidCardNumber: PropTypes.func.isRequired,
  setSelectedCardInfo: PropTypes.func.isRequired,
};

export default CardNumberInput;
