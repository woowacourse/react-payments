import Button from "@/components/common/Button";
import { COLOR_PALETTE } from "@/styles/colorPalette";
import styled from "@emotion/styled";

interface CardListEmptyProps {
  onAddCard: () => void;
}

const CardListEmpty = ({ onAddCard }: CardListEmptyProps) => (
  <Container>
    <CardPlaceholder />
    <EmptyTitle>등록된 카드가 없습니다</EmptyTitle>
    <Description>아래 버튼을 눌러 첫 카드를 등록해보세요</Description>
    <Button onClick={onAddCard}>카드 추가하기</Button>
  </Container>
);

const Container = styled.div`
  padding-top: 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CardPlaceholder = styled.div`
  width: 10rem;
  height: 6.25rem;
  border-radius: 0.35rem;
  border: 1px dashed ${COLOR_PALETTE["GREY-200"]};
  background-color: ${COLOR_PALETTE["GREY-100"]};
`;

const EmptyTitle = styled.h2`
  margin: 1rem 0 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${COLOR_PALETTE["BLACK-700"]};
`;

const Description = styled.p`
  margin: 1rem;
  font-size: 0.8rem;
  font-weight: 400;

  color: ${COLOR_PALETTE["GREY-600"]};
`;

export default CardListEmpty;
