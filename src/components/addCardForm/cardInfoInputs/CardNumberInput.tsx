import React, { forwardRef, Fragment } from 'react';
import { InputWrapper } from './template/InputWrapper';
import { ErrorMessage, Input } from './template/Input';
import styled from 'styled-components';
import { useErrorMessage } from '../../../hooks/useError';
import { MoveInputContainer } from '../MoveInputContainer';

interface Props {
  cardNumber: string[];
  setCardNumber: React.Dispatch<React.SetStateAction<string[]>>;
  focusCardNumberInputByIndex: (
    nextIndex: number,
    callback?: () => void
  ) => void;
  viewNextInput: () => void;
}

const cardNumberValidator = (input: string[] | string) => {
  if (typeof input === 'string') throw new Error('입력 타입이 다릅니다.');

  if (input.some((num) => num.length !== 4))
    throw new Error('모든 입력창을 채워주세요.');
  if (input.some((num) => !/^[0-9]+$|^$/.test(num)))
    throw new Error('카드 번호는 숫자만 입력해주세요.');
};

export const CardNumberInput = forwardRef<HTMLInputElement[], Props>(
  function CardNumberInput(
    { cardNumber, setCardNumber, focusCardNumberInputByIndex, viewNextInput },
    refs
  ) {
    const error = useErrorMessage(cardNumber, cardNumberValidator);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const index = e.target.dataset.index;

      if (index === undefined) return;

      setCardNumber((current) => {
        const newCardNumber = [...current];

        newCardNumber[Number(index)] = e.target.value.slice(0, 4);

        return newCardNumber;
      });

      if (e.target.value.length >= 4) {
        focusCardNumberInputByIndex(Number(index) + 1);
      }
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

    return (
      <div>
        <Style.Label>
          <Style.Title>카드 번호</Style.Title>
        </Style.Label>
        <InputWrapper width={318}>
          {cardNumber.map((_, index) => {
            return (
              <Fragment key={index}>
                <Input
                  ref={(element) => {
                    if (!(element instanceof HTMLInputElement)) return;
                    if (typeof refs !== 'object') return;
                    if (refs?.current) refs.current[index] = element;
                  }}
                  autoFocus={index === 0}
                  type={index > 1 ? 'password' : 'number'}
                  autoComplete="off"
                  value={cardNumber[index]}
                  width={'40'}
                  minLength={4}
                  maxLength={4}
                  inputMode="numeric"
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
              </Fragment>
            );
          })}
        </InputWrapper>
        <ErrorMessage>{error ?? ''}</ErrorMessage>
        <MoveInputContainer
          isLeftBtnShowed={false}
          isRightBtnShowed={error === null}
          viewNextInput={viewNextInput}
          progress={'1/5'}
        />
      </div>
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
