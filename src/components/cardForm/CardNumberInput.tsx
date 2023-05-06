import React, { useContext, useRef } from 'react';
import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';
import InputSeparator from '../common/InputSeparator';
import { INPUT, INPUT_MAX_LENGTH } from '../../utils/Constants';
import {
  CardFormErrorValueContext,
  CardFormValueContext,
} from '../../context/CardFormContext';
import { useMultipleInput } from '../../hooks/useMultipleInput';

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

  const mutableInputRefs = inputRefs.map(
    (inputRef) => inputRef as React.MutableRefObject<HTMLInputElement>
  );

  const { value, errorMessage, handleChangeInput } = useMultipleInput(
    inputRefs.length,
    mutableInputRefs,
    INPUT_MAX_LENGTH.CARD_NUMBER_LENGTH
  );

  setCardNumber(value);
  setCardNumberError(errorMessage);

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
