import { GUIDE_MESSAGE } from "../../CONSTANT";
import "./registerSpinnerPage.css";

export default function RegisterSpinnerPage() {
  return (
    <section className="register-spinner-page">
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="register-text">{GUIDE_MESSAGE.REGISTER_TEXT}</p>
      <p className="register-wait-text">{GUIDE_MESSAGE.REGISTER_WAIT_TEXT}</p>
    </section>
  );
}
