import styled from "@emotion/styled";
import { Link } from "react-router";
import GhostCard from "../../assets/Ghostcard.svg";

export default function EmptyCardList() {
  return (
    <EmptyCardContent>
      <EmptyCardSVG src={GhostCard} alt="비어있는 카드" />
      <h3>등록된 카드가 없습니다</h3>
      <p>아래 버튼을 눌러 첫 카드를 등록해보세요</p>
      <CardCreateLink to="/card/create/">카드 추가하기</CardCreateLink>
    </EmptyCardContent>
  );
}

const EmptyCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h3 {
    font-size: 20px;
    font-weight: 700;
    color: #353c49;
    margin-top: 16px;
    margin-bottom: 0;
  }
  p {
    font-size: 12px;
    color: #8c8c8c;
    margin: 16px 0;
  }
`;

const EmptyCardSVG = styled.img`
  width: 160px;
  height: 100px;
`;

const CardCreateLink = styled(Link)`
  display: block;
  width: 100%;
  background-color: #333333;
  padding: 20px 0;
  color: #f3f3f3;
  font-size: 16px;
  font-weight: 700;
  border-radius: 5px;
  border: none;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
`;
