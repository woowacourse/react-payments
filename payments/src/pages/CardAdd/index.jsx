import "./index.scss";

import Card from "../../components/Card";
import CardNumberInput from "../../components/CardNumberInput";
import CardPasswordInput from "../../components/CardPasswordInput";
import ExpiredDateInput from "../../components/ExpiredDateInput";
import OwnerNameInput from "../../components/OwnerNameInput";
import SecureCodeInput from "../../components/SecureCodeInput";
import useCard from "../../hooks/useCard";

const CardAdd = () => {
  const [form, dispatch] = useCard();
  const { cardNumber, expiredDate, ownerName, secureCode, password } = form;

  const submit = () => {
    console.log(form);
  };

  return (
    <div className="card-add">
      <header>
        <button>{"<"}</button>
        <p>카드 추가</p>
      </header>
      <div className="card-add__container">
        <Card state={form} />
        <form>
          <CardNumberInput state={cardNumber} updateForm={dispatch} />
          <ExpiredDateInput state={expiredDate} updateForm={dispatch} />
          <OwnerNameInput state={ownerName} updateForm={dispatch} />
          <SecureCodeInput state={secureCode} updateForm={dispatch} />
          <CardPasswordInput state={password} updateForm={dispatch} />
        </form>
      </div>
      <div className="next--button">
        <button onClick={submit}>다음</button>
      </div>
    </div>
  );
};

export default CardAdd;
