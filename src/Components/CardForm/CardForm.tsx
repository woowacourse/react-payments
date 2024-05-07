/** @jsxImportSource @emotion/react */

import React from "react";
import CardPreview from "../CardPreview/CardPreview";
import CardInput from "../CardInput/CardInput";
import CardNumberInput from "../CardNumberInput/CardNumberInput";
import CardExpiryInput from "../CardExpiryInput/CardExpiryInput";
import CardOwnerNameInput from "../CardOwnerNameInput/CardOwnerNameInput";
import SelectBox from "../CardCompanySelector/CardCompanySelector";
import CardCVCInput from "../CardCVCInput/CardCVCInput";
import Button from "../common/Button/Button";
import { useNavigate } from "react-router-dom";
import CardPasswordInput from "../CardPasswordInput/CardPasswordInput";
import { CardFormWrapper, FormStyle } from "./CardForm.style";
import useCardNumberInput from "../../hooks/useCardNumberInput";
import useCardCompanySelect from "../../hooks/useCardCompanySelect";
import useExpiryInput from "../../hooks/useExpiryInput";
import useCardOwnerNameInput from "../../hooks/useCardOwnerNameInput";
import useCardCVCInput from "../../hooks/useCardCVCInput";
import useCardPasswordInput from "../../hooks/useCardPasswordInput";
import useInputVisibility from "../../hooks/useInputVisibility";

const CardForm: React.FC = () => {
  const {
    cardNumber,
    isCardNumberCompleted,
    handleCardNumberChange,
    handleCardNumberCompleted,
  } = useCardNumberInput();

  const {
    selectedCard,
    isSelectedCardCompleted,
    handleSelect,
    handleSelectedCardCompleted,
  } = useCardCompanySelect();

  const {
    expiryMonth,
    expiryYear,
    isExpiryMonthCompleted,
    isExpiryYearCompleted,
    handleExpiryMonthChange,
    handleExpiryYearChange,
    handleExpiryMonthCompleted,
    handleExpiryYearCompleted,
  } = useExpiryInput();

  const {
    cardholderName,
    isCardholderNameCompleted,
    handleCardholderNameChange,
    handleCardholderNameCompleted,
  } = useCardOwnerNameInput();

  const { cardCVC, isCardCVCCompleted, handleCardCVC, handleCardCVCCompleted } =
    useCardCVCInput();

  const {
    cardPassword,
    isCardPasswordCompleted,
    handleCardPasswordChange,
    handleCardPasswordCompleted,
  } = useCardPasswordInput();

  const {
    showSelectBox,
    showExpiryInput,
    showCardOwnerNameInput,
    showCardCVCInput,
    showCardPasswordInput,
    isOnCVCInput,
    handleCVCFocus,
    handleCVCBlur,
  } = useInputVisibility({
    isCardNumberCompleted,
    isSelectedCardCompleted,
    isExpiryCompleted: isExpiryMonthCompleted && isExpiryYearCompleted,
    isCardholderNameCompleted,
    isCardCVCCompleted,
  });

  const navigate = useNavigate();

  const isAllCompleted =
    isCardCVCCompleted &&
    isCardholderNameCompleted &&
    isExpiryYearCompleted &&
    isSelectedCardCompleted &&
    isCardNumberCompleted &&
    isCardPasswordCompleted;

  const handleOnClick = () => {
    navigate("/enrollmentCompleted", {
      state: {
        cardCompany: selectedCard,
        cardFirstPartNumbers: cardNumber.slice(0, 4),
      },
    });
  };

  return (
    <CardFormWrapper>
      <CardPreview
        cardNumber={cardNumber}
        cardCVC={cardCVC}
        expiryMonth={expiryMonth}
        expiryYear={expiryYear}
        cardholderName={cardholderName}
        cardCompany={selectedCard}
        isFront={isOnCVCInput}
      />
      <form css={FormStyle}>
        {showCardPasswordInput && (
          <CardInput
            title="비밀번호를 입력해 주세요"
            label="비밀번호 앞 2자리"
            description="앞의 2자리를 입력해주세요"
          >
            <CardPasswordInput
              value={cardPassword}
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
              handleOnBlur={handleCVCBlur}
              handleOnFocus={handleCVCFocus}
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
            <CardExpiryInput
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
    </CardFormWrapper>
  );
};

export default CardForm;
