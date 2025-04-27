import SectionTitle from "../../entities/sectionTitle/SectionTitle";
import CardNumberInputs from "../../entities/cardNumberInputs/CardNumberInputs";
import { CardNumberProps } from "./types/CardNumberSection.types";
import { StyledContainer } from "./cardNumberSection.css";

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
