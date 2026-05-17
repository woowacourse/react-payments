import styled from "styled-components";
import CardItem, { type CardItemInformation } from "./CardItem/CardItem";
import BaseButton from "../../../../common/components/Button/BaseButton";

const Success = ({ cardList }: { cardList: CardItemInformation[] }) => {
  return (
    <SuccessLayout>
      {cardList.map((card) => (
        <CardItem key={card.id} {...card} />
      ))}
      <AddCardButton onClick={() => console.log("카드 추가")} style="rounded">
        + 카드 추가
      </AddCardButton>
    </SuccessLayout>
  );
};

export default Success;

const SuccessLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const AddCardButton = styled(BaseButton)`
  background: none;
  border: 1px dashed #e6e6e6;
  color: #8c8c8c;
  font-size: 13px;

  &: hover {
    background-color: #e6e6e6;
  }
`;
