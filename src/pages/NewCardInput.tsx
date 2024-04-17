import PaymentLayout from "../components/layout/PaymentLayout";
import CardNumberInput from "../components/CardNumberInput";
import InputTitle from "../components/common/InputTitle";
import {
  INPUT_QUERY,
  CAPTION,
  VALIDATION_MESSAGES,
} from "../constants/card-app";
import Caption from "../components/common/Caption";
import ExpirationDateInput from "../components/ExpirationDateInput";
import CardOwnerNameInput from "../components/CardOwnerNameInput";
import { useState } from "react";
import { CardInfo } from "../types/card";
import CardPreview from "../components/CardPreview/CardPreview";

const NewCardInput = () => {
  const [newCardInfo, setNewCardInfo] = useState<CardInfo>({
    cardNumbers: ["", "", "", ""],
    expirationDate: ["", ""],
    cardOwner: "",
  });

  const handleCardNumberChange = (index: number, value: string) => {
    const updatedCardNumbers = [...newCardInfo.cardNumbers];
    updatedCardNumbers[index] = value;

    setNewCardInfo((prev) => {
      return {
        ...prev,
        cardNumbers: updatedCardNumbers,
      };
    });
  };

  const handleExpirationDateChange = (index: number, value: string) => {
    const updatedExpirationDate = [...newCardInfo.expirationDate];
    updatedExpirationDate[index] = value;

    setNewCardInfo((prev) => {
      return {
        ...prev,
        expirationDate: updatedExpirationDate,
      };
    });
  };

  const handleCardOwnerNameChange = (value: string) => {
    setNewCardInfo((prev) => {
      return {
        ...prev,
        cardOwner: value,
      };
    });
  };

  return (
    <PaymentLayout>
      <CardPreview cardInfo={newCardInfo} />

      <InputTitle text={INPUT_QUERY.cardNumberInput} />
      <Caption text={CAPTION.cardNumberInput} type="input" />
      <CardNumberInput
        inputCount={4}
        errorCaption={() => (
          <Caption text={VALIDATION_MESSAGES.onlyNumbersAllowed} type="error" />
        )}
        handleCardNumberChange={handleCardNumberChange}
      />

      <InputTitle text={INPUT_QUERY.expirationDate} />
      <Caption text={CAPTION.expirationDate} type="input" />
      <ExpirationDateInput
        dates={["MM", "YY"]}
        errorCaption={(errorText: string) => (
          <Caption text={errorText} type="error" />
        )}
        handleExpirationDateChange={handleExpirationDateChange}
      />

      <InputTitle text={INPUT_QUERY.cardOwner} />
      <Caption text="" type="input" />
      <CardOwnerNameInput
        ownerName={newCardInfo.cardOwner}
        errorCaption={() => (
          <Caption text={VALIDATION_MESSAGES.onlyEnglishAllowed} type="error" />
        )}
        handleCardOwnerNameChange={handleCardOwnerNameChange}
      />
    </PaymentLayout>
  );
};

export default NewCardInput;
