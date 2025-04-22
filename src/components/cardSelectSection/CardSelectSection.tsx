import SectionTitle from '../sectionTitle/SectionTitle';
import { StyledContainer } from '../../styled-component/inputs';
import CardSelectBox from '../cardSelectBox/CardSelectBox';

function CardSelectSection() {
  return (
    <StyledContainer>
      <SectionTitle title="카드사를 선택해 주세요" subTitle="현재 국내 카드사만 가능합니다" />
      <CardSelectBox />
    </StyledContainer>
  );
}

export default CardSelectSection;
