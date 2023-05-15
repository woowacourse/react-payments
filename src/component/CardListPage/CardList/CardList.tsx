import CardPreview from "../../common/CardPreview";
import AddCardButton from "../AddCardButton/AddCardButton";
import CardPreviewBox from "./CardPreviewBox";

import { CreditCard } from "../../../type";

import "./cardList.css";
import { DIRECTION_MESSAGE } from "../../../constant/message";

interface CardListProps {
  cardList: CreditCard[];
}

export default function CardList(props: CardListProps) {
  const { cardList } = props;

  return (
    <div className="card-list">
      {cardList.length === 0 ? (
        <p className="add-card-button-explanation">
          {DIRECTION_MESSAGE.EMPTY_CARD_LIST}
        </p>
      ) : cardList.length === 1 ? (
        cardList.map((card) => <CardPreview card={card} />)
      ) : (
        cardList.map((card) => (
          <CardPreviewBox key={card.cardNumber.join("")} card={card} />
        ))
      )}
      <AddCardButton />
    </div>
  );
}
