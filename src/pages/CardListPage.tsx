import { getCards, type CardListResponse } from "@/api/cards";
import CardListEmpty from "@/components/CardList/CardListEmpty/CardListEmpty";
import PageLayout from "@/components/common/PageLayout";
import { COLOR_PALETTE } from "@/styles/colorPalette";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

type CardListStatus = "idle" | "loading" | "success" | "error";

const CardListPage = () => {
  const [cards, setCards] = useState<CardListResponse>([]);
  const [status, setStatus] = useState<CardListStatus>("idle");

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const cards = await getCards();

        setCards(cards);
        setStatus("success");
      } catch {
        setStatus("error");
      }
    };

    fetchCards();
  }, []);

  return (
    <PageLayout>
      <PageWrapper>
        <PageTitle>보유 카드</PageTitle>
        {status === "success" && cards.length === 0 && <CardListEmpty />}
      </PageWrapper>
    </PageLayout>
  );
};

const PageWrapper = styled.div`
  padding: 2.5rem 1.75rem;
`;

const PageTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${COLOR_PALETTE["BLACK-700"]};
`;

export default CardListPage;
