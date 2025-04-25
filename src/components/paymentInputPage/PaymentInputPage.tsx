import CardPreview from "./cardPreview/CardPreview";
import CardInputForm from "./cardInputForm/CardInputForm";
import styles from "./PaymentInputPage.module.css";
import { useState } from "react";

function PaymentInputPage() {
  const [cardInfo, setCardInfo] = useState({
    cardNumbers: [],
    expirationDate: [],
    brandName: "",
  });

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <CardPreview cardInfo={cardInfo} />
        <CardInputForm cardInfo={cardInfo} setCardInfo={setCardInfo} />
      </div>
    </section>
  );
}

export default PaymentInputPage;
