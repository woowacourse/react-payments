import React, { Fragment, useRef } from 'react';
import styled from 'styled-components';
import { Input } from './Input';
import { InputContainer } from './InputContainer';
import { useCardNumberInput } from '../../hooks/input/useCardNumberInput';
import { isLast } from '../../utils';
import { CardNumber } from '../../types';
import { CARD_NUMBER_INPUTS_LENGTH, CARD_NUMBER_INPUT_SIZE } from '../../constants';

interface Props {
  cardNumberInputRef: React.RefObject<HTMLInputElement>;
  cardNumber: CardNumber;
  caption?: string;
  setCardNumber: (input: CardNumber) => void;
  moveFocusToExpirationDate?: () => void;
}

export function CardNumberInput({
  cardNumberInputRef,
  cardNumber,
  setCardNumber,
  moveFocusToExpirationDate,
}: Props) {
  const allRef = [
    cardNumberInputRef,
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const {
    isFullInputs,
    cardNumberError,
    updateCardNumberError,
    isPasswordInput,
    handleCardNumberInputChange,
    handleBackspacePress,
  } = useCardNumberInput({ cardNumber, allRef, setCardNumber, moveFocusToExpirationDate });

  return (
    <Style.Container onBlur={updateCardNumberError}>
      <Style.Label htmlFor='cardNumber0'>
        <Style.Title>
          카드 번호<Style.Essential>*</Style.Essential>
        </Style.Title>
      </Style.Label>
      <InputContainer width={'318px'}>
        {Array.from({ length: cardNumber.length }).map((_, index) => {
          return (
            <Fragment key={index}>
              <Input
                id={`cardNumber${index}`}
                value={cardNumber[index]}
                width={'36px'}
                minLength={CARD_NUMBER_INPUT_SIZE}
                maxLength={CARD_NUMBER_INPUT_SIZE}
                required
                inputMode='numeric'
                type={isPasswordInput(index) ? 'password' : 'text'}
                ref={allRef[index]}
                onChange={(e) => handleCardNumberInputChange(index, e)}
                onKeyDown={(e) => handleBackspacePress(index, e)}
                placeholder={isPasswordInput(index) ? '••••' : '0000'}
                aria-labelledby='cardNumberCaption'
              />
              {!isLast(index, CARD_NUMBER_INPUTS_LENGTH) && (
                <Style.Hyphen visible={isFullInputs[index]}>-</Style.Hyphen>
              )}
            </Fragment>
          );
        })}
      </InputContainer>
      <Style.Caption id='cardNumberCaption' aria-live='assertive'>
        {cardNumberError}
      </Style.Caption>
    </Style.Container>
  );
}

const Style = {
  Container: styled.fieldset`
    border: none;
  `,

  Label: styled.label`
    display: flex;
    justify-content: space-between;

    width: 318px;
    margin-bottom: 10px;

    font-size: 12px;
  `,

  Title: styled.span`
    color: #2f2f2f;
  `,

  Essential: styled.span`
    color: red;
  `,

  Hyphen: styled.span<{ visible: boolean }>`
    padding: 0 10px;
    visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  `,

  Caption: styled.p`
    height: 8px;
    margin-top: 8px;

    font-size: 10px;
    color: #db5959;
  `,
};
