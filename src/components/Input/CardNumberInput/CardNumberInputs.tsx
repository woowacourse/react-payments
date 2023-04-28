import React, { ChangeEvent, ChangeEventHandler } from 'react';
import { validateInput } from 'util/Validation';
import { ValueAndOnChange } from '../types';
import { Input } from 'components/common';
import FormLabel from 'components/common/FormLabel/FormLabel';
import { Styled as S } from './CardNumberInputs.styles';

interface CardNumberInputProps {
  valueAndOnChanges: ValueAndOnChange[];
}

const DEFAULT_CARD_NUMBER = '0000';
const FIRST_BOX = 0;
const THIRD_BOX = 2;

export function CardNumberInputs({ valueAndOnChanges }: CardNumberInputProps) {
  const inputRefs = valueAndOnChanges.map(() => React.createRef<HTMLInputElement>());

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
    onChange?: ChangeEventHandler<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    if (validateInput(value)) return;

    const isLast = inputRefs.length - 1 === index;
    const isInputMaxLength = value.trim().length === e.target.maxLength;

    if (!isLast && isInputMaxLength) {
      inputRefs[index + 1].current?.focus();
    }

    onChange && onChange(e);
  };

  return (
    <>
      <FormLabel>카드 번호</FormLabel>
      <S.CardNumberContainer>
        {valueAndOnChanges.map(({ value, onChange }, index) => {
          return (
            <>
              <Input
                ref={inputRefs[index]}
                inputMode="numeric"
                value={value}
                type={index < THIRD_BOX ? 'text' : 'password'}
                maxLength={4}
                onChange={(e) => handleChange(e, index, onChange)}
                placeholder={DEFAULT_CARD_NUMBER}
                autoFocus={index === FIRST_BOX ? true : false}
                required
              />
              {index < valueAndOnChanges.length - 1 && <span>-</span>}
            </>
          );
        })}
      </S.CardNumberContainer>
    </>
  );
}
