import PropTypes from 'prop-types';
import { memo, useRef, useEffect, useState } from 'react';
import { COLOR, CARD_INPUT, INPUT } from '../../../constants';
import { isInputFilledUp } from '../../../utils/isInputFilledUp';
import { CardValidator } from '../../../validations/card';
import { TransparentInput } from '../../commons/input/TransparentInput';
import { DecimalKeyboard } from '../../commons/keyboard/DecimalKeyboard';
import CardSelectionModal from '../cardSelectionModal/CardSelectionModal';
import Styled from './CardNumberInput.style';

const transparentInputStyles = {
  [INPUT.FIRST]: {
    color: COLOR.MINT,
    paddingLeft: '14%',
    textAlign: 'center',
    width: '32%',
  },
  [INPUT.SECOND]: {
    color: COLOR.MINT,
    textAlign: 'center',
    width: '18%',
  },
  [INPUT.THIRD]: {
    color: COLOR.MINT,
    textAlign: 'center',
    width: '18%',
  },
  [INPUT.FOURTH]: {
    color: COLOR.MINT,
    paddingRight: '14%',
    textAlign: 'center',
    width: '32%',
  },
};

const isCardNumberFilledUp = input => {
  return isInputFilledUp(input, CARD_INPUT.NUMBER_UNIT_LENGTH);
};

const CardNumberInput = memo(({ cardNumber, selectedCardInfo, setCardNumber, setSelectedCardInfo }) => {
  const [isModalOpened, setModalOpen] = useState(false);
  const [isKeyboardOpened, setKeyboardOpen] = useState(false);
  const [firstSecurityInput, setFirstSecurityInput] = useState('');
  const [secondSeurityInput, setSecondSeurityInput] = useState('');
  const CardValidatorNumber = CardValidator.Number(cardNumber);

  const $secondNormalInput = useRef(null);
  const $firstSecurityInput = useRef(null);
  const $secondSeurityInput = useRef(null);

  const hasSelectedCardInfo = !!selectedCardInfo.id;

  useEffect(() => {
    if (hasSelectedCardInfo) {
      $firstSecurityInput.current.disabled = false;
      $firstSecurityInput.current.focus();
    }
  }, [hasSelectedCardInfo]);

  useEffect(() => {
    setCardNumber(prevState => ({ ...prevState, [INPUT.THIRD]: firstSecurityInput }));

    if (isCardNumberFilledUp(firstSecurityInput)) {
      $secondSeurityInput.current.disabled = false;
      isCardNumberFilledUp($secondSeurityInput.current.value)
        ? setKeyboardOpen(false)
        : $secondSeurityInput.current.focus();
    }
  }, [firstSecurityInput, setCardNumber]);

  useEffect(() => {
    setCardNumber(prevState => ({ ...prevState, [INPUT.FOURTH]: secondSeurityInput }));

    if (isCardNumberFilledUp(secondSeurityInput)) {
      setKeyboardOpen(false);
    }
  }, [secondSeurityInput, setCardNumber]);

  const handleNormalInputChange = ({ target }) => {
    if (target.value.length > CARD_INPUT.NUMBER_UNIT_LENGTH) return;

    setCardNumber(prevState => ({ ...prevState, [target.name]: target.value }));

    if (target.name === INPUT.FIRST && isCardNumberFilledUp(target.value)) {
      $secondNormalInput.current.disabled = false;
      $secondNormalInput.current.focus();

      return;
    }

    if (target.name === INPUT.SECOND && isCardNumberFilledUp(target.value)) {
      $secondNormalInput.current.blur();
      setModalOpen(true);

      return;
    }
  };

  const handleInputClick = () => {
    if (
      isCardNumberFilledUp(cardNumber[INPUT.FIRST]) &&
      isCardNumberFilledUp(cardNumber[INPUT.SECOND]) &&
      !hasSelectedCardInfo
    ) {
      setModalOpen(true);
    }
  };

  const handleSecurityInputFocus = ({ target }) => {
    setKeyboardOpen(true);
    if (target.name === INPUT.THIRD) {
      setFirstSecurityInput('');

      return;
    }

    if (target.name === INPUT.FOURTH) {
      setSecondSeurityInput('');

      return;
    }
  };

  return (
    <>
      <div>
        <Styled.InputLabelContainer>카드 번호 {CardValidatorNumber && '✔️'}</Styled.InputLabelContainer>
        <Styled.InputContainer isValidInput={CardValidatorNumber} onClick={handleInputClick}>
          <TransparentInput
            name={INPUT.FIRST}
            type="number"
            min="0"
            max="9999"
            inputmode="numeric"
            value={cardNumber[INPUT.FIRST]}
            onChange={handleNormalInputChange}
            styles={transparentInputStyles[INPUT.FIRST]}
            autoFocus
          />
          {isCardNumberFilledUp(cardNumber[INPUT.FIRST]) && <Styled.Dash>-</Styled.Dash>}
          <TransparentInput
            name={INPUT.SECOND}
            type="number"
            min="0"
            max="9999"
            inputmode="numeric"
            value={cardNumber[INPUT.SECOND]}
            onChange={handleNormalInputChange}
            innerRef={$secondNormalInput}
            styles={transparentInputStyles[INPUT.SECOND]}
            disabled
          />
          {isCardNumberFilledUp(cardNumber[INPUT.SECOND]) && <Styled.Dash>-</Styled.Dash>}
          <TransparentInput
            name={INPUT.THIRD}
            type="password"
            inputmode="none"
            minLength={CARD_INPUT.NUMBER_UNIT_LENGTH}
            maxLength={CARD_INPUT.NUMBER_UNIT_LENGTH}
            value={firstSecurityInput}
            innerRef={$firstSecurityInput}
            onFocus={handleSecurityInputFocus}
            styles={transparentInputStyles[INPUT.THIRD]}
            disabled
            readOnly
          />
          {isCardNumberFilledUp(cardNumber[INPUT.THIRD]) && <Styled.Dash>-</Styled.Dash>}
          <TransparentInput
            name={INPUT.FOURTH}
            type="password"
            inputmode="none"
            minLength={CARD_INPUT.NUMBER_UNIT_LENGTH}
            maxLength={CARD_INPUT.NUMBER_UNIT_LENGTH}
            value={secondSeurityInput}
            innerRef={$secondSeurityInput}
            onFocus={handleSecurityInputFocus}
            styles={transparentInputStyles[INPUT.FOURTH]}
            disabled
            readOnly
          />
        </Styled.InputContainer>
      </div>
      {isModalOpened && (
        <CardSelectionModal closeModal={() => setModalOpen(false)} setSelectedCardInfo={setSelectedCardInfo} />
      )}
      {isKeyboardOpened && (
        <DecimalKeyboard
          closeKeyboard={() => setKeyboardOpen(false)}
          setInput={isCardNumberFilledUp(firstSecurityInput) ? setSecondSeurityInput : setFirstSecurityInput}
          maxLength={CARD_INPUT.NUMBER_UNIT_LENGTH}
        />
      )}
    </>
  );
});

CardNumberInput.propTypes = {
  cardNumber: PropTypes.object.isRequired,
  selectedCardInfo: PropTypes.object.isRequired,
  setCardNumber: PropTypes.func.isRequired,
  setSelectedCardInfo: PropTypes.func.isRequired,
};

export default CardNumberInput;
