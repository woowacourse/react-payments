import { Link } from "react-router-dom";

import "./addCardButton.css";

export default function AddCardButton() {
  return (
    <Link to="/CardInputPage">
      <button className="add-card-button">
        <svg
          className="add-card-button-icon"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.30372 7.18842H15.251V9.75189H9.30372V16.4902H6.57911V9.75189H0.631842V7.18842H6.57911V0.96283H9.30372V7.18842Z"
            fill="#575757"
          />
        </svg>
      </button>
    </Link>
  );
}
