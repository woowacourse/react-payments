import PropTypes from 'prop-types';
import { memo, useRef, useEffect, useState } from 'react';
import { COLOR } from '../../../constants/color';
import { CARD_NUMBER_INPUT } from '../../../constants/input';
import { TransparentInput } from '../../commons/input/TransparentInput';
import CardSelectionModal from '../cardSelectionModal/CardSelectionModal';
import Styled from './CardNumberInput.style';

const transparentInputStyles = {
  [CARD_NUMBER_INPUT.NAME.FIRST]: {
    color: COLOR.MINT,
    paddingLeft: '14%',
    textAlign: 'center',
    width: '32%',
  },
  [CARD_NUMBER_INPUT.NAME.SECOND]: {
    color: COLOR.MINT,
    textAlign: 'center',
    width: '18%',
  },
  [CARD_NUMBER_INPUT.NAME.THIRD]: {
    color: COLOR.MINT,
    textAlign: 'center',
    width: '18%',
    fontSize: '24px',
  },
  [CARD_NUMBER_INPUT.NAME.FOURTH]: {
    color: COLOR.MINT,
    paddingRight: '14%',
    textAlign: 'center',
    width: '32%',
    fontSize: '24px',
  },
};

const isValidCardNumberInput = cardNumber => {
  return Object.values(cardNumber).every(
    cardNumber => cardNumber.length === CARD_NUMBER_INPUT.LENGTH && !isNaN(cardNumber)
  );
};

const CardNumberInput = memo(
  ({ cardNumber, selectedCardInfo, setCardNumber, isValidCardNumber, setValidCardNumber, setSelectedCardInfo }) => {
    const [isModalOpened, setModalOpen] = useState(false);

    const $input1 = useRef(null);
    const $input2 = useRef(null);
    const $input3 = useRef(null);

    const isSelectedCardInfo = !!selectedCardInfo.id;

    useEffect(() => {
      const isValidInput = isValidCardNumberInput(cardNumber) && isSelectedCardInfo;
      setValidCardNumber(isValidInput);
    }, [setValidCardNumber, cardNumber, isSelectedCardInfo]);

    useEffect(() => {
      if (isSelectedCardInfo) {
        $input2.current.disabled = false;
        $input2.current.focus();
      }
    }, [isSelectedCardInfo]);

    const handleInputChange = ({ target }) => {
      if (target.value.length > CARD_NUMBER_INPUT.LENGTH) return;

      setCardNumber(prevState => ({ ...prevState, [target.name]: target.value }));

      if (target.value.length === CARD_NUMBER_INPUT.LENGTH) {
        switch (target.name) {
          case CARD_NUMBER_INPUT.NAME.FIRST:
            $input1.current.disabled = false;
            $input1.current.focus();

            break;
          case CARD_NUMBER_INPUT.NAME.SECOND:
            setModalOpen(true);

            break;
          case CARD_NUMBER_INPUT.NAME.THIRD:
            $input3.current.disabled = false;
            $input3.current.focus();

            break;
          default:
            break;
        }
      }
    };

    const handleInputClick = () => {
      if (
        cardNumber[CARD_NUMBER_INPUT.NAME.FIRST].length === CARD_NUMBER_INPUT.LENGTH &&
        cardNumber[CARD_NUMBER_INPUT.NAME.SECOND].length === CARD_NUMBER_INPUT.LENGTH &&
        !isSelectedCardInfo
      ) {
        setModalOpen(true);
      }
    };

    return (
      <>
        <div>
          <Styled.InputLabelContainer>카드 번호 {isValidCardNumber && '✔️'}</Styled.InputLabelContainer>
          <Styled.InputContainer isValidInput={isValidCardNumber} onClick={handleInputClick}>
            <TransparentInput
              type="number"
              name={CARD_NUMBER_INPUT.NAME.FIRST}
              min={CARD_NUMBER_INPUT.RANGE.MIN}
              max={CARD_NUMBER_INPUT.RANGE.MAX}
              value={cardNumber[CARD_NUMBER_INPUT.NAME.FIRST]}
              onChange={handleInputChange}
              styles={transparentInputStyles[CARD_NUMBER_INPUT.NAME.FIRST]}
              autoFocus
            />
            {cardNumber[CARD_NUMBER_INPUT.NAME.FIRST].length === 4 && <Styled.Dash>-</Styled.Dash>}
            <TransparentInput
              type="number"
              name={CARD_NUMBER_INPUT.NAME.SECOND}
              min={CARD_NUMBER_INPUT.RANGE.MIN}
              max={CARD_NUMBER_INPUT.RANGE.MAX}
              value={cardNumber[CARD_NUMBER_INPUT.NAME.SECOND]}
              onChange={handleInputChange}
              innerRef={$input1}
              styles={transparentInputStyles[CARD_NUMBER_INPUT.NAME.SECOND]}
              disabled
            />
            {cardNumber[CARD_NUMBER_INPUT.NAME.SECOND].length === 4 && <Styled.Dash>-</Styled.Dash>}
            <TransparentInput
              type="password"
              name={CARD_NUMBER_INPUT.NAME.THIRD}
              minLength={CARD_NUMBER_INPUT.LENGTH}
              maxLength={CARD_NUMBER_INPUT.LENGTH}
              value={cardNumber[CARD_NUMBER_INPUT.NAME.THIRD]}
              onChange={handleInputChange}
              innerRef={$input2}
              styles={transparentInputStyles[CARD_NUMBER_INPUT.NAME.THIRD]}
              disabled
            />
            {cardNumber[CARD_NUMBER_INPUT.NAME.THIRD].length === 4 && <Styled.Dash>-</Styled.Dash>}
            <TransparentInput
              type="password"
              name={CARD_NUMBER_INPUT.NAME.FOURTH}
              minLength={CARD_NUMBER_INPUT.LENGTH}
              maxLength={CARD_NUMBER_INPUT.LENGTH}
              value={cardNumber[CARD_NUMBER_INPUT.NAME.FOURTH]}
              onChange={handleInputChange}
              innerRef={$input3}
              styles={transparentInputStyles[CARD_NUMBER_INPUT.NAME.FOURTH]}
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
