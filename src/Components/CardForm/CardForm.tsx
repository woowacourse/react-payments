import React, { useState } from "react";
import CardPreview from "../CardPreview/CardPreview";
import CardInput from "../CardInput/CardInput";
import CardNumberInput from "../CardNumberInput/CardNumberInput";
import ExpiryInput from "../ExpiryInput/ExpiryInput";
import CardOwnerNameInput from "../CardOwnerNameInput/CardOwnerNameInput";
import SelectBox from "../CardCompanySelector/CardCompanySelector";
import CardCVCInput from "../CardCVCInput/CardCVCInput";

const CardForm: React.FC = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [isCardNumberCompleted, setIsCardNumberCompleted] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardCompany | "">("");
  const [isSelectedCardCompleted, setIsSelectedCardCompleted] = useState(false);
  const [expiryMonth, setExpiryMonth] = useState("");
  const [isExpiryMonthCompleted, setIsExpiryMontthCompleted] = useState(false);
  const [expiryYear, setExpiryYear] = useState("");
  const [isExpiryYearCompleted, setIsExpiryYearCompleted] = useState(false);
  const [cardholderName, setCardholderName] = useState("");
  const [isCardholderNameCompleted, setIsCardholderNameCompleted] =
    useState(false);
  const [cardCVC, setCardCVC] = useState("");
  const [isCardCVCCompleted, setIsCardCVCCompleted] = useState(false);

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

  const handleCardCVC = (value: string) => {
    console.log("handleCardCVC value", value);
    setCardCVC(value);
    console.log("handleCardCVC cardCVC", cardCVC);
  };

  const handleCardNumberCompleted = (isCompleted: boolean) => {
    setIsCardNumberCompleted(isCompleted);
  };

  const handleSelectedCardCompleted = (isCompleted: boolean) => {
    setIsSelectedCardCompleted(isCompleted);
  };

  const handleExpiryMonthCompleted = (isCompleted: boolean) => {
    setIsExpiryMontthCompleted(isCompleted);
  };

  const handleExpiryYearCompleted = (isCompleted: boolean) => {
    setIsExpiryYearCompleted(isCompleted);
  };

  const handleCardOwnerNameCompleted = (isCompleted: boolean) => {
    setIsCardholderNameCompleted(isCompleted);
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

      {isCardholderNameCompleted && (
        <CardInput title="CVC 번호를 입력해 주세요" label="CVC">
          <CardCVCInput value={cardCVC} onChange={handleCardCVC} />
        </CardInput>
      )}

      {isExpiryMonthCompleted && isExpiryYearCompleted && (
        <CardInput
          title="카드 소유자 이름을 입력해 주세요"
          label="카드 소유자 이름"
        >
          <CardOwnerNameInput
            value={cardholderName}
            onChange={handleCardholderNameChange}
            setCompleted={handleCardOwnerNameCompleted}
          />
        </CardInput>
      )}

      {isSelectedCardCompleted && (
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
            setExpiryMonthCompleted={handleExpiryMonthCompleted}
            setExpiryYearCompleted={handleExpiryYearCompleted}
          />
        </CardInput>
      )}

      {isCardNumberCompleted && (
        <CardInput
          title="카드사를 선택해 주세요"
          description="현재 국내 카드사만 가능합니다."
          label="카드 소유자 이름"
        >
          <SelectBox
            onSelect={handleSelect}
            setCompleted={handleSelectedCardCompleted}
          />
        </CardInput>
      )}

      <CardInput
        title="결제할 카드 번호를 입력해 주세요"
        label="카드 번호"
        description="본인 명의의 카드만 결제 가능합니다"
      >
        <CardNumberInput
          value={cardNumber}
          onChange={handleCardNumberChange}
          // setIsValid={setCardNumberIsValid}
          setCompleted={handleCardNumberCompleted}
        />
      </CardInput>

      {/* 

      

   

   

      */}
    </form>
  );
};

export default CardForm;
