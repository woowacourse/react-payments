import CardInputForm from "./CardInputForm/CardInputForm";
import { CreditCardProvider } from "../../context/CreditCardContext";
import "./cardInputPage.css";
import { CreditCard } from "../../type/CreditCard";
import Header from "../common/Header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface Props {
  addNewCard: (card: CreditCard) => void;
}

export default function CardInputPage(props: Props) {
  const { addNewCard } = props;

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (
      !location.state
      || !Object.prototype.hasOwnProperty.call(location.state, 'validAccess')
    ) {
      navigate('/');
    }
  }, [location]);

  return (
    <section className="card-Input-section">
      <Header hasBackButton={true}>카드 추가</Header>
      <CreditCardProvider>
        <CardInputForm addNewCard={addNewCard} />
      </CreditCardProvider>
    </section>
  );
}
