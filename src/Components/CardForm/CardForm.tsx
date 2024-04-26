import React, { useEffect, useState } from "react";
import CardPreview from "../CardPreview/CardPreview";
import CardInput from "../CardInput/CardInput";
import CardNumberInput from "../CardNumberInput/CardNumberInput";
import ExpiryInput from "../ExpiryInput/ExpiryInput";
import CardOwnerNameInput from "../CardOwnerNameInput/CardOwnerNameInput";
import SelectBox from "../CardCompanySelector/CardCompanySelector";
import CardCVCInput from "../CardCVCInput/CardCVCInput";
import Button from "../common/Button/Button";
import { useNavigate } from "react-router-dom";
import CardPasswordInput from "../CardPasswordInput/CardPasswordInput";

const CardForm: React.FC = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [isCardNumberCompleted, setIsCardNumberCompleted] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardCompany | "">("");
  const [isSelectedCardCompleted, setIsSelectedCardCompleted] = useState(false);
  const [expiryMonth, setExpiryMonth] = useState("");
  const [isExpiryMonthCompleted, setIsExpiryMonthCompleted] = useState(false);
  const [expiryYear, setExpiryYear] = useState("");
  const [isExpiryYearCompleted, setIsExpiryYearCompleted] = useState(false);
  const [cardholderName, setCardholderName] = useState("");
  const [isCardholderNameCompleted, setIsCardholderNameCompleted] =
    useState(false);
  const [cardCVC, setCardCVC] = useState("");
  const [cardPassword, setCardPassword] = useState("");
  const [isCardCVCCompleted, setIsCardCVCCompleted] = useState(false);
  const [showCardCVCInput, setShowCardCVCInput] = useState(false);
  const [showExpiryInput, setShowExpiryInput] = useState(false);
  const [showCardOwnerNameInput, setShowCardOwnerNameInput] = useState(false);
  const [showSelectBox, setShowSelectBox] = useState(false);
  const [showCardPasswordInput, setShowCardPasswordInput] = useState(false);
  const [isOnCVCInput, setIsOnCVCInput] = useState(false);
  const [isCardPasswordCompleted, setIsCardPasswordCompleted] = useState(false);

  const navigate = useNavigate();

  const isAllCompleted =
    isCardCVCCompleted &&
    isCardholderNameCompleted &&
    isExpiryYearCompleted &&
    isSelectedCardCompleted &&
    isCardNumberCompleted &&
    isCardPasswordCompleted;

  const handleCardNumberChange = (value: string) => {
    const filteredValue = value.replace(/\D/g, "");
    const formattedValue = filteredValue.replace(/(\d{4})/g, "$1 ").trim();
    setCardNumber(formattedValue);
  };

  const handleOnClick = () => {
    navigate("/enrollmentCompleted", {
      state: {
        cardCompany: selectedCard,
        cardFirstPartNumbers: cardNumber.slice(0, 4),
      },
    });
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
    setCardCVC(value);
  };

  const handleCardPasswordChange = (value: string) => {
    setCardPassword(value);
    console.log("cardPassword", cardPassword);
  };

  const handleCardNumberCompleted = (isCompleted: boolean) => {
    setIsCardNumberCompleted(isCompleted);
  };

  const handleSelectedCardCompleted = (isCompleted: boolean) => {
    setIsSelectedCardCompleted(isCompleted);
  };

  const handleExpiryMonthCompleted = (isCompleted: boolean) => {
    setIsExpiryMonthCompleted(isCompleted);
  };

  const handleExpiryYearCompleted = (isCompleted: boolean) => {
    setIsExpiryYearCompleted(isCompleted);
  };

  const handleCardholderNameCompleted = (isCompleted: boolean) => {
    setIsCardholderNameCompleted(isCompleted);
  };

  const handleCardCVCCompleted = (isCompleted: boolean) => {
    setIsCardCVCCompleted(isCompleted);
  };

  const handleCardPasswordCompleted = (isCompleted: boolean) => {
    setIsCardPasswordCompleted(isCompleted);
  };

  useEffect(() => {
    if (isCardholderNameCompleted) {
      setShowCardCVCInput(true);
    }
  }, [isCardholderNameCompleted]);

  useEffect(() => {
    if (isExpiryMonthCompleted && isExpiryYearCompleted) {
      setShowCardOwnerNameInput(true);
    }
  }, [isExpiryMonthCompleted, isExpiryYearCompleted]);

  useEffect(() => {
    if (isCardCVCCompleted) {
      setShowCardPasswordInput(true);
    }
  }, [isCardCVCCompleted]);

  useEffect(() => {
    if (isSelectedCardCompleted) {
      setShowExpiryInput(true);
    }
  }, [isSelectedCardCompleted]);

  useEffect(() => {
    if (isCardNumberCompleted) {
      setShowSelectBox(true);
    }
  }, [isCardNumberCompleted]);

  useEffect(() => {
    if (isCardCVCCompleted) {
      setShowCardPasswordInput(true);
    }
  }, [isCardCVCCompleted]);

  return (
    <form>
      <CardPreview
        cardNumber={cardNumber}
        cardCVC={cardCVC}
        expiryMonth={expiryMonth}
        expiryYear={expiryYear}
        cardholderName={cardholderName}
        cardCompany={selectedCard}
        isFront={isOnCVCInput}
      />

      {showCardPasswordInput && (
        <CardInput
          title="비밀번호를 입력해 주세요"
          label="비밀번호 앞 2자리"
          description="앞의 2자리를 입력해주세요"
        >
          <CardPasswordInput
            value={cardNumber}
            onChange={handleCardPasswordChange}
            setCompleted={handleCardPasswordCompleted}
          />
        </CardInput>
      )}

      {showCardCVCInput && (
        <CardInput title="CVC 번호를 입력해 주세요" label="CVC">
          <CardCVCInput
            value={cardCVC}
            onChange={handleCardCVC}
            setCompleted={handleCardCVCCompleted}
            handleOnBlur={() => setIsOnCVCInput(false)}
            handleOnFocus={() => setIsOnCVCInput(true)}
          />
        </CardInput>
      )}

      {showCardOwnerNameInput && (
        <CardInput
          title="카드 소유자 이름을 입력해 주세요"
          label="카드 소유자 이름"
        >
          <CardOwnerNameInput
            value={cardholderName}
            onChange={handleCardholderNameChange}
            setCompleted={handleCardholderNameCompleted}
          />
        </CardInput>
      )}

      {showExpiryInput && (
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

      {showSelectBox && (
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
          setCompleted={handleCardNumberCompleted}
        />
      </CardInput>

      {isAllCompleted && <Button onClick={handleOnClick}>확인</Button>}
    </form>
  );
};

export default CardForm;
