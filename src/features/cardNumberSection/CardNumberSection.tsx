import SectionTitle from "../../entities/sectionTitle/SectionTitle";
import CardNumberInputs from "../../entities/cardNumberInputs/CardNumberInputs";
import { StyledContainer } from "./cardNumberSection.css";
import { CardNumberPosition } from "../../\btypes/index.types";

type CardNumberProps = {
  cardNumber: Record<CardNumberPosition, string>;
  changeCardNumber: (position: CardNumberPosition, cardNumber: string) => void;
};

function CardNumberSection({ cardNumber, changeCardNumber }: CardNumberProps) {
  return (
    <StyledContainer>
      <SectionTitle
        title="결제할 카드 번호를 입력해 주세요"
        subTitle="본인 명의의 카드만 결제 가능합니다."
      />
      <CardNumberInputs
        cardNumber={cardNumber}
        changeCardNumber={changeCardNumber}
      />
    </StyledContainer>
  );
}

export default CardNumberSection;
