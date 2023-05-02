import CardInputForm from "./CardInputForm/CardInputForm";
import { CreditCardProvider } from "../../context/CreditCardContext";
import "./cardInputPage.css";
import { CreditCard } from "../../type/CreditCard";
import Header from "../common/Header/Header";

interface Props {
  addNewCard: (card: CreditCard) => void;
}

export default function CardInputPage(props: Props) {
  const { addNewCard } = props;

  return (
    <section className="card-Input-section">
      <Header hasBackButton={true}>카드 추가</Header>
      <CreditCardProvider>
        <CardInputForm addNewCard={addNewCard} />
      </CreditCardProvider>
    </section>
  );
}
