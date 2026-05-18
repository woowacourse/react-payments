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
  const { cards, status, fetchCards, removeCard } = useCardList();
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
      await removeCard(cardId);
    } catch (error) {
      window.alert(
        error instanceof Error ? error.message : "카드 삭제에 실패했습니다.",
      );
    }
  };

  const hasCards = cards.length > 0;
  const isSuccess = status === "success";
  const isLoading = status === "loading";
  const isError = status === "error";
  const isEmpty = isSuccess && !hasCards;

  const pageTitle =
    isSuccess && hasCards ? `보유 카드 (${cards.length})` : "보유 카드";

  return (
    <PageLayout>
      <PageWrapper>
        <PageTitle>{pageTitle}</PageTitle>

        {isLoading && <CardListLoading />}
        {isEmpty && <CardListEmpty onAddCard={handleAddCard} />}
        {isSuccess && hasCards && (
          <CardListSuccess
            cards={cards}
            onAddCard={handleAddCard}
            onDeleteCard={handleDeleteCard}
          />
        )}
        {isError && <CardListError onRetry={fetchCards} />}
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
