import { useFocus } from 'hooks/useFocus';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { changeToValidValue } from 'utils/inputValidator';
import { HIDDEN_ELEMENT_STYLE, LENGTH, REGEX } from 'constants/constants';
import { Card } from 'types/Card';
import { useInputHandler } from 'hooks/useInputHandler';

type Date = Pick<Card, 'month' | 'year'>;

interface Props {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
}

const ExpirationDateInput = (props: Props) => {
  const { date, setDate } = props;

  const DateValidatior = (name: string, value: string) => {
    const ValidDate = Number(value);
    return name === 'month' && (ValidDate > 12 || ValidDate < 0) ? '' : value;
  };

  const { handleInput: handleDate, handleRef: handleRef } = useInputHandler(
    setDate,
    {
      length: LENGTH.EXPIRATION,
      regex: REGEX.ONLY_NUMBER,
      validator: DateValidatior,
    }
  );

  return (
    <>
      <label className="label-text" htmlFor="date-label">
        만료일
      </label>
      <S.InputBox>
        <S.Input
          type="text"
          name="month"
          id="date-label"
          aria-labelledby="date-label"
          maxLength={LENGTH.EXPIRATION}
          inputMode="numeric"
          value={date.month}
          ref={(el) => handleRef(el, 0)}
          onChange={handleDate}
          placeholder="MM"
          required
        />
        <S.Hyphen month={date.month}>/</S.Hyphen>
        <S.Input
          type="text"
          name="year"
          aria-labelledby="date-label"
          maxLength={LENGTH.EXPIRATION}
          inputMode="numeric"
          value={date.year}
          ref={(el) => handleRef(el, 1)}
          onChange={handleDate}
          placeholder="YY"
          required
        />
      </S.InputBox>
      <S.Caption date={Object.values(date)}>
        카드에 표기된 월/연도 순으로 입력해주세요. ex&#41; 01/28
      </S.Caption>
    </>
  );
};

const S = {
  InputBox: styled.div`
    display: flex;
    justify-content: center;
    width: 40vw;
    height: 48px;
    margin-top: 12px;
    background: var(--input-background);
    border-radius: 8px;
  `,

  Input: styled.input`
    background: var(--input-background);
    width: 12vw;
    margin: 0 2.2vw;
    text-align: center;
    font-size: 14px;
    letter-spacing: 1px;
  `,

  Hyphen: styled.p<{ month: string }>`
    font-weight: 900;
    align-self: center;
    visibility: ${({ month }) =>
      month.length !== LENGTH.EXPIRATION && `${HIDDEN_ELEMENT_STYLE}`};
  `,

  Caption: styled.p<{ date: string[] }>`
    color: var(--caption-color);
    font-size: 12px;
    margin: 8px 0 16px 4px;
    visibility: ${({ date }) =>
      date.join('').length === LENGTH.EXPIRATION * 2 &&
      `${HIDDEN_ELEMENT_STYLE}`};
  `,
};

export default ExpirationDateInput;
