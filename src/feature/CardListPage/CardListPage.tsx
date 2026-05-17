import { useEffect, useState } from "react";
import Success from "./components/Success/Success";
import styled from "styled-components";
import Error from "./components/Error/Error";
import Loading from "./components/Loading/Loading";
import Empty from "./components/Empty/Empty";
import { fetchCardList } from "./api/cardList";
import type { CardItemInformation } from "./components/Success/CardItem/CardItem";

const CardListPage = () => {
  const [asyncState, setAsyncState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [cardList, setCardList] = useState<CardItemInformation[]>([]);
  const deleteCard = (cardId: string) => {
    const newCardList = cardList.filter((card) => card.id !== cardId);
    setCardList(newCardList);
  };
  // 비동기 상태를 명시적으로 4개로 관리하니까 null일 필요는 굳이 없지 않나? -> 그래서 뺌

  const loadCardList = async () => {
    // 이렇게 하니까 무슨 callback 쓰는 것처럼 쓰게 되는데, 이러면 useEffect를 쓰는 이유가...
    try {
      setAsyncState("loading");
      const fetchedCardList = await fetchCardList();
      setCardList(fetchedCardList);
      setAsyncState("success");
    } catch (error) {
      alert((error as Error).message);
      setAsyncState("error");
    }
  };

  useEffect(() => {
    loadCardList();
  }, []);

  return (
    <CardListPageLayout>
      <HasCardCountSpan>
        보유 카드 {cardList && cardList.length !== 0 && `(${cardList.length})`}
      </HasCardCountSpan>
      {asyncState === "success" && cardList.length === 0 && <Empty />}
      {asyncState === "success" && cardList.length !== 0 && (
        <Success cardList={cardList} deleteCard={deleteCard} />
      )}
      {asyncState === "error" && <Error onRetry={loadCardList} />}
      {asyncState === "loading" && <Loading />}
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
