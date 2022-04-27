import "./index.scss";

import Card from "../../components/Card";
import CardNumberInput from "../../components/CardNumberInput";
import CardPasswordInput from "../../components/CardPasswordInput";
import ExpiredDateInput from "../../components/ExpiredDateInput";
import OwnerNameInput from "../../components/OwnerNameInput";
import SecureCodeInput from "../../components/SecureCodeInput";

const CardAdd = () => {
  return (
    <div className="card-add">
      <header>
        <button>{"<"}</button>
        <p>카드 추가</p>
      </header>
      <div className="card-add__container">
        <Card />
        <form>
          <CardNumberInput />
          <ExpiredDateInput />
          <OwnerNameInput />
          <SecureCodeInput />
          <CardPasswordInput />
        </form>
      </div>
      <div className="next--button">
        <button>다음</button>
      </div>
    </div>
  );
};

export default CardAdd;
