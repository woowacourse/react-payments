import { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrowBackIcon from "../assets/images/arrowBackIcon.svg";

import useResetInput from "../Hooks/useResetInput";

import CardPreview from "./UIComponents/CardPreview/CardPreview";
import Button from "./UIComponents/Button/Button";

import CardConfirmModal from "./AddCard/CardConfirmModal";
import PageHeader from "./PageHeader";
import {
  CardHolderNameInput,
  CardNumberInput,
  CardPasswordInput,
  CardSecurityCodeInput,
  CardExpireDateInput,
  CardInfoForm,
} from "./AddCard/";

import { isValidCardInfo } from "../validators/validator";
import { BACK_BUTTON_CONFIRM_MESSAGE } from "../constants/constants";

const smallCardCss = {
  width: "213px",
  height: "133px",
  fontSize: "10px",
  cardContainerMarginBottom: "25px",
  cardChipWidth: "40px",
  cardChipHeight: "26px",
  cardNameMargin: "0 0 20px 0",
  cardChipMarginBottom: "15px",
  cardNumberMarginBottom: "12px",
};

export default function AddCard() {
  const navigate = useNavigate();
  const [isNextButtonClicked, setNextButtonClicked] = useState(false);
  const { state, handleResetInput } = useResetInput();
  const { cardNumber, holderName, expireDate, securityCode, password } = state;

  const handleBackButton = () => {
    if (window.confirm(BACK_BUTTON_CONFIRM_MESSAGE)) {
      navigate("/", { replace: true });
      handleResetInput();
    }
  };

  return (
    <>
      <PageHeader>
        <Button
          onClick={handleBackButton}
          type="button"
          position={"static"}
          isSvg={true}
        >
          {arrowBackIcon}
        </Button>
        카드 추가
      </PageHeader>
      <CardPreview
        cardNumber={cardNumber}
        holderName={holderName}
        expireDate={expireDate}
        canProceed={isValidCardInfo(
          cardNumber,
          expireDate,
          securityCode,
          password
        )}
        cardCss={smallCardCss}
      />
      <CardInfoForm>
        <CardNumberInput />
        <CardExpireDateInput />
        <CardHolderNameInput />
        <CardSecurityCodeInput />
        <CardPasswordInput />
        {isValidCardInfo(cardNumber, expireDate, securityCode, password) && (
          <Button
            type="button"
            onClick={() => setNextButtonClicked((prevValue) => !prevValue)}
          >
            다음
          </Button>
        )}
        {isNextButtonClicked && <CardConfirmModal />}
      </CardInfoForm>
    </>
  );
}
