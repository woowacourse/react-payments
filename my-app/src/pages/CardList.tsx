import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import OutlinedButton from "../components/Button/OutlinedButton";
import CardListItem from "../components/CardListItem/CardListItem";
import CardListItemSkeleton from "../components/SkeletonUI/CardListItemSkeleton";

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
      .then((res) => res.json())
      .then((data: CardItem[]) => {
        setCards(data);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, []);

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
        보유 카드 ({cards.length})
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
      {status === "error" && <p>카드 정보를 불러오지 못했습니다.</p>}
      {status === "success" && cards.length === 0 && (
        <>
          <div
            css={css`
              width: 160px;
              height: 100px;
              background: #f5f5f5;
              border: 1px dashed #d9d9d9;
              border-radius: 5px;
            `}
          ></div>
          <h2
            css={css`
              font-weight: 700;
              font-style: Bold;
              font-size: 20px;
            `}
          >
            등록된 카드가 없습니다.
          </h2>
          <p>아래 버튼을 눌러 첫 카드를 등록해보세요</p>
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
