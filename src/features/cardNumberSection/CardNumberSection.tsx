import SectionTitle from "../../entities/sectionTitle/SectionTitle";
import CardNumberInputs from "../../entities/cardNumberInputs/CardNumberInputs";
import { StyledContainer } from "./cardNumberSection.css";
import { CardNumberPosition } from "../../types/index.types";

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

function CardNumberSection({ cardNumber, cardNumberError }: CardNumberProps) {
  return (
    <StyledContainer>
      <SectionTitle
        title="결제할 카드 번호를 입력해 주세요"
        subTitle="본인 명의의 카드만 결제 가능합니다."
      />
      <CardNumberInputs
        cardNumber={cardNumber}
        cardNumberError={cardNumberError}
      />
    </StyledContainer>
  );
}

export default CardNumberSection;
