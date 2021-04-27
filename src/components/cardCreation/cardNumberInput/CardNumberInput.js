import PropTypes from 'prop-types';
import { memo, useRef, useEffect, useState } from 'react';
import { COLOR } from '../../../constants/color';
import { CARD_INPUT } from '../../../constants/standard';
import { TransparentInput } from '../../commons/input/TransparentInput';
import CardSelectionModal from '../cardSelectionModal/CardSelectionModal';
import Styled from './CardNumberInput.style';

const transparentInputStyles = {
  0: {
    color: COLOR.MINT,
    paddingLeft: '14%',
    textAlign: 'center',
    width: '32%',
  },
  1: {
    color: COLOR.MINT,
    textAlign: 'center',
    width: '18%',
  },
  2: {
    color: COLOR.MINT,
    textAlign: 'center',
    width: '18%',
  },
  3: {
    color: COLOR.MINT,
    paddingRight: '14%',
    textAlign: 'center',
    width: '32%',
  },
};

const isInputFilledUp = input => {
  return input.length === CARD_INPUT.NUMBER_UNIT_LENGTH;
};

const isValidCardNumberInput = cardNumber => {
  return Object.values(cardNumber).every(cardNumber => isInputFilledUp(cardNumber) && !isNaN(cardNumber));
};

const CardNumberInput = memo(
  ({ cardNumber, selectedCardInfo, setCardNumber, isValidCardNumber, setValidCardNumber, setSelectedCardInfo }) => {
    const [isModalOpened, setModalOpen] = useState(false);

    const $input1 = useRef(null);
    const $input2 = useRef(null);
    const $input3 = useRef(null);

    const hasSelectedCardInfo = !!selectedCardInfo.id;

    useEffect(() => {
      const isValidInput = isValidCardNumberInput(cardNumber) && hasSelectedCardInfo;
      setValidCardNumber(isValidInput);
    }, [setValidCardNumber, cardNumber, hasSelectedCardInfo]);

    useEffect(() => {
      if (hasSelectedCardInfo) {
        $input2.current.disabled = false;
        $input2.current.focus();
      }
    }, [hasSelectedCardInfo]);

    const handleInputChange = ({ target }) => {
      if (target.value.length > CARD_INPUT.NUMBER_UNIT_LENGTH) return;

      setCardNumber(prevState => ({ ...prevState, [target.name]: target.value }));

      if (target.name === '0' && isInputFilledUp(target.value)) {
        $input1.current.disabled = false;
        $input1.current.focus();

        return;
      }

      if (target.name === '1' && isInputFilledUp(target.value)) {
        $input1.current.blur();
        setModalOpen(true);

        return;
      }

      if (target.name === '2' && isInputFilledUp(target.value)) {
        $input3.current.disabled = false;
        $input3.current.focus();
      }
    };

    const handleInputClick = () => {
      if (isInputFilledUp(cardNumber['0']) && isInputFilledUp(cardNumber['1']) && !hasSelectedCardInfo) {
        setModalOpen(true);
      }
    };

    return (
      <>
        <div>
          <Styled.InputLabelContainer>카드 번호 {isValidCardNumber && '✔️'}</Styled.InputLabelContainer>
          <Styled.InputContainer isValidInput={isValidCardNumber} onClick={handleInputClick}>
            <TransparentInput
              name="0"
              type="number"
              min="0"
              max="9999"
              value={cardNumber['0']}
              onChange={handleInputChange}
              styles={transparentInputStyles['0']}
              autoFocus
            />
            {isInputFilledUp(cardNumber['0']) && <Styled.Dash>-</Styled.Dash>}
            <TransparentInput
              name="1"
              type="number"
              min="0"
              max="9999"
              value={cardNumber['1']}
              onChange={handleInputChange}
              innerRef={$input1}
              styles={transparentInputStyles['1']}
              disabled
            />
            {isInputFilledUp(cardNumber['1']) && <Styled.Dash>-</Styled.Dash>}
            <TransparentInput
              name="2"
              type="password"
              minLength={CARD_INPUT.NUMBER_UNIT_LENGTH}
              maxLength={CARD_INPUT.NUMBER_UNIT_LENGTH}
              value={cardNumber['2']}
              onChange={handleInputChange}
              innerRef={$input2}
              styles={transparentInputStyles['2']}
              disabled
            />
            {isInputFilledUp(cardNumber['2']) && <Styled.Dash>-</Styled.Dash>}
            <TransparentInput
              name="3"
              type="password"
              minLength={CARD_INPUT.NUMBER_UNIT_LENGTH}
              maxLength={CARD_INPUT.NUMBER_UNIT_LENGTH}
              value={cardNumber['3']}
              onChange={handleInputChange}
              innerRef={$input3}
              styles={transparentInputStyles['3']}
              disabled
            />
          </Styled.InputContainer>
        </div>
        {isModalOpened && (
          <CardSelectionModal closeModal={() => setModalOpen(false)} setSelectedCardInfo={setSelectedCardInfo} />
        )}
      </>
    );
  }
);

CardNumberInput.propTypes = {
  cardNumber: PropTypes.object.isRequired,
  selectedCardInfo: PropTypes.object.isRequired,
  setCardNumber: PropTypes.func.isRequired,
  isValidCardNumber: PropTypes.bool.isRequired,
  setValidCardNumber: PropTypes.func.isRequired,
  setSelectedCardInfo: PropTypes.func.isRequired,
};

export default CardNumberInput;
