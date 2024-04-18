import styles from "./App.module.css";
import Form from "./components/common/Form/Form";
import { useState } from "react";
import ShelfHeader from "./components/ShelfHeader/ShelfHeader";
import { CARD_NUMBER_UNIT_LENGTH } from "./constants";
import CardNumbersInputField from "./components/Field/CardNumbersInputField/CardNumbersInputField";
import CardExpirationDateInputField from "./components/Field/CardExpirationDateInputField/CardExpirationDateInputField";
import CardOwnerNameInputField from "./components/Field/CardOwnerNameInputField/CardOwnerNameInputField";
import Card from "./components/Card/Card";

function App() {
  const [cardNumbers, setCardNumbers] = useState<string[]>(
    new Array(CARD_NUMBER_UNIT_LENGTH).fill("")
  );

  const [date, setDate] = useState<Record<string, string>>({
    month: "",
    year: "",
  });

  const [ownerName, setOwnerName] = useState<string>("");
  return (
    <main className={styles.background}>
      <section className={styles.layout}>
        <Card cardNumbers={cardNumbers} date={date} ownerName={ownerName} />
        <Form>
          <div className={styles.shelf__section}>
            <ShelfHeader
              title="결제할 카드 번호를 입력해 주세요"
              description="본인 명의의 카드만 결제 가능합니다."
            />
            <CardNumbersInputField
              cardNumbers={cardNumbers}
              setCardNumbers={setCardNumbers}
            />
          </div>

          <div className={styles.shelf__section}>
            <ShelfHeader
              title="카드 유효기간을 입력해 주세요"
              description="월/년도(MMYY)를 순서대로 입력해 주세요."
            />
            <CardExpirationDateInputField date={date} setDate={setDate} />
          </div>

          <div className={styles.shelf__section}>
            <ShelfHeader title="카드 소유자 이름을 입력해주세요" />
            <CardOwnerNameInputField
              ownerName={ownerName}
              setOwnerName={setOwnerName}
            />
          </div>
        </Form>
      </section>
    </main>
  );
}

export default App;
