import { InputWrapper } from './template/InputWrapper';
import { ErrorMessage, Input } from './template/Input';
import styled from 'styled-components';
import { useErrorMessage } from '../../../hooks/useError';
import {
  useCardInfoActionContext,
  useCardInfoValueContext,
} from '../../../hooks/cardInfoContext';
import { useFocus } from '../../../hooks/useFocus';
import { useEffect } from 'react';

interface Props {
  viewNextInput: () => void;
}

export const expirationDateInputValidator = (input: string | string[]) => {
  if (typeof input === 'string') throw new Error('입력 객체 에러');

  const inputYear = Number(input[1]);
  const inputMonth = Number(input[0]);
  const currentYear = new Date().getFullYear() % 100;
  const currentMonth = new Date().getMonth() + 1;

  if (input.every((num) => num === '')) throw new Error('');

  if (input.some((num) => num.length === 0))
    throw new Error('모든 입력창을 채워주세요.');

  if (inputMonth > 12 || inputMonth < 1)
    throw new Error('달에는 1 ~ 12까지의 숫자만 입력 가능합니다!');

  if (currentYear > inputYear)
    throw new Error('만료 일자는 현재 날짜보다 이후여야 합니다.');

  if (currentYear === inputYear && currentMonth > inputMonth)
    throw new Error('만료 일자는 현재 날짜보다 이후여야 합니다.');
};

type ExpirationDate = 'month' | 'year';

const isExpirationDate = (
  inputTarget: string
): inputTarget is ExpirationDate => {
  return inputTarget === 'month' || inputTarget === 'year';
};

export const ExpirationDateInput = ({ viewNextInput }: Props) => {
  const { expirationDate } = useCardInfoValueContext();
  const { setExpirationDate } = useCardInfoActionContext();
  const { inputRefs, focusInputByIndex } = useFocus(2);

  const error = useErrorMessage(
    [expirationDate.month, expirationDate.year],
    expirationDateInputValidator
  );

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputTarget = e.target.dataset.inputTarget;
    const index = e.target.dataset.index;

    if (index === undefined || inputTarget === undefined) return;
    if (!isExpirationDate(inputTarget)) return;

    setExpirationDate(inputTarget, e.target.value);

    if (e.target.value.length >= 2) focusInputByIndex(Number(index) + 1);
  };

  const handleBackspacePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    const index = e.target.dataset.index;

    if (index === undefined) return;

    if (e.key === 'Backspace' && e.target.value === '')
      focusInputByIndex(Number(index) - 1);
  };

  useEffect(() => {
    if (error === null) viewNextInput();
  }, [error]);

  return (
    <div>
      <Style.Label>
        <Style.Title>만료일</Style.Title>
      </Style.Label>
      <InputWrapper width={137}>
        <Input
          ref={(element) => {
            if (element === null) return;
            inputRefs.current[0] = element;
          }}
          autoFocus={true}
          type="number"
          value={expirationDate.month}
          data-input-target={'month'}
          width={'30'}
          required
          inputMode="numeric"
          placeholder="MM"
          data-index="0"
          maxLength={2}
          onChange={handleChangeInput}
          onKeyDown={handleBackspacePress}
        />
        &nbsp;/&nbsp;
        <Input
          ref={(element) => {
            if (element === null) return;
            inputRefs.current[1] = element;
          }}
          type="number"
          value={expirationDate.year}
          data-input-target={'year'}
          width={'30'}
          required
          inputMode="numeric"
          placeholder="YY"
          data-index="1"
          maxLength={2}
          onChange={handleChangeInput}
          onKeyDown={handleBackspacePress}
        />
      </InputWrapper>
      <ErrorMessage>{error ?? ''}</ErrorMessage>
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
};
