import { EXPLANATION_MESSAGE } from "../../constant/message";
import "./registerSpinnerPage.css";

export default function RegisterSpinnerPage() {
  return (
    <section className="register-spinner-page">
      <div className="loader">
        <div className="loading-spinner"></div>
        <div className="loading-spinner"></div>
        <div className="loading-spinner"></div>
      </div>
      <p className="register-text">{EXPLANATION_MESSAGE.REGISTER_CARD}</p>
      <p className="register-wait-text">
        {EXPLANATION_MESSAGE.REGISTER_CARD_WAIT}
      </p>
    </section>
  );
}
