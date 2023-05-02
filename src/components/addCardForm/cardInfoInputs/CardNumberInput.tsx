import React, { Fragment } from 'react';
import { InputWrapper } from './template/InputWrapper';
import { ErrorMessage, Input } from './template/Input';
import styled from 'styled-components';
import { useErrorMessage } from '../../../hooks/useError';
import { MoveInputContainer } from '../MoveInputContainer';
import {
  useCardInfoActionContext,
  useCardInfoValueContext,
} from '../../../hooks/cardInfoContext';
import { useFocus } from '../../../hooks/useFocus';

interface Props {
  viewNextInput: () => void;
}

const cardNumberValidator = (input: string[] | string) => {
  if (typeof input === 'string') throw new Error('입력 타입이 다릅니다.');

  if (input.some((num) => num.length !== 4))
    throw new Error('모든 입력창을 채워주세요.');
  if (input.some((num) => !/^[0-9]+$|^$/.test(num)))
    throw new Error('카드 번호는 숫자만 입력해주세요.');
};

export const CardNumberInput = ({ viewNextInput }: Props) => {
  const { inputRefs, focusInputByIndex } = useFocus(4);

  const { setCardNumber } = useCardInfoActionContext();
  const { cardNumber } = useCardInfoValueContext();

  const error = useErrorMessage(cardNumber, cardNumberValidator);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = e.target.dataset.index;

    if (index === undefined) return;

    setCardNumber(Number(index), e.target.value);

    if (e.target.value.length >= 4) {
      focusInputByIndex(Number(index) + 1);
    }
  };

  const handlePressBackspace = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    const index = e.target.dataset.index;

    if (index === undefined) return;

    if (e.key === 'Backspace' && cardNumber[Number(index)] === '') {
      e.preventDefault();

      focusInputByIndex(Number(index) - 1);
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
                  inputRefs.current[index] = element;
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
        isLeftBtnShown={false}
        isRightBtnShown={error === null}
        viewNextInput={viewNextInput}
        progress={'1/5'}
      />
    </div>
  );
};

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
