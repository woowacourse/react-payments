import SectionTitle from "../../entities/sectionTitle/SectionTitle";
import CardCVCNumberInputs from "../../entities/cardCVCNumberInputs/CardCVCNumberInputs";
import styled from "styled-components";
import { CardCVCNumberSectionProps } from "../../\btypes/index.types";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
`;

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
