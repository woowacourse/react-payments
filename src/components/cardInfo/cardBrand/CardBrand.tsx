import styled from "@emotion/styled";
import Dropdown from "./Dropdown";

export default function CardBrand() {
  return (
    <Wrapper>
      <Header>카드사를 선택해 주세요</Header>
      <SubHeader>현재 국내 카드사만 가능합니다.</SubHeader>
      <Dropdown />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
`;

const Header = styled.h2`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0%;
  line-height: 100%;
  vertical-align: middle;
  color: rgba(0, 0, 0, 1);
  margin: 0;
`;

const SubHeader = styled.h3`
  font-size: 9.5px;
  font-weight: 400;
  letter-spacing: 0%;
  line-height: 100%;
  vertical-align: middle;
  color: rgba(139, 149, 161, 1);
  margin: 6px 0;
`;
