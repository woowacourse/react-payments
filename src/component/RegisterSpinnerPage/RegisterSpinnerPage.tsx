import { EXPLANATION_MESSAGE } from "../../CONSTANT";
import "./registerSpinnerPage.css";

export default function RegisterSpinnerPage() {
  return (
    <section className="register-spinner-page">
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="register-text">{EXPLANATION_MESSAGE.REGISTER_CARD}</p>
      <p className="register-wait-text">
        {EXPLANATION_MESSAGE.REGISTER_CARD_WAIT}
      </p>
    </section>
  );
}
