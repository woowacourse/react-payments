import SectionTitle from "../../entities/sectionTitle/SectionTitle";
import CardNumberInputs from "../../entities/cardNumberInputs/CardNumberInputs";
import { StyledContainer } from "./cardNumberSection.css";
import { CardNumberPosition } from "../../\btypes/index.types";

type CardNumberProps = {
  cardNumber: Record<CardNumberPosition, string>;
  changeCardNumber: (position: CardNumberPosition, cardNumber: string) => void;
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

function CardNumberSection({
  cardNumber,
  changeCardNumber,
  error,
  checkValidation,
  getErrorMessage,
}: CardNumberProps) {
  return (
    <StyledContainer>
      <SectionTitle
        title="결제할 카드 번호를 입력해 주세요"
        subTitle="본인 명의의 카드만 결제 가능합니다."
      />
      <CardNumberInputs
        cardNumber={cardNumber}
        changeCardNumber={changeCardNumber}
        error={error}
        checkValidation={checkValidation}
        getErrorMessage={getErrorMessage}
      />
    </StyledContainer>
  );
}

export default CardNumberSection;
