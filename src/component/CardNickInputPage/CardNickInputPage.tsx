import { Link } from "react-router-dom";
import { CreditCard } from "../../type";
import Button from "../common/Button";
import CardPreview from "../common/CardPreview";
import "./cardNickInputPage.css";

interface CardNickInputPageProps {
  card: CreditCard;
  setNickNewCard: (card: CreditCard) => void;
}

export default function CardNickInputPage({
  card,
  setNickNewCard,
}: CardNickInputPageProps) {
  return (
    <section className="card-nick-input-section">
      <p className="card-nick-input-direction">카드 등록이 완료되었습니다</p>
      <CardPreview card={card} style={{ cursor: "initial", margin: "0" }} />
      <input className="card-nick-input" placeholder={card.nickName} />
      <Link
        to="/CardListPage"
        className="card-nick-input-next-button-container"
      >
        <Button className="card-nick-input-next-button" type="submit">
          확인
        </Button>
      </Link>
    </section>
  );
}
