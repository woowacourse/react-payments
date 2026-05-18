import { deleteCard } from "@/api/cards";
import CardListEmpty from "@/components/CardList/CardListEmpty";
import CardListError from "@/components/CardList/CardListError";
import CardListLoading from "@/components/CardList/CardListLoading";
import CardListSuccess from "@/components/CardList/CardListSuccess";
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

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  const handleAddCard = () => {
    navigate(ROUTE_PATH.CARD_REGISTER);
  };

  const handleDeleteCard = async (cardId: string) => {
    const isConfirmed = window.confirm("카드를 삭제하시겠습니까?");

    if (!isConfirmed) return;

    try {
      await deleteCard(cardId);
      await fetchCards();
    } catch {
      // 삭제 실패 처리
    }
  };

  return (
    <PageLayout>
      <PageWrapper>
        <PageTitle>보유 카드</PageTitle>
        {status === "loading" && <CardListLoading />}
        {status === "success" && cards.length === 0 && (
          <CardListEmpty onAddCard={handleAddCard} />
        )}
        {status === "success" && cards.length > 0 && (
          <CardListSuccess
            cards={cards}
            onAddCard={handleAddCard}
            onDeleteCard={handleDeleteCard}
          />
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
