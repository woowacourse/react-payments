import CardListEmpty from "@/components/CardList/CardListEmpty";
import CardListError from "@/components/CardList/CardListError";
import CardListLoading from "@/components/CardList/CardListLoading";
import PageLayout from "@/components/common/PageLayout";
import { ROUTE_PATH } from "@/constants/routes";
import useCardList from "@/hooks/useCardList";
import { COLOR_PALETTE } from "@/styles/colorPalette";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const CardListPage = () => {
  const { cards, status, fetchCards } = useCardList();
  const navigate = useNavigate();

  const handleAddCard = () => {
    navigate(ROUTE_PATH.CARD_REGISTER);
  };

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  return (
    <PageLayout>
      <PageWrapper>
        <PageTitle>보유 카드</PageTitle>
        {status === "loading" && <CardListLoading />}
        {status === "success" && cards.length === 0 && (
          <CardListEmpty onAddCard={handleAddCard} />
        )}
        {status === "success" && cards.length !== 0 && (
          <CardListEmpty onAddCard={handleAddCard} />
        )}
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
