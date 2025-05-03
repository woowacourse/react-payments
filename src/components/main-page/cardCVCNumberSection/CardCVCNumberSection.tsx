import SectionTitle from '../../common/sectionTitle/SectionTitle';
import CardCVCNumberInputs from '../cardCVCNumberInputs/CardCVCNumberInputs';
import styled from 'styled-components';
import { CardCVCNumberSectionProps } from '../../../types/index.types';

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
  viewNextInput,
  getErrorMessage,
  isInvalid,
}: CardCVCNumberSectionProps) {
  return (
    <StyledContainer>
      <SectionTitle title="CVC 번호를 입력해 주세요" />
      <CardCVCNumberInputs
        CVCNumber={CVCNumber}
        changeCVCNumber={changeCVCNumber}
        getErrorMessage={getErrorMessage}
        isInvalid={isInvalid}
        viewNextInput={viewNextInput}
      />
    </StyledContainer>
  );
}

export default CardCVCNumberSection;
