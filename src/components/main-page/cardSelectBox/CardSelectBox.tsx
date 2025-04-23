import { CARD_BRANDS } from '../../../constants/cardBrands';
import { StyledContainer, StyledInputWrap } from '../../../styled-component/inputs';
import SelectBox from '../../common/selectBox/SelectBox';

type CardSelectBoxProps = {
  onSelectCardCompany: (name: string, color: string) => void;
};

function CardSelectBox({ onSelectCardCompany }: CardSelectBoxProps) {
  const cardList = Object.values(CARD_BRANDS).map((company) => company.name);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = e.target.value;
    const found = Object.values(CARD_BRANDS).find((brand) => brand.name === selectedName);
    if (found) {
      onSelectCardCompany(found.name, found.color);
    }
  };

  return (
    <StyledContainer>
      <StyledInputWrap>
        <SelectBox options={cardList} width="200px" placeholder="카드사를 선택해주세요" onChange={handleChange} />
      </StyledInputWrap>
    </StyledContainer>
  );
}
export default CardSelectBox;
