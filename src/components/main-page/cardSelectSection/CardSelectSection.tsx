import SectionTitle from '../../common/sectionTitle/SectionTitle';
import { StyledContainer } from '../../../styled-component/inputs';
import CardSelectBox from '../cardSelectBox/CardSelectBox';

type CardSelectBoxProps = {
  onSelectCardCompany: (name: string, color: string) => void;
};

function CardSelectSection({ onSelectCardCompany }: CardSelectBoxProps) {
  return (
    <StyledContainer>
      <SectionTitle title="카드사를 선택해 주세요" subTitle="현재 국내 카드사만 가능합니다" />
      <CardSelectBox onSelectCardCompany={onSelectCardCompany} />
    </StyledContainer>
  );
}

export default CardSelectSection;
