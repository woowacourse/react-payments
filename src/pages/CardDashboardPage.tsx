import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useCardList } from "../hooks/useCardList";
import CardFetchError from "../components/CardList/CardFetchError";
import CardList from "../components/CardList/CardList";
import EmptyCardList from "../components/CardList/EmptyCardList";
import Spinner from "../components/Common/Spinner";

const View = styled.div`
  width: 100%;
  max-width: 376px;
  height: 100dvh;
  margin: 0 auto;
  padding: 16px 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PageTitle = styled.h1`
  margin-top: 30px;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  font-family: Noto Sans KR;
  line-height: 100%;
`;

function CardDashboardPage() {
  const navigate = useNavigate();
  const { fetchState, retry, handleDelete } = useCardList();

  const handleRetry = () => {
    navigate("/cards");
    retry();
  };

  const cardCount = fetchState.status === "success" ? fetchState.data.length : 0;

  return (
    <View>
      <PageTitle>보유 카드 ({cardCount})</PageTitle>
      {fetchState.status === "loading" && <Spinner />}
      {fetchState.status === "error" && <CardFetchError onRetry={handleRetry} />}
      {fetchState.status === "success" && fetchState.data.length === 0 && <EmptyCardList />}
      {fetchState.status === "success" && fetchState.data.length > 0 && (
        <CardList
          cards={fetchState.data}
          onDelete={handleDelete}
          onAddCard={() => navigate("/cards/register")}
        />
      )}
    </View>
  );
}

export default CardDashboardPage;
