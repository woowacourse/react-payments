import CardListEmpty from "@/components/CardList/CardListEmpty/CardListEmpty";
import CardListError from "@/components/CardList/CardListError/CardListError";
import PageLayout from "@/components/common/PageLayout";
import useCardList from "@/hooks/useCardList";
import { COLOR_PALETTE } from "@/styles/colorPalette";
import styled from "@emotion/styled";
import { useEffect } from "react";

const CardListPage = () => {
  const { cards, status, fetchCards } = useCardList();

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <PageLayout>
      <PageWrapper>
        <PageTitle>보유 카드</PageTitle>
        {status === "success" && cards.length === 0 && <CardListEmpty />}
        {status === "error" && <CardListError onRetry={fetchCards} />}
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
