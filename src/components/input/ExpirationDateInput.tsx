import { forwardRef, useEffect } from 'react';
import { InputWrapper } from './template/InputWrapper';
import { Input } from './template/Input';
import styled from 'styled-components';

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
  focusNextExpirationDateInput: (index: number) => void;
  focusexpirationDateInput: () => void;
}

export const ExpirationDateInput = forwardRef<HTMLInputElement[], Props>(
  function ExpirationDateInput(
    {
      expirationDate,
      setExpirationDate,
      focusNextExpirationDateInput,
      focusexpirationDateInput,
    },
    refs
  ) {
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputTarget = e.target.dataset.inputTarget;
      const index = e.target.dataset.index;

      if (index === undefined || inputTarget === undefined) return;

      if (e.target.value.length > 2) {
        focusNextExpirationDateInput(Number(index) + 1);
        return;
      }

      setExpirationDate({
        ...expirationDate,
        [inputTarget]: e.target.value,
      });
    };

    const handleBackspacePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== 'Backspace') return;
      if (!(e.target instanceof HTMLInputElement)) return;

      const index = e.target.dataset.index;

      if (index === undefined) return;

      if (e.target.value === '')
        focusNextExpirationDateInput(Number(index) - 1);
    };

    const validator = () => {
      if (!isValidDate(expirationDate.month, expirationDate.year)) {
        alert('유효한 날짜가 아닙니다.');

        setExpirationDate({
          month: '',
          year: '',
        });

        (refs as React.MutableRefObject<HTMLInputElement[]>).current[0].focus();
      }
    };

    useEffect(() => {
      focusexpirationDateInput();
    }, []);

    return (
      <>
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
            minLength={2}
            maxLength={2}
            max={'12'}
            min={'1'}
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
            maxLength={2}
            minLength={2}
            max={(new Date().getFullYear() + 5) % 100}
            min={new Date().getFullYear() % 100}
            required
            inputMode="numeric"
            placeholder="YY"
            data-index="1"
            onChange={handleChangeInput}
            onKeyDown={handleBackspacePress}
            onBlur={validator}
          />
        </InputWrapper>
      </>
    );
  }
);

const isValidDate = (month: string, year: string) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear() % 100;

  if (Number(year) > currentYear) return true;

  return Number(year) === currentYear ? Number(month) >= currentMonth : false;
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
};
