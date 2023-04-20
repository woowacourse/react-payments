import CardInputForm from "./CardInputForm/CardInputForm";

import "./cardInputPage.css";

export default function CardInputPage() {
  return (
    <section className="card-Input-section">
      <div className="card-Input-section-header">
        <button className="back-page-button" type="button">
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
              stroke-width="1.5"
            />
          </svg>
        </button>
        <span className="page-explanation">카드 추가</span>
      </div>
      <CardInputForm />
    </section>
  );
}
