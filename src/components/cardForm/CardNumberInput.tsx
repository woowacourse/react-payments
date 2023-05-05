import React, { useContext, useRef } from 'react';
import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';
import InputSeparator from '../common/InputSeparator';
import {
  isNextInputFocusable,
  isInputNumber,
  isOverLength,
} from '../../utils/InputValidate';
import { ERROR_MESSAGE, INPUT, INPUT_MAX_LENGTH } from '../../utils/Constants';
import {
  CardFormErrorValueContext,
  CardFormValueContext,
} from '../../context/CardFormContext';

const CardNumberInput = () => {
  const { cardNumber, setCardNumber } = useContext(CardFormValueContext);
  const { cardNumberError, setCardNumberError } = useContext(
    CardFormErrorValueContext
  );
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleChangeInput =
    (inputIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;

      if (isOverLength(inputValue, INPUT_MAX_LENGTH.CARD_NUMBER_LENGTH)) return;
      if (isInputNumber(inputValue, INPUT_MAX_LENGTH.CARD_NUMBER_LENGTH)) {
        setCardNumberError(ERROR_MESSAGE.ONLY_NUMBER);
        return;
      }

      if (
        isNextInputFocusable({
          inputValue,
          inputIndex,
          maxLength: INPUT_MAX_LENGTH.CARD_NUMBER_LENGTH,
        })
      ) {
        const nextInputRef = inputRefs.at(inputIndex + 1);
        if (nextInputRef?.current) {
          nextInputRef.current.focus();
        }
      }

      const newCardNumber = [...cardNumber];
      newCardNumber[inputIndex] = inputValue;

      setCardNumber(newCardNumber);
      setCardNumberError('');
    };

  return (
    <InputGroup labelValue='카드 번호' errorMessage={cardNumberError}>
      <InputBox isError={!!cardNumberError}>
        {Array.from({ length: INPUT_MAX_LENGTH.CARD_NUMBER_LENGTH }).map(
          (_, index) => (
            <React.Fragment key={index}>
              <Input
                placeholder='0000'
                ref={inputRefs[index]}
                value={cardNumber[index]}
                type={
                  index >= INPUT.CARD_NUMBER_VISIBLE_INPUT_ORDER
                    ? 'password'
                    : 'text'
                }
                onChange={handleChangeInput(index)}
              />
              {index < INPUT.CARD_NUMBER_LAST_INPUT_ORDER && (
                <InputSeparator
                  isActive={
                    cardNumber[index].length ===
                    INPUT_MAX_LENGTH.CARD_NUMBER_LENGTH
                  }
                >
                  -
                </InputSeparator>
              )}
            </React.Fragment>
          )
        )}
      </InputBox>
    </InputGroup>
  );
};

export default CardNumberInput;
