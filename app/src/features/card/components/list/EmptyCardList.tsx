import styled from "@emotion/styled";
import GhostCard from "../assets/Ghostcard.svg";
import { RadiusButton } from "../../style/Button";

export default function EmptyCardList({ onClick }) {
  return (
    <EmptyCardContent>
      <EmptyCardSVG src={GhostCard} alt="비어있는 카드" />
      <h3>등록된 카드가 없습니다</h3>
      <p>아래 버튼을 눌러 첫 카드를 등록해보세요</p>
      <RadiusButton onClick={onClick}>카드 추가하기</RadiusButton>
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
