import SectionTitle from "../../entities/sectionTitle/SectionTitle";
import CardCVCNumberInputs from "../../entities/cardCVCNumberInputs/CardCVCNumberInputs";
import { StyledContainer } from "./CardCVCNumberSection.css";
import { CardCVCNumberSectionProps } from "../../\btypes/index.types";

function CardCVCNumberSection({
  CVCNumber,
  changeCVCNumber,
}: CardCVCNumberSectionProps) {
  return (
    <StyledContainer>
      <SectionTitle title="CVC 번호를 입력해 주세요" />
      <CardCVCNumberInputs
        CVCNumber={CVCNumber}
        changeCVCNumber={changeCVCNumber}
      />
    </StyledContainer>
  );
}

export default CardCVCNumberSection;
