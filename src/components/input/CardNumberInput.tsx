import React, { useEffect, forwardRef } from 'react';
import { InputWrapper } from './template/InputWrapper';
import { Input } from './template/Input';
import styled from 'styled-components';

interface Props {
  cardNumber: string[];
  setCardNumber: React.Dispatch<React.SetStateAction<string[]>>;
  focusCardNumberInputByIndex: (nextIndex: number) => void;
  focusFirstCardNumberInput: () => void;
}

export const CardNumberInput = forwardRef<HTMLInputElement[], Props>(
  function CardNumberInput(
    {
      cardNumber,
      setCardNumber,
      focusCardNumberInputByIndex,
      focusFirstCardNumberInput,
    },
    refs
  ) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const index = e.target.dataset.index;

      if (index === undefined) return;

      validator(e.target.value, Number(index));

      setCardNumber((current) => {
        const newCardNumber = [...current];

        newCardNumber[Number(index)] = e.target.value;

        return newCardNumber;
      });

      if (e.target.value.length === 4) {
        focusCardNumberInputByIndex(Number(index) + 1);
      }
    };

    const validator = (input: string, index: number) => {
      if (/^[0-9]+$|^$/.test(input)) return;

      setCardNumber((current) => {
        const newCardNumber = [...current];

        newCardNumber[Number(index)] = '';

        return newCardNumber;
      });

      alert('유효하지 않은 카드 번호입니다.');

      focusCardNumberInputByIndex(index);
    };

    const handlePressBackspace = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!(e.target instanceof HTMLInputElement)) return;

      const index = e.target.dataset.index;

      if (index === undefined) return;

      if (e.key === 'Backspace' && cardNumber[Number(index)] === '') {
        e.preventDefault();

        focusCardNumberInputByIndex(Number(index) - 1);
      }
    };

    useEffect(() => {
      focusFirstCardNumberInput();
    }, []);

    return (
      <>
        <Style.Label>
          <Style.Title>카드 번호</Style.Title>
        </Style.Label>
        <InputWrapper width={318}>
          {cardNumber.map((_, index) => {
            return (
              <>
                <Input
                  type={index > 1 ? 'password' : 'text'}
                  value={cardNumber[index]}
                  width={'36'}
                  minLength={4}
                  maxLength={4}
                  inputMode="numeric"
                  ref={(element) => {
                    if (!(element instanceof HTMLInputElement)) return;
                    if (typeof refs !== 'object') return;
                    if (refs?.current) refs.current[index] = element;
                  }}
                  data-index={index}
                  onChange={handleInputChange}
                  onKeyDown={handlePressBackspace}
                  required
                />
                {index < 3 && (
                  <Style.Hyphen
                    style={{
                      visibility:
                        cardNumber[index].length === 4 ? 'visible' : 'hidden',
                    }}
                  >
                    &nbsp;-&nbsp;
                  </Style.Hyphen>
                )}
              </>
            );
          })}
        </InputWrapper>
      </>
    );
  }
);

const Style = {
  Label: styled.div`
    width: 318px;

    display: flex;
    justify-content: space-between;

    font-size: 12px;
  `,
  Title: styled.span`
    color: #2f2f2f;
  `,
  Hyphen: styled.span``,
};
