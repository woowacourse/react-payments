import CardPreview from "./components/cardPreview/CardPreview";
import CardInputForm from "./components/cardInputForm/CardInputForm";
import styles from "./PaymentInputPage.module.css";
import { useState, useCallback } from "react";
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

  const handleInputChange = useCallback(
    <K extends keyof CardInfo>(inputName: K, value: CardInfo[K]) => {
      setCardInfo((prev) => ({
        ...prev,
        [inputName]: value,
      }));
    },
    []
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <CardPreview cardInfo={cardInfo} />
        <CardInputForm
          cardInfo={cardInfo}
          handleCardNumbersChange={(value) =>
            handleInputChange("cardNumbers", value)
          }
          handleExpirationDateChange={(value) =>
            handleInputChange("expirationDate", value)
          }
          handleBrandNameChange={(value) =>
            handleInputChange("brandName", value)
          }
        />
      </div>
    </section>
  );
}

export default PaymentInputPage;
