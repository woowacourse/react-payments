import SectionTitle from "../../entities/sectionTitle/SectionTitle";
import CardCVCNumberInputs from "../../entities/cardCVCNumberInputs/CardCVCNumberInputs";
import { CardCVCNumberSectionProps } from "./types/CardCVCNumber.types";
import { StyledContainer } from "./CardCVCNumberSection.css";

function CardCVCNumberSection({
  CVCNumber,
  CVCError,
}: CardCVCNumberSectionProps) {
  return (
    <StyledContainer>
      <SectionTitle title="CVC 번호를 입력해 주세요" />
      <CardCVCNumberInputs CVCNumber={CVCNumber} CVCError={CVCError} />
    </StyledContainer>
  );
}

export default CardCVCNumberSection;
