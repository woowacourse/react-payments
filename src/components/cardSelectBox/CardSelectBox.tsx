import { StyledContainer, StyledInputWrap } from '../../styled-component/inputs';
import SelectBox from '../selectBox/SelectBox';

const cardList = ['BC카드', '신한카드', '카카오뱅크', '현대카드', '우리카드', '롯데카드', '하나카드', '국민카드'];

function CardSelectBox() {
  return (
    <StyledContainer>
      <StyledInputWrap>
        <SelectBox
          options={cardList}
          width="200px"
          placeholder="카드사를 선택해주세요"
          onChange={(e) => console.log(e.target.value)}
        />
      </StyledInputWrap>
    </StyledContainer>
  );
}
export default CardSelectBox;
