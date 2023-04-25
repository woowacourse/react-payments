import { useFocus } from "hooks/useFocus";
import { ChangeEvent, Dispatch, SetStateAction, Fragment } from "react";
import { changeToValidValue } from "utils/inputValidator";
import styled from "styled-components";
import Input from "components/Input";
import { Slash } from "components/DelimiterStyle";
import { DateCaption } from "components/CaptionStyle";
import { isInvalidDate } from "validation";
import { ExpirationDate } from "types";
import { DATE_INPUT, LIMIT_LENGTH, VALID_INPUT } from "constants/limit";
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

  return (
    <>
      <label className="label-text" htmlFor="date-label">
        만료일
      </label>
      <S.InputBox>
        {Array.from({ length: DATE_INPUT.COUNT }).map((_, index) => (
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
            {index === DATE_INPUT.LAST_PART ? (
              ""
            ) : (
              <Slash month={date.month}>/</Slash>
            )}
          </Fragment>
        ))}
      </S.InputBox>
      <DateCaption date={Object.values(date)}>
        카드에 표기된 월/연도 순으로 입력해주세요. ex&#41; 01/28
      </DateCaption>
    </>
  );
};

const S = {
  InputBox: styled.div`
    display: flex;
    justify-content: center;
    width: 40%;
    height: 48px;
    margin-top: 12px;
    background: var(--input-background);
    border-radius: 8px;
  `,
};

export default ExpirationDateInput;
