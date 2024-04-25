import React, { useState } from "react";
import CardPreview from "../CardPreview/CardPreview";
import CardInput from "../CardInput/CardInput";
import CardNumberInput from "../CardNumberInput/CardNumberInput";
import ExpiryInput from "../ExpiryInput/ExpiryInput";
import CardOwnerNameInput from "../CardOwnerNameInput/CardOwnerNameInput";
import SelectBox from "../CardCompanySelector/CardCompanySelector";

const CardForm: React.FC = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [selectedCard, setSelectedCard] = useState<CardCompany | "">("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cardholderName, setCardholderName] = useState("");

  const handleCardNumberChange = (value: string) => {
    const filteredValue = value.replace(/\D/g, "");
    const formattedValue = filteredValue.replace(/(\d{4})/g, "$1 ").trim();
    setCardNumber(formattedValue);
  };

  const handleExpiryMonthChange = (value: string) => {
    const filteredValue = value.replace(/\D/g, "");
    if (filteredValue === "" || parseInt(filteredValue, 10) <= 12) {
      setExpiryMonth(filteredValue);
    }
  };

  const handleExpiryYearChange = (value: string) => {
    const filteredValue = value.replace(/\D/g, "").slice(0, 2);
    setExpiryYear(filteredValue);
  };

  const handleCardholderNameChange = (value: string) => {
    setCardholderName(value.toUpperCase());
  };

  const handleSelect = (value: CardCompany | "") => {
    setSelectedCard(value);
  };

  return (
    <form>
      <CardPreview
        cardNumber={cardNumber}
        expiryMonth={expiryMonth}
        expiryYear={expiryYear}
        cardholderName={cardholderName}
        cardCompany={selectedCard}
      />

      <CardInput
        title="결제할 카드 번호를 입력해 주세요"
        label="카드 번호"
        description="본인 명의의 카드만 결제 가능합니다"
      >
        <CardNumberInput
          value={cardNumber}
          onChange={handleCardNumberChange}
          // setIsValid={setCardNumberIsValid}
        />
      </CardInput>

      <CardInput
        title="카드 유효기간을 입력해 주세요"
        label="유효기간"
        description="월/년도(MMYY)를 순서대로 입력해 주세요"
      >
        <ExpiryInput
          month={expiryMonth}
          year={expiryYear}
          onMonthChange={handleExpiryMonthChange}
          onYearChange={handleExpiryYearChange}
        />
      </CardInput>

      <CardInput
        title="카드 소유자 이름을 입력해 주세요"
        label="카드 소유자 이름"
      >
        <CardOwnerNameInput
          value={cardholderName}
          onChange={handleCardholderNameChange}
        />
      </CardInput>

      <CardInput
        title="카드 소유자 이름을 입력해 주세요"
        label="카드 소유자 이름"
      >
        <div>
          <SelectBox onSelect={handleSelect} />
          <p>선택한 카드사: {selectedCard}</p>
        </div>
      </CardInput>
    </form>
  );
};

export default CardForm;
