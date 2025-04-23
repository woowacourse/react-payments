import SectionTitle from '../../common/sectionTitle/SectionTitle';
import CardNumberInputs from '../cardNumberInputs/CardNumberInputs';
import styled from 'styled-components';
import { CardNumberProps } from '../../../types/index.types';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`;

function CardNumberSection({ cardNumber, changeCardNumber, viewNextInput }: CardNumberProps) {
  return (
    <StyledContainer>
      <SectionTitle title="결제할 카드 번호를 입력해 주세요" subTitle="본인 명의의 카드만 결제 가능합니다." />
      <CardNumberInputs cardNumber={cardNumber} changeCardNumber={changeCardNumber} viewNextInput={viewNextInput} />
    </StyledContainer>
  );
}

export default CardNumberSection;
