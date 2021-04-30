import PropTypes from 'prop-types';
import { memo, useRef, useEffect, useState } from 'react';
import { COLOR } from '../../../constants/color';
import { CARD_INPUT } from '../../../constants/standard';
import { isInputFilledUp } from '../../../utils/isInputFilledUp';
import { isValidCard } from '../../../validations/card';
import { TransparentInput } from '../../commons/input/TransparentInput';
import { DecimalKeyboard } from '../../commons/keyboard/DecimalKeyboard';
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

const isCardNumberFilledUp = input => {
  return isInputFilledUp(input, CARD_INPUT.NUMBER_UNIT_LENGTH);
};

const CardNumberInput = memo(({ cardNumber, selectedCardInfo, setCardNumber, setSelectedCardInfo }) => {
  const [isModalOpened, setModalOpen] = useState(false);
  const [isKeyboardOpened, setKeyboardOpen] = useState(false);
  const [input2, setInput2] = useState(''); // 보안 숫자 입력
  const [input3, setInput3] = useState(''); // 보안 숫자 입력
  const isValidCardNumber = isValidCard.Number(cardNumber);

  const $input1 = useRef(null);
  const $input2 = useRef(null);
  const $input3 = useRef(null);

  const hasSelectedCardInfo = !!selectedCardInfo.id;

  useEffect(() => {
    if (hasSelectedCardInfo) {
      $input2.current.disabled = false;
      $input2.current.focus();
    }
  }, [hasSelectedCardInfo]);

  useEffect(() => {
    setCardNumber(prevState => ({ ...prevState, 2: input2 }));

    if (isCardNumberFilledUp(input2)) {
      $input3.current.disabled = false;
      isCardNumberFilledUp($input3.current.value) ? setKeyboardOpen(false) : $input3.current.focus();
    }
  }, [input2, setCardNumber]);

  useEffect(() => {
    setCardNumber(prevState => ({ ...prevState, 3: input3 }));

    if (isCardNumberFilledUp(input3)) {
      setKeyboardOpen(false);
    }
  }, [input3, setCardNumber]);

  const handleNormalInputChange = ({ target }) => {
    if (target.value.length > CARD_INPUT.NUMBER_UNIT_LENGTH) return;

    setCardNumber(prevState => ({ ...prevState, [target.name]: target.value }));

    if (target.name === '0' && isCardNumberFilledUp(target.value)) {
      $input1.current.disabled = false;
      $input1.current.focus();

      return;
    }

    if (target.name === '1' && isCardNumberFilledUp(target.value)) {
      $input1.current.blur();
      setModalOpen(true);

      return;
    }
  };

  const handleInputClick = () => {
    if (isCardNumberFilledUp(cardNumber['0']) && isCardNumberFilledUp(cardNumber['1']) && !hasSelectedCardInfo) {
      setModalOpen(true);
    }
  };

  const handleSecurityInputFocus = ({ target }) => {
    setKeyboardOpen(true);

    if (target.name === '2') {
      setInput2('');

      return;
    }

    if (target.name === '3') {
      setInput3('');

      return;
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
            inputmode="numeric"
            value={cardNumber['0']}
            onChange={handleNormalInputChange}
            styles={transparentInputStyles['0']}
            autoFocus
          />
          {isCardNumberFilledUp(cardNumber['0']) && <Styled.Dash>-</Styled.Dash>}
          <TransparentInput
            name="1"
            type="number"
            min="0"
            max="9999"
            inputmode="numeric"
            value={cardNumber['1']}
            onChange={handleNormalInputChange}
            innerRef={$input1}
            styles={transparentInputStyles['1']}
            disabled
          />
          {isCardNumberFilledUp(cardNumber['1']) && <Styled.Dash>-</Styled.Dash>}
          <TransparentInput
            name="2"
            type="password"
            inputmode="none"
            minLength={CARD_INPUT.NUMBER_UNIT_LENGTH}
            maxLength={CARD_INPUT.NUMBER_UNIT_LENGTH}
            value={input2}
            innerRef={$input2}
            onFocus={handleSecurityInputFocus}
            styles={transparentInputStyles['2']}
            disabled
            readOnly
          />
          {isCardNumberFilledUp(cardNumber['2']) && <Styled.Dash>-</Styled.Dash>}
          <TransparentInput
            name="3"
            type="password"
            inputmode="none"
            minLength={CARD_INPUT.NUMBER_UNIT_LENGTH}
            maxLength={CARD_INPUT.NUMBER_UNIT_LENGTH}
            value={input3}
            innerRef={$input3}
            onFocus={handleSecurityInputFocus}
            styles={transparentInputStyles['3']}
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
          setInput={isCardNumberFilledUp(input2) ? setInput3 : setInput2}
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
