import { Link } from "react-router-dom";

import CardInputForm from "./CardInputForm/CardInputForm";

import { CreditCard } from "../../type";
import { ReactComponent as LessThanSide } from "../../asset/lessThanSide.svg";

import "./cardInputPage.css";

interface CardInputPageProps {
  addNewCard: (card: CreditCard) => void;
}

export default function CardInputPage(props: CardInputPageProps) {
  const { addNewCard } = props;

  return (
    <section className="card-Input-section">
      <div className="card-Input-section-header">
        <Link to="/">
          <button className="back-page-button" type="button"></button>
          <LessThanSide />
        </Link>
        <span className="page-explanation">카드 추가</span>
      </div>
      <CardInputForm addNewCard={addNewCard} />
    </section>
  );
}
