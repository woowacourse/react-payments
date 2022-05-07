import { useContext, useState } from "react";
import { CardInfoContext } from "../contexts/CardInfoContext";

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

export default function AddCard() {
  const {
    state: { cardNumber, expireDate, securityCode, password },
  } = useContext(CardInfoContext);

  const [isNextButtonClicked, setNextButtonClicked] = useState(false);

  return (
    <>
      <PageHeader>카드 추가</PageHeader>
      <CardPreview
        canProceed={isValidCardInfo(
          cardNumber,
          expireDate,
          securityCode,
          password
        )}
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
