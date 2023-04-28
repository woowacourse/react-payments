import CardInputForm from "./CardInputForm/CardInputForm";
import { CreditCardProvider } from "../../context/CreditCardContext";

import "./cardInputPage.css";
import { CreditCard } from "../../type/CreditCard";
import { useNavigate } from "react-router-dom";

interface Props {
  addNewCard: (card: CreditCard) => void;
}

export default function CardInputPage(props: Props) {
  const { addNewCard } = props;
  const navigate = useNavigate();

  return (
    <section className="card-Input-section">
      <div className="card-Input-section-header">
        <button 
          className="back-page-button"
          type="button"
          onClick={() => navigate(-1)}
        >
          <svg
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.30425 1L1.36475 8.78658L9.15133 15.7261"
              stroke="#525252"
              strokeWidth="1.5"
            />
          </svg>
        </button>
        <span className="page-explanation">카드 추가</span>
      </div>
      <CreditCardProvider>
        <CardInputForm addNewCard={addNewCard} />
      </CreditCardProvider>
    </section>
  );
}
