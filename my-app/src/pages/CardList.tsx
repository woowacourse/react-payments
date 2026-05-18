import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import OutlinedButton from "../components/Button/OutlinedButton";
import CardListItem from "../components/CardListItem/CardListItem";
import CardListItemSkeleton from "../components/SkeletonUI/CardListItemSkeleton";
import EmptyState from "../components/common/EmptyState";
type CardItem = {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
};

type Status = "idle" | "loading" | "success" | "error";

const CardList = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<Status>("loading");
  const [cards, setCards] = useState<CardItem[]>([]);

  useEffect(() => {
    fetch("/cards")
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data: CardItem[]) => {
        setCards(data);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, []);

  const handleDelete = async (id: string) => {
    const isConfirmed = window.confirm("카드를 삭제하시겠습니까?");
    if (!isConfirmed) return;

    await fetch(`/cards/${id}`, { method: "DELETE" });
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 40px 30px;
      `}
    >
      <h1
        css={css`
          font-weight: 700;
          font-style: Bold;
          font-size: 18px;
          align-self: flex-start;
        `}
      >
        보유 카드 {cards.length !== 0 && `(${cards.length})`}
      </h1>

      {status === "loading" && (
        <div
          css={css`
            display: flex;
            flex-direction: column;
            gap: 16px;
          `}
        >
          <CardListItemSkeleton />
          <CardListItemSkeleton />
          <CardListItemSkeleton />
          <Button isActivate={false}></Button>
        </div>
      )}
      {status === "error" && (
        <>
          <EmptyState
            icon={
              <div
                css={css`
                  width: 64px;
                  height: 64px;
                  border-radius: 50%;
                  background: #353c49;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: white;
                  font-size: 32px;
                  font-weight: 700;
                `}
              >
                !
              </div>
            }
            title="카드 목록을 불러올 수 없어요"
            description="잠시 후 다시 시도해 주세요."
          ></EmptyState>

          <Button onClick={() => navigate("/add")}>다시 시도</Button>
        </>
      )}
      {status === "success" && cards.length === 0 && (
        <>
          <EmptyState
            icon={
              <div
                css={css`
                  width: 160px;
                  height: 100px;
                  background: #f5f5f5;
                  border: 1px dashed #d9d9d9;
                  border-radius: 5px;
                `}
              ></div>
            }
            title="등록된 카드가 없습니다"
            description="아래 버튼을 눌러 첫 카드를 등록해보세요"
          ></EmptyState>

          <Button onClick={() => navigate("/add")}>카드 추가하기</Button>
        </>
      )}
      {status === "success" && cards.length > 0 && (
        <div
          css={css`
            display: flex;
            flex-direction: column;
            flex: 1;
            gap: 16px;
            overflow: hidden;
          `}
        >
          <ul
            css={css`
              display: flex;
              flex-direction: column;
              gap: 16px;
              padding: 0;
              flex: 1;
              overflow-y: auto;
              scrollbar-width: none;
              &::-webkit-scrollbar {
                display: none;
              }
            `}
          >
            {cards.map((card) => (
              <li
                key={card.id}
                css={css`
                  list-style: none;
                `}
              >
                <CardListItem
                  issuerCode={card.issuerCode}
                  number={card.number}
                  expirationDate={card.expirationDate}
                  onDelete={() => handleDelete(card.id)}
                />
              </li>
            ))}
          </ul>
          <OutlinedButton onClick={() => navigate("/add")}>+ 카드 추가하기</OutlinedButton>
        </div>
      )}
    </div>
  );
};

export default CardList;
