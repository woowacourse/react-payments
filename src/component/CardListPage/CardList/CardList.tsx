import { CreditCard } from "../../../type";
import CardPreview from "../../common/CardPreview";
import AddCardButton from "../AddCardButton/AddCardButton";
import "./cardList.css";

interface Props {
  cardList: CreditCard[];
}

export default function CardList(props: Props) {
  const { cardList } = props;
  return (
    <div className="card-list">
      {cardList.map((card) => CardPreview({ card }))}
      {cardList.length === 0 && (
        <p className="add-card-button-explanation">
          새로운 카드를 등록해주세요.
        </p>
      )}
      <AddCardButton />
    </div>
  );
}
