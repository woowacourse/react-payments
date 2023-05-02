import { ChangeEvent, Fragment } from "react";
import styled from "styled-components";
import { CardNumber } from "types";
import { changeInvalidValueToBlank } from "utils/inputValidator";
import Input, { CommonInputStyle } from "components/Input";
import { Hyphen } from "components/style/DelimiterStyle";
import { CardNumberCaption } from "components/style/CaptionStyle";
import { CardNumberInputBox } from "components/style/InputBoxStyle";
import { useFocus } from "hooks/useFocus";
import useInitCardInfo from "hooks/useInitCardInfo";
import useModal from "hooks/useModal";
import { NUMBER_INPUT, LIMIT_LENGTH, VALID_INPUT } from "constants/limit";
const { ONLY_NUMBER } = VALID_INPUT;

const CardNumberInput = () => {
  const { cardInfo, initCardInfo } = useInitCardInfo();
  const { number1, number2, number3, number4 } = cardInfo;
  const cardNumber: CardNumber = { number1, number2, number3, number4 };

  const { handleRef, moveFocus, currentInput } = useFocus();

  if (!useModal().isModalOpen && !currentInput[0].value.length) {
    currentInput[0].focus();
  }

  const handleCardNumberChange = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    initCardInfo(
      target.name,
      changeInvalidValueToBlank(target.value, {
        length: LIMIT_LENGTH.CARD_NUMBER,
        regex: ONLY_NUMBER,
      })
    );

    moveFocus(target, LIMIT_LENGTH.CARD_NUMBER);
  };

  return (
    <>
      <S.Label className="label-text" htmlFor="card-label">
        카드 번호
      </S.Label>
      <CardNumberInputBox>
        {Array.from({ length: NUMBER_INPUT.COUNT }).map((_, index) => (
          <Fragment key={index}>
            <Input
              type="text"
              name={`number${index + 1}`}
              id={index ? undefined : "card-label"}
              aria-labelledby="card-label"
              maxLength={LIMIT_LENGTH.CARD_NUMBER}
              inputMode="numeric"
              value={cardNumber[`number${index + 1}`]}
              placeholder="0000"
              required
              inputStyle={CommonInputStyle}
              onChange={handleCardNumberChange}
              ref={(el) => handleRef(el, index)}
            />
            {index === NUMBER_INPUT.LAST_PART ? (
              ""
            ) : (
              <Hyphen cardNumber={cardNumber[`number${index + 1}`]}>-</Hyphen>
            )}
          </Fragment>
        ))}
      </CardNumberInputBox>
      <CardNumberCaption cardNumbers={Object.values(cardNumber)}>
        숫자 {LIMIT_LENGTH.ALL_CARD_NUMBERS}자리를 모두 입력해 주세요.
      </CardNumberCaption>
    </>
  );
};

const S = {
  Label: styled.label`
    display: inline-block;
    margin-top: 24px;
  `,
};

export default CardNumberInput;
