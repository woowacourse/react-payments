import CardPreview from "./components/cardPreview/CardPreview";
import CardInputForm from "./components/cardInputForm/CardInputForm";
import styles from "./PaymentInputPage.module.css";
import { useState } from "react";
import { TCardBrand } from "./components/cardPreview/constants/DisplayData";
export interface CardInfo {
  cardNumbers: string[];
  expirationDate: string[];
  brandName: TCardBrand | "";
}

function PaymentInputPage() {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    cardNumbers: [],
    expirationDate: [],
    brandName: "",
  });

  const handleCardNumbersChange = (newCardNumbers: string[]) => {
    setCardInfo((prev) => ({
      ...prev,
      cardNumbers: newCardNumbers,
    }));
  };

  const handleExpirationDateChange = (newExpirationDate: string[]) => {
    setCardInfo((prev) => ({
      ...prev,
      expirationDate: newExpirationDate,
    }));
  };
  const handleBrandNameChange = (newBrandName: TCardBrand | "") => {
    setCardInfo((prev) => ({
      ...prev,
      brandName: newBrandName,
    }));
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <CardPreview cardInfo={cardInfo} />
        <CardInputForm
          cardInfo={cardInfo}
          handleCardNumbersChange={handleCardNumbersChange}
          handleExpirationDateChange={handleExpirationDateChange}
          handleBrandNameChange={handleBrandNameChange}
        />
      </div>
    </section>
  );
}

export default PaymentInputPage;
