import CardPreview from "../../common/CardPreview";
import AddCardButton from "../AddCardButton/AddCardButton";
import CardPreviewBox from "./CardPreviewBox";

import { CreditCard } from "../../../type";

import "./cardList.css";

interface CardListProps {
  cardList: CreditCard[];
}

export default function CardList(props: CardListProps) {
  const { cardList } = props;

  return (
    <div className="card-list">
      {cardList.length === 0 ? (
        <p className="add-card-button-explanation">
          새로운 카드를 등록해주세요.
        </p>
      ) : cardList.length === 1 ? (
        cardList.map((card) => CardPreview({ card }))
      ) : (
        cardList.map((card) => CardPreviewBox({ card }))
      )}
      <AddCardButton />
    </div>
  );
}
