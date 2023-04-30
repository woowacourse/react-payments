import { Link } from "react-router-dom";
import { CreditCard } from "../../type";
import Button from "../common/Button";
import CardPreview from "../common/CardPreview";
import "./cardNickInputPage.css";
import InputBoxNick from "./InputBoxNick/InputBoxNick";

interface CardNickInputPageProps {
  card: CreditCard;
  setNickNewCard: (card: CreditCard) => void;
}

export default function CardNickInputPage({
  card,
  setNickNewCard,
}: CardNickInputPageProps) {
  const submitNickAndSetCard = (nick: string) => {
    const changedCard = JSON.parse(JSON.stringify(card));
    changedCard.nickName = nick;
    setNickNewCard(changedCard);
  };

  return (
    <section className="card-nick-input-section">
      <p className="card-nick-input-direction">카드 등록이 완료되었습니다</p>
      <CardPreview card={card} style={{ cursor: "initial", margin: "0" }} />
      <InputBoxNick submitNickAndSetCard={submitNickAndSetCard} />
      <Link
        to="/CardListPage"
        className="card-nick-input-next-button-container"
      >
        <Button>확인</Button>
      </Link>
    </section>
  );
}
