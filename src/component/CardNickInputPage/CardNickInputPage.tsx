import { Link } from "react-router-dom";

import Button from "../common/Button";
import CardPreview from "../common/CardPreview";

import { CreditCard } from "../../type";

import InputBoxNick from "./InputBoxNick/InputBoxNick";

import "./cardNickInputPage.css";
import { ARIA_LABEL_MESSAGE, EXPLANATION_MESSAGE } from "../../CONSTANT";

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
      <p className="card-nick-input-direction">
        {EXPLANATION_MESSAGE.BE_REGISTERED_CARD}
      </p>
      <CardPreview
        className="nick-input-section-card-preview"
        card={card}
        style={{ cursor: "initial", margin: "0" }}
      />
      <InputBoxNick submitNickAndSetCard={submitNickAndSetCard} />
      <Link
        to="/CardListPage"
        className="card-nick-input-next-button-container"
        aria-label={ARIA_LABEL_MESSAGE.END_PAGE}
      >
        <Button style={{ float: "right" }}>
          {EXPLANATION_MESSAGE.END_BUTTON}
        </Button>
      </Link>
    </section>
  );
}
