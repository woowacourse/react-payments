import { ChangeEvent, Fragment } from "react";
import { ExpirationDate } from "types";
import { changeInvalidValueToBlank } from "utils/inputValidator";
import Input, { CommonInputStyle } from "components/Input";
import { Slash } from "components/style/DelimiterStyle";
import { DateCaption } from "components/style/CaptionStyle";
import { DateInputBox } from "components/style/InputBoxStyle";
import { isInvalidDate } from "validation";
import { useFocus } from "hooks/useFocus";
import useInitCardInfo from "hooks/useInitCardInfo";
import { DATE_INPUT, LIMIT_LENGTH, VALID_INPUT } from "constants/limit";
const { ONLY_NUMBER } = VALID_INPUT;

const ExpirationDateInput = () => {
  const { cardInfo, initCardInfo } = useInitCardInfo();
  const { month, year } = cardInfo;
  const date: ExpirationDate = { month, year };

  const { handleRef, moveFocus } = useFocus();

  const handleDateChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (isInvalidDate(target, date)) return;

    initCardInfo(
      target.name,
      changeInvalidValueToBlank(target.value, {
        length: LIMIT_LENGTH.EXPIRATION_DATE,
        regex: ONLY_NUMBER,
      })
    );

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
        카드에 표기된 월/연도 순으로 입력해 주세요. ex&#41; 01/28
      </DateCaption>
    </>
  );
};

export default ExpirationDateInput;
