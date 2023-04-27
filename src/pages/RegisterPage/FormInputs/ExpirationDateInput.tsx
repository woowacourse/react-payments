import { useFocus } from "hooks/useFocus";
import { ChangeEvent, Fragment, useContext } from "react";
import { changeInvalidValueToBlank } from "utils/inputValidator";
import Input, { CommonInputStyle } from "components/Input";
import { Slash } from "components/DelimiterStyle";
import { DateCaption } from "components/CaptionStyle";
import { DateInputBox } from "components/InputBoxStyle";
import { isInvalidDate } from "validation";
import { ExpirationDate } from "types";
import { DATE_INPUT, LIMIT_LENGTH, VALID_INPUT } from "constants/limit";
import { CardInfoContext } from "App";
const { ONLY_NUMBER } = VALID_INPUT;

const ExpirationDateInput = () => {
  const { month, year } = useContext(CardInfoContext).cardInfo;
  const date: ExpirationDate = { month, year };
  const setDate = useContext(CardInfoContext).setCardInfo;
  const { handleRef, moveFocus } = useFocus();

  const handleDateChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (isInvalidDate(target, date)) return;

    setDate((prevState) => {
      return {
        ...prevState,
        [target.name]: changeInvalidValueToBlank(target.value, {
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
      <DateInputBox>
        {Array.from({ length: DATE_INPUT.COUNT }).map((_, index) => (
          <Fragment key={index}>
            <Input
              type="text"
              name={index ? "year" : "month"}
              id={index ? undefined : "date-label"}
              aria-labelledby="date-label"
              maxLength={LIMIT_LENGTH.EXPIRATION_DATE}
              inputMode="numeric"
              value={index ? year : month}
              placeholder={index ? "YY" : "MM"}
              required
              inputStyle={CommonInputStyle}
              onChange={handleDateChange}
              ref={(el) => handleRef(el, index)}
            />
            {index === DATE_INPUT.LAST_PART ? (
              ""
            ) : (
              <Slash month={month}>/</Slash>
            )}
          </Fragment>
        ))}
      </DateInputBox>
      <DateCaption date={Object.values(date)}>
        카드에 표기된 월/연도 순으로 입력해주세요. ex&#41; 01/28
      </DateCaption>
    </>
  );
};

export default ExpirationDateInput;
