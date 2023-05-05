import "./registerSpinnerPage.css";

export default function RegisterSpinnerPage() {
  return (
    <section className="register-spinner-page">
      <div className="spinner" />
      <p className="register-text">카드를 등록중입니다.</p>
      <p className="register-text">잠시만 기다려주세요!</p>
    </section>
  );
}
