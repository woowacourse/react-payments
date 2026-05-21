import Success from "./components/Success/Success";
import styled from "styled-components";
import Error from "./components/Error/Error";
import Loading from "./components/Loading/Loading";
import Empty from "./components/Empty/Empty";

import { useCardList } from "./components/useCardList";

const CardListPage = () => {
  const {
    fetchCardListAsyncState,
    deleteCardAsyncState,
    cardList,
    deleteCardById,
    loadCardList,
  } = useCardList();

  return (
    <CardListPageLayout>
      <HasCardCountSpan>
        보유 카드 {cardList && cardList.length !== 0 && `(${cardList.length})`}
      </HasCardCountSpan>
      {fetchCardListAsyncState === "success" && cardList.length === 0 && (
        <Empty />
      )}
      {fetchCardListAsyncState === "success" && cardList.length !== 0 && (
        <Success
          cardList={cardList}
          deleteCard={deleteCardById}
          deleteCardAsyncState={deleteCardAsyncState}
        />
      )}
      {fetchCardListAsyncState === "error" && <Error onRetry={loadCardList} />}
      {fetchCardListAsyncState === "loading" && <Loading />}
    </CardListPageLayout>
  );
};

export default CardListPage;

const CardListPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  min-height: 700px;
  padding: 0 28px;
`;

const HasCardCountSpan = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #353c49;
`;
