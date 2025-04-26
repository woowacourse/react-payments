import Input from "../../shared/input/Input";
import { CardNumberPosition } from "../../types/index.types";
import { NO_ERROR } from "../../shared/constants/constant";
import {
  CARD_NUMBER_LENGTH,
  CARD_NUMBER_POSITION,
} from "./CardNumberInputs.constant";
import {
  StyledContainer,
  StyledInputWrap,
  StyledErrorMessage,
} from "../inputs.css";
import useAutoFocus from "../../features/hooks/useAutoFocus";

type CardNumberProps = {
  cardNumber: {
    values: Record<CardNumberPosition, string>;
    changeValues: (
      cardNumberPosition: CardNumberPosition,
      cardNumber: string
    ) => void;
    isFullFilled: () => boolean;
  };
  cardNumberError: {
    error: Record<CardNumberPosition, string>;
    checkValidation: ({
      length,
      value,
      type,
    }: {
      length: number;
      value: string;
      type: CardNumberPosition;
    }) => void;
    getErrorMessage: () => string | undefined;
    isError: () => boolean;
  };
};

const cardInputConfig = [
  CARD_NUMBER_POSITION.FIRST,
  CARD_NUMBER_POSITION.SECOND,
  CARD_NUMBER_POSITION.THIRD,
  CARD_NUMBER_POSITION.FOURTH,
];

function CardNumberInputs({ cardNumber, cardNumberError }: CardNumberProps) {
  const errorMessage = cardNumberError.getErrorMessage();

  const { inputRefs, handleKeyDown } = useAutoFocus({
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
            onKeyDown={(e) => handleKeyDown(e, idx)}
            value={cardNumber.values[position]}
            onChange={(e) => {
              cardNumberError.checkValidation({
                length: CARD_NUMBER_LENGTH,
                value: e.target.value,
                type: position,
              });
              cardNumber.changeValues(position, e.target?.value);
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
