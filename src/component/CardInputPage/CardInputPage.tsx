import CardInputForm from "./CardInputForm/CardInputForm";
import "./cardInputPage.css";
import Header from "../common/Header/Header";

export default function CardInputPage() {
  return (
    <section className="card-Input-section">
      <Header hasBackButton={true}>카드 추가</Header>
      <CardInputForm />
    </section>
  );
};
