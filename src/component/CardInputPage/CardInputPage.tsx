import { Link } from "react-router-dom";

import CardInputForm from "./CardInputForm/CardInputForm";

import { CreditCard } from "../../type";
import { ReactComponent as LessThanSide } from "../../asset/lessThanSide.svg";

import "./cardInputPage.css";
import {
  ARIA_LABEL_MESSAGE,
  EXPLANATION_MESSAGE,
} from "../../constant/message";

interface CardInputPageProps {
  addNewCard: (card: CreditCard) => void;
}

export default function CardInputPage(props: CardInputPageProps) {
  const { addNewCard } = props;

  return (
    <section className="card-Input-section">
      <div className="card-Input-section-header">
        <Link
          to="/"
          className="back-page-button"
          type="button"
          aria-label={ARIA_LABEL_MESSAGE.BACK_PAGE}
        >
          <LessThanSide />
        </Link>
        <span className="page-explanation">
          {EXPLANATION_MESSAGE.CARD_FORM_PAGE}
        </span>
      </div>
      <CardInputForm addNewCard={addNewCard} />
    </section>
  );
}
