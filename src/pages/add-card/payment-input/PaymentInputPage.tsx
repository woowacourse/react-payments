import CardPreview from "./components/cardPreview/CardPreview";
import CardInputForm from "./components/cardInputForm/CardInputForm";
import styles from "./PaymentInputPage.module.css";
import { useState } from "react";
import { TCardBrand } from "./components/cardPreview/constants/DisplayData";
export interface CardInfo {
  cardNumbers: string[];
  expirationDate: string[];
  brandName: TCardBrand | null;
}

function PaymentInputPage() {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    cardNumbers: [],
    expirationDate: [],
    brandName: null,
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
