import { useFocus } from "hooks/useFocus";
import { ChangeEvent, Dispatch, SetStateAction, Fragment } from "react";
import styled from "styled-components";
import { changeToValidValue } from "utils/inputValidator";
import { HIDDEN_ELEMENT_STYLE } from "constants/style";
import Input from "components/Input";
import { isInvalidDate } from "validation";
import { LIMIT_LENGTH, VALID_INPUT } from "constants/limit";
import { ExpirationDate } from "types";
const { ONLY_NUMBER } = VALID_INPUT;

interface Props {
  date: ExpirationDate;
  setDate: Dispatch<SetStateAction<ExpirationDate>>;
}

const ExpirationDateInput = ({ date, setDate }: Props) => {
  const { handleRef, moveFocus } = useFocus();

  const handleDate = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (isInvalidDate(target, date)) return;

    setDate((prevState) => {
      return {
        ...prevState,
        [target.name]: changeToValidValue(target.value, {
          length: LIMIT_LENGTH.EXPIRATION_DATE,
          regex: ONLY_NUMBER,
        }),
      };
    });

    moveFocus(target, LIMIT_LENGTH.EXPIRATION_DATE);
  };

  const inputsCount = 2;
  const lastInput = inputsCount - 1;

  return (
    <>
      <label className="label-text" htmlFor="date-label">
        만료일
      </label>
      <S.InputBox>
        {Array.from({ length: inputsCount }).map((_, index) => (
          <Fragment key={index}>
            <Input
              type="text"
              name={index ? "year" : "month"}
              id={index ? undefined : "date-label"}
              aria-labelledby="date-label"
              maxLength={LIMIT_LENGTH.EXPIRATION_DATE}
              inputMode="numeric"
              value={index ? date.year : date.month}
              placeholder={index ? "YY" : "MM"}
              required
              onChange={handleDate}
              ref={(el) => handleRef(el, index)}
            />
            {index === lastInput ? (
              ""
            ) : (
              <S.Delimiter month={date.month}>/</S.Delimiter>
            )}
          </Fragment>
        ))}
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

  Delimiter: styled.p<{ month: string }>`
    font-weight: 900;
    align-self: center;
    visibility: ${({ month }) =>
      month.length !== LIMIT_LENGTH.EXPIRATION_DATE &&
      `${HIDDEN_ELEMENT_STYLE}`};
  `,

  Caption: styled.p<{ date: string[] }>`
    color: var(--caption-color);
    font-size: 12px;
    margin: 8px 0 16px 4px;
    visibility: ${({ date }) =>
      date.join("").length === LIMIT_LENGTH.ALL_EXPIRATION_DATE &&
      `${HIDDEN_ELEMENT_STYLE}`};
  `,
};

export default ExpirationDateInput;
