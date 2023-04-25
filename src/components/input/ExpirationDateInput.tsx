import { forwardRef, useEffect } from 'react';
import { InputWrapper } from './template/InputWrapper';
import { Input } from './template/Input';
import styled from 'styled-components';
import { useError } from '../../hooks/useError';

interface Props {
  expirationDate: {
    month: string;
    year: string;
  };
  setExpirationDate: React.Dispatch<
    React.SetStateAction<{
      month: string;
      year: string;
    }>
  >;
  focusNextExpirationDateInput: (index: number, callback?: () => void) => void;
  focusexpirationDateInput: () => void;
  viewNextInput: () => void;
  viewPreviousInput: () => void;
}

const expirationDateInputValidator = (input: string | string[]) => {
  if (typeof input === 'string') throw new Error('입력 객체 에러');

  const inputYear = Number(input[1]);
  const inputMonth = Number(input[0]);
  const currentYear = new Date().getFullYear() % 100;
  const currentMonth = new Date().getMonth() + 1;

  if (input.some((num) => num.length === 0))
    throw new Error('모든 입력창을 채워주세요.');

  if (inputMonth > 12 || inputMonth < 1)
    throw new Error('유효한 날짜를 입력해주세요');

  if (currentYear > inputYear)
    throw new Error('만료 일자는 현재 날짜보다 이후여야 합니다.');

  if (currentYear === inputYear && currentMonth > inputMonth)
    throw new Error('만료 일자는 현재 날짜보다 이후여야 합니다.');
};

export const ExpirationDateInput = forwardRef<HTMLInputElement[], Props>(
  function ExpirationDateInput(
    {
      expirationDate,
      setExpirationDate,
      focusNextExpirationDateInput,
      focusexpirationDateInput,
      viewNextInput,
      viewPreviousInput,
    },
    refs
  ) {
    const error = useError(
      [expirationDate.month, expirationDate.year],
      expirationDateInputValidator
    );

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputTarget = e.target.dataset.inputTarget;
      const index = e.target.dataset.index;

      if (index === undefined || inputTarget === undefined) return;

      setExpirationDate({
        ...expirationDate,
        [inputTarget]: e.target.value,
      });

      if (e.target.value.length >= 2)
        focusNextExpirationDateInput(Number(index) + 1);
    };

    const handleBackspacePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!(e.target instanceof HTMLInputElement)) return;

      const index = e.target.dataset.index;

      if (index === undefined) return;

      if (e.key === 'Backspace' && e.target.value === '')
        focusNextExpirationDateInput(Number(index) - 1, viewPreviousInput);
    };

    useEffect(() => {
      focusexpirationDateInput();

      setExpirationDate({
        month: '',
        year: '',
      });
    }, [focusexpirationDateInput, setExpirationDate]);

    useEffect(() => {
      if (error === null) viewNextInput();
    }, [error, viewNextInput]);

    return (
      <div>
        <Style.Label>
          <Style.Title>만료일</Style.Title>
        </Style.Label>
        <InputWrapper width={137}>
          <Input
            ref={(element) => {
              if (element === null) return;
              if (typeof refs !== 'object') return;
              if (refs?.current) refs.current[0] = element;
            }}
            type="number"
            value={expirationDate.month}
            data-input-target={'month'}
            width={'30'}
            required
            inputMode="numeric"
            placeholder="MM"
            data-index="0"
            onChange={handleChangeInput}
            onKeyDown={handleBackspacePress}
            onBlur={(e) => {
              if (e.target.value.length === 1 && e.target.value !== '0') {
                setExpirationDate({
                  ...expirationDate,
                  month: e.target.value.padStart(2, '0'),
                });
              }
            }}
          />
          &nbsp;/&nbsp;
          <Input
            ref={(element) => {
              if (element === null) return;
              if (typeof refs !== 'object') return;
              if (refs?.current) refs.current[1] = element;
            }}
            type="number"
            value={expirationDate.year}
            data-input-target={'year'}
            width={'30'}
            required
            inputMode="numeric"
            placeholder="YY"
            data-index="1"
            onChange={handleChangeInput}
            onKeyDown={handleBackspacePress}
          />
        </InputWrapper>
        <Style.ErrorMessage>{error ?? ''}</Style.ErrorMessage>
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
  ErrorMessage: styled.span`
    width: 160px;

    display: flex;
    justify-content: flex-start;

    color: red;
    font-size: 12px;
  `,
};
