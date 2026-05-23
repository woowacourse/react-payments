import { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import EmptyCardList from "../components/CardList/EmptyCardList";
import Spinner from "../components/Common/Spinner";

interface Card {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
}

type FetchState =
  | { status: "loading" }
  | { status: "success"; data: Card[] }
  | { status: "error" };

const ISSUER_INFO: Record<string, { name: string; color: string }> = {
  "31": { name: "BC카드", color: "#E14F4F" },
  "41": { name: "신한카드", color: "#2563EB" },
  "15": { name: "카카오뱅크", color: "#F7E600" },
  "61": { name: "현대카드", color: "#333333" },
  W1: { name: "우리카드", color: "#59C2B0" },
  "71": { name: "롯데카드", color: "#E8453C" },
  "21": { name: "하나카드", color: "#3AB277" },
  "11": { name: "국민카드", color: "#9B59B6" },
};

function formatCardNumber(masked: string) {
  return `${masked.slice(0, 4)} **** **** ${masked.slice(-4)}`;
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

const CardList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  overflow-y: auto;
`;

const CardItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
`;

const CardThumbnail = styled.div<{ color: string }>`
  width: 80px;
  height: 50px;
  border-radius: 5px;
  background-color: ${({ color }) => color};
  flex-shrink: 0;
`;

const CardInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CardCompanyName = styled.span`
  font-size: 14px;
  font-weight: 700;
`;

const CardNumber = styled.span`
  font-size: 13px;
  color: #8c8c8c;
`;

const CardExpiry = styled.span`
  font-size: 12px;
  color: #8c8c8c;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #8c8c8c;
  padding: 4px;
  line-height: 1;
  flex-shrink: 0;
  &:hover {
    color: #333;
  }
`;

const ErrorWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const ErrorIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #333;
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin: 0;
`;

const ErrorDescription = styled.p`
  font-size: 12px;
  color: #8c8c8c;
  margin: 0;
`;

const RetryButton = styled.button`
  margin-top: 8px;
  width: 100%;
  height: 52px;
  background: #333;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const AddCardButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: 1px dashed #d9d9d9;
  border-radius: 4px;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  color: #8c8c8c;
  cursor: pointer;
`;

function CardDashboardPage() {
  const navigate = useNavigate();
  const [fetchState, setFetchState] = useState<FetchState>({
    status: "loading",
  });

  const fetchCards = useCallback(() => {
    fetch(`${import.meta.env.BASE_URL}cards`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data: Card[]) => setFetchState({ status: "success", data }))
      .catch(() => setFetchState({ status: "error" }));
  }, []);

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  const handleRetry = () => {
    navigate("/cards");
    setFetchState({ status: "loading" });
    fetchCards();
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("카드를 삭제하시겠습니까?")) return;
    const res = await fetch(`${import.meta.env.BASE_URL}cards/${id}`, { method: "DELETE" });
    if (!res.ok) {
      alert("카드 삭제에 실패했습니다. 다시 시도해 주세요.");
      return;
    }
    setFetchState((prev) =>
      prev.status === "success"
        ? {
            status: "success",
            data: prev.data.filter((card) => card.id !== id),
          }
        : prev,
    );
  };

  const cardCount =
    fetchState.status === "success" ? fetchState.data.length : 0;

  return (
    <View>
      <PageTitle>보유 카드 ({cardCount})</PageTitle>
      {fetchState.status === "loading" ? (
        <Spinner />
      ) : fetchState.status === "error" ? (
        <ErrorWrapper>
          <ErrorIcon>!</ErrorIcon>
          <ErrorTitle>카드 목록을 불러올 수 없습니다.</ErrorTitle>
          <ErrorDescription>잠시 후 다시 시도해 주세요.</ErrorDescription>
          <RetryButton onClick={handleRetry}>다시 시도</RetryButton>
        </ErrorWrapper>
      ) : fetchState.data.length === 0 ? (
        <EmptyCardList />
      ) : (
        <CardList>
          {fetchState.data.map((card) => {
            const info = ISSUER_INFO[card.issuerCode];
            return (
              <CardItem key={card.id}>
                <CardThumbnail color={info.color} />
                <CardInfo>
                  <CardCompanyName>{info.name}</CardCompanyName>
                  <CardNumber>{formatCardNumber(card.number)}</CardNumber>
                  <CardExpiry>유효기간 {card.expirationDate}</CardExpiry>
                </CardInfo>
                <DeleteButton onClick={() => handleDelete(card.id)}>
                  ✕
                </DeleteButton>
              </CardItem>
            );
          })}
          <AddCardButton onClick={() => navigate("/cards/register")}>
            + 카드 추가
          </AddCardButton>
        </CardList>
      )}
    </View>
  );
}

export default CardDashboardPage;
