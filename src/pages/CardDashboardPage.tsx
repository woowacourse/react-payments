import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import EmptyCardList from "../components/CardList/EmptyCardList";
import Spinner from "../components/Common/Spinner";

interface Card {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
}

const View = styled.div`
  width: 100%;
  max-width: 376px;
  height: 100dvh;
  margin: 0 auto;
  padding: 16px 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const PageTitle = styled.h1`
  margin-top: 30px;
  font-size: 18px;
  font-weight: 700;
  font-style: Bold;
  margin-bottom: 8px;
  font-family: Noto Sans KR;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
`;

function CardDashboardPage() {
  const [cards, setCards] = useState<Card[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}cards`)
      .then((res) => res.json())
      .then((data: Card[]) => setCards(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <View>
      <PageTitle>보유 카드</PageTitle>
      {isLoading ? <Spinner /> : cards.length === 0 ? <EmptyCardList /> : null}
    </View>
  );
}

export default CardDashboardPage;
