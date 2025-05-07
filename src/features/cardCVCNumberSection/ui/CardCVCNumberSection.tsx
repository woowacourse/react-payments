import SectionTitle from "../../../entities/sectionTitle/ui/SectionTitle";
import CardCVCNumberInputs from "../../../entities/cardCVCNumberInputs/ui/CardCVCNumberInputs";
import { CardCVCNumberSectionProps } from "../types/CardCVCNumber.types";
import { StyledContainer } from "../css/CardCVCNumberSection.css";

function CardCVCNumberSection({
  CVCNumber,
  CVCError,
}: CardCVCNumberSectionProps) {
  return (
    <StyledContainer>
      <SectionTitle title="CVC 번호를 입력해 주세요" />
      <CardCVCNumberInputs {...CVCNumber} {...CVCError} />
    </StyledContainer>
  );
}

export default CardCVCNumberSection;
