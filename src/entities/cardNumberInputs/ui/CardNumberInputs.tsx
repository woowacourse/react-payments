import Input from "../../../shared/input/ui/Input";
import { NO_ERROR } from "../../../shared/constants/constant";
import {
  CARD_NUMBER_LENGTH,
  CARD_NUMBER_POSITION,
} from "../constants/CardNumberInputs.constant";
import { CardNumberProps } from "../types/CardNumberInputs.types";
import {
  StyledContainer,
  StyledInputWrap,
  StyledErrorMessage,
} from "../../css/inputs.css";
import useAutoFocus from "../../hooks/useAutoFocus";

const cardInputConfig = [
  CARD_NUMBER_POSITION.FIRST,
  CARD_NUMBER_POSITION.SECOND,
  CARD_NUMBER_POSITION.THIRD,
  CARD_NUMBER_POSITION.FOURTH,
];

function CardNumberInputs({ cardNumber, cardNumberError }: CardNumberProps) {
  const errorMessage = cardNumberError.getErrorMessage();

  const { inputRefs, handleAutoFocus } = useAutoFocus({
    inputCount: cardInputConfig.length,
    inputMaxLength: CARD_NUMBER_LENGTH,
  });

  return (
    <StyledContainer>
      <label htmlFor="">카드 번호</label>
      <StyledInputWrap>
        {cardInputConfig.map((position, idx) => (
          <Input
            key={position}
            ref={inputRefs[idx]}
            value={cardNumber.values[position]}
            onChange={(e) => {
              cardNumberError.checkValidation({
                length: CARD_NUMBER_LENGTH,
                value: e.target.value,
                type: position,
              });
              cardNumber.changeValues(position, e.target?.value);
              handleAutoFocus(e, idx);
            }}
            width="25%"
            maxLength={CARD_NUMBER_LENGTH}
            placeholder="1234"
            isError={cardNumberError.error[position] !== NO_ERROR}
          />
        ))}
      </StyledInputWrap>
      {errorMessage ? (
        <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
      ) : null}
    </StyledContainer>
  );
}

export default CardNumberInputs;
