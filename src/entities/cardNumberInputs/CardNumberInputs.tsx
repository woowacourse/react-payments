import Input from "../../shared/input/Input";
import { CardNumberPosition } from "../../\btypes/index.types";
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

type CardNumberProps = {
  cardNumber: Record<CardNumberPosition, string>;
  changeCardNumber: (position: CardNumberPosition, cardNumber: string) => void;
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
  };
};

const cardInputConfig = [
  CARD_NUMBER_POSITION.FIRST,
  CARD_NUMBER_POSITION.SECOND,
  CARD_NUMBER_POSITION.THIRD,
  CARD_NUMBER_POSITION.FOURTH,
];

function CardNumberInputs({
  cardNumber,
  changeCardNumber,
  cardNumberError,
}: CardNumberProps) {
  const errorMessage = cardNumberError.getErrorMessage();

  return (
    <StyledContainer>
      <label htmlFor="">카드 번호</label>
      <StyledInputWrap>
        {cardInputConfig.map((position) => (
          <Input
            key={position}
            value={cardNumber[position]}
            onChange={(e) => {
              cardNumberError.checkValidation({
                length: CARD_NUMBER_LENGTH,
                value: e.target.value,
                type: position,
              });
              changeCardNumber(position, e.target?.value);
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
