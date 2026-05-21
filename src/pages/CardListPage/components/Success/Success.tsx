import styled from "styled-components";
import CardItem from "./CardItem/CardItem";
import BaseButton from "../../../../shared/components/Button/BaseButton";
import { useNavigate } from "react-router-dom";
import type { CardListResponseItem } from "../../../../domain/card/api/cards.types";
import type { AsyncState } from "../../../../shared/hooks/useAsyncState";

type SuccessProps = {
  cardList: CardListResponseItem[];
  deleteCard: (
    cardId: string,
    onSuccess: () => void,
    onError: (error: Error) => void,
  ) => void;
  deleteCardAsyncState: AsyncState;
};

const Success = ({
  cardList,
  deleteCard,
  deleteCardAsyncState,
}: SuccessProps) => {
  const navigate = useNavigate();
  return (
    <SuccessLayout>
      {cardList.map((card) => (
        <CardItem
          key={card.id}
          cardItemInformaiton={card}
          onDeleteCard={deleteCard}
          deleteCardAsyncState={deleteCardAsyncState}
        />
      ))}
      <AddCardButton onClick={() => navigate("/register")} style="rounded">
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
