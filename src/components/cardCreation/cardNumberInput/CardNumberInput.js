import PropTypes from 'prop-types';
import { useRef, useEffect, useState, useContext } from 'react';
import { COLOR } from '../../../constants/color';
import { INPUT_NAME, INPUT_LENGTH } from '../../../constants/input';
import { NUMBER_REG_EXR } from '../../../constants/regExp';
import CardDataContext from '../../../context/CardDataContext';
import { MODAL_TYPE, useBottomModal } from '../../../hooks/useBottomModal';
import { hasObjectAnyValue } from '../../../utils/object';
import { printColorBasedOnBoolean } from '../../../utils/printColor';
import { TransparentInput } from '../../commons/input/TransparentInput';
import CardSelectionModal from '../cardSelectionModal/CardSelectionModal';
import VirtualKeyboard from '../virtualKeyboard/VirtualKeyboard';
import Styled from './CardNumberInput.style';

const { FIRST, SECOND, THIRD, FOURTH } = INPUT_NAME;

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

const CardNumberInput = ({ isValidCardNumber }) => {
  const { modalType, isModalOpened, openModal, closeModal, BottomModal } = useBottomModal();
  const [currentInputName, setCurrentInputName] = useState(null);
  const {
    cardInfo: { cardNumber, selectedCardInfo },
    editCardId,
    setCardInfo,
  } = useContext(CardDataContext);

  const [$firstInput, $secondInput, $thirdInput, $fourthInput] = [...Array(INPUT_LENGTH.CARD_NUMBER)].map(useRef);

  const isSelectedCardInfo = !!selectedCardInfo.cardId;

  useEffect(() => {
    const isValidInput = isValidCardNumber && isSelectedCardInfo;
    isValidInput && modalType === MODAL_TYPE.VIRTUAL_KEYBOARD && closeModal(MODAL_TYPE.VIRTUAL_KEYBOARD);

    if (currentInputName === THIRD && cardNumber[THIRD].length === INPUT_LENGTH.CARD_NUMBER) {
      $fourthInput.current.focus();
    }
  });

  useEffect(() => {
    isSelectedCardInfo && !$thirdInput.current.value && $thirdInput.current.focus();
  }, [isSelectedCardInfo, $thirdInput]);

  useEffect(() => {
    if (!editCardId) return;

    $secondInput.current.disabled = false;
  }, [editCardId, $secondInput]);

  const handleInputChange = ({ target }) => {
    if (target.value.length > INPUT_LENGTH.CARD_NUMBER || !NUMBER_REG_EXR.test(target.value)) return;

    setCardInfo(prevState => {
      const copiedCardNumber = { ...cardNumber };
      copiedCardNumber[target.name] = target.value;

      return { ...prevState, cardNumber: copiedCardNumber };
    });

    if (target.value.length !== INPUT_LENGTH.CARD_NUMBER) return;

    if (target.name === FIRST) {
      $secondInput.current.disabled = false;
      $secondInput.current.focus();

      return;
    }

    if (target.name === SECOND) {
      openModal(MODAL_TYPE.CARD_SELECTION);
      $secondInput.current.blur();
    }
  };

  const handleInputClick = () => {
    cardNumber[FIRST].length === INPUT_LENGTH.CARD_NUMBER &&
      cardNumber[SECOND].length === INPUT_LENGTH.CARD_NUMBER &&
      !isSelectedCardInfo &&
      openModal(MODAL_TYPE.CARD_SELECTION);
  };

  const handleInputFocus = ({ target }) => {
    setCardInfo(prevState => {
      const copiedCardNumber = { ...cardNumber };
      copiedCardNumber[target.name] = '';

      return { ...prevState, cardNumber: copiedCardNumber };
    });

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
            minLength={INPUT_LENGTH.CARD_NUMBER}
            maxLength={INPUT_LENGTH.CARD_NUMBER}
            value={cardNumber[FIRST]}
            onChange={handleInputChange}
            innerRef={$firstInput}
            styles={transparentInputStyles[FIRST]}
            autoFocus
          />
          {cardNumber[FIRST].length === INPUT_LENGTH.CARD_NUMBER && <Styled.Dash>-</Styled.Dash>}
          <TransparentInput
            name={SECOND}
            minLength={INPUT_LENGTH.CARD_NUMBER}
            maxLength={INPUT_LENGTH.CARD_NUMBER}
            value={cardNumber[SECOND]}
            onChange={handleInputChange}
            innerRef={$secondInput}
            styles={transparentInputStyles[SECOND]}
            disabled
          />
          {cardNumber[SECOND].length === INPUT_LENGTH.CARD_NUMBER && <Styled.Dash>-</Styled.Dash>}
          <TransparentInput
            name={THIRD}
            type="password"
            minLength={INPUT_LENGTH.CARD_NUMBER}
            maxLength={INPUT_LENGTH.CARD_NUMBER}
            value={cardNumber[THIRD]}
            onFocus={handleInputFocus}
            innerRef={$thirdInput}
            styles={transparentInputStyles[THIRD]}
            readOnly
          />
          {cardNumber[THIRD].length === INPUT_LENGTH.CARD_NUMBER && <Styled.Dash>-</Styled.Dash>}
          <TransparentInput
            name={FOURTH}
            type="password"
            minLength={INPUT_LENGTH.CARD_NUMBER}
            maxLength={INPUT_LENGTH.CARD_NUMBER}
            value={cardNumber[FOURTH]}
            onFocus={handleInputFocus}
            innerRef={$fourthInput}
            styles={transparentInputStyles[FOURTH]}
            readOnly
          />
        </Styled.InputContainer>
      </div>
      {modalType === MODAL_TYPE.CARD_SELECTION && isModalOpened && (
        <CardSelectionModal BottomModal={BottomModal} closeModal={closeModal} />
      )}
      {modalType === MODAL_TYPE.VIRTUAL_KEYBOARD && isModalOpened && isSelectedCardInfo && (
        <VirtualKeyboard
          BottomModal={BottomModal}
          closeModal={closeModal}
          currentInputName={currentInputName}
          inputValue={cardNumber}
          maxLength={INPUT_LENGTH.CARD_NUMBER}
          targetKey="cardNumber"
        />
      )}
    </>
  );
};

CardNumberInput.defaultProps = {
  isValidCardNumber: false,
};

CardNumberInput.propTypes = {
  isValidCardNumber: PropTypes.bool.isRequired,
};

export default CardNumberInput;
