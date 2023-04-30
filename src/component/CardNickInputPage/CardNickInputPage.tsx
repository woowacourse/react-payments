import { Link } from "react-router-dom";
import { CreditCard } from "../../type";
import Button from "../common/Button";
import CardPreview from "../common/CardPreview";
import "./cardNickInputPage.css";

const ex: CreditCard = {
  nickName: "",
  owner: "JJJJ",
  expirationDate: "12/23",
  cardCo: "woori",
  cardNumber: [1111, 4444, 5555, 6666],
  securityCode: "123",
  password: [1, 6],
};

export default function CardListPage() {
  return (
    <section className="card-nick-input-section">
      <p className="card-nick-input-direction">카드 등록이 완료되었습니다</p>
      <CardPreview card={ex} style={{ cursor: "initial", margin: "0" }} />
      <input className="card-nick-input" placeholder={ex.nickName} />
      <Link
        to="/CardListPage"
        className="card-nick-input-next-button-container"
      >
        <Button className="card-nick-input-next-button" type="submit">
          확인
        </Button>
      </Link>
    </section>
  );
}
