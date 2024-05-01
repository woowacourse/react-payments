import { useState } from "react";

import InputPageLayout from "../components/layout/InputPageLayout";

import Caption from "../components/common/Caption";
import InputTitle from "../components/common/InputTitle";

import CardPreview from "../components/CardPreview/CardPreview";
import CardNumberInput from "../components/CardNumberInput";
import ExpirationDateInput from "../components/ExpirationDateInput";
import CardOwnerNameInput from "../components/CardOwnerNameInput";

import { INPUT_QUERY, CAPTION } from "../constants/card-app";

import { CardInfo } from "../types/card";

const NewCardInputPage = () => {
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
    <InputPageLayout>
      <CardPreview cardInfo={newCardInfo} />

      <InputTitle text={INPUT_QUERY.cardNumberInput} />
      <Caption text={CAPTION.cardNumberInput} type="input" />
      <CardNumberInput
        cardNumbers={newCardInfo.cardNumbers}
        errorCaption={(errorText: string) => (
          <Caption text={errorText} type="error" />
        )}
        handleCardNumberChange={handleCardNumberChange}
      />

      <InputTitle text={INPUT_QUERY.expirationDate} />
      <Caption text={CAPTION.expirationDate} type="input" />
      <ExpirationDateInput
        expirationDate={newCardInfo.expirationDate}
        errorCaption={(errorText: string) => (
          <Caption text={errorText} type="error" />
        )}
        handleExpirationDateChange={handleExpirationDateChange}
      />

      <InputTitle text={INPUT_QUERY.cardOwner} />
      <CardOwnerNameInput
        ownerName={newCardInfo.cardOwner}
        errorCaption={(errorText: string) => (
          <Caption text={errorText} type="error" />
        )}
        handleCardOwnerNameChange={handleCardOwnerNameChange}
      />
    </InputPageLayout>
  );
};

export default NewCardInputPage;
