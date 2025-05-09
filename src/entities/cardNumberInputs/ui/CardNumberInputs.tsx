import Input from "../../../shared/input/ui/Input";
import { NO_ERROR } from "../../../shared/constants/values";
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

function CardNumberInputs({
  values,
  changeValues,
  checkValidation,
  firstErrorMessage,
  errorMessages,
}: CardNumberProps) {
  const error = firstErrorMessage;

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
            value={values[position]}
            onChange={(e) => {
              checkValidation({
                length: CARD_NUMBER_LENGTH,
                value: e.target.value,
                type: position,
              });
              changeValues(position, e.target?.value);
              handleAutoFocus(e, idx);
            }}
            width="25%"
            maxLength={CARD_NUMBER_LENGTH}
            placeholder="1234"
            error={errorMessages[position] !== NO_ERROR}
          />
        ))}
      </StyledInputWrap>
      {errorMessages && <StyledErrorMessage>{error}</StyledErrorMessage>}
    </StyledContainer>
  );
}

export default CardNumberInputs;
