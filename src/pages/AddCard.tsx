import { useContext, useState } from "react";
import arrowBackIcon from "../assets/images/arrowBackIcon.svg";
import { isValidCardInfo } from "../validators/validator";
import { CardInfoContext } from "../contexts/CardInfoContext";
import { IInitialState } from "../types/cardInfoState";
import useBackButtonHandler from "../hooks/useBackButtonHandler";
import CardPreview from "../components/UIComponents/CardPreview/CardPreview";
import Button from "../components/UIComponents/Button/Button";
import CardConfirmModal from "../components/AddCard/CardConfirmModal";
import PageHeader from "../components/PageHeader";
import {
  CardHolderNameInput,
  CardNumberInput,
  CardPasswordInput,
  CardSecurityCodeInput,
  CardExpireDateInput,
  CardInfoForm,
} from "../components/AddCard";

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
  const [isNextButtonClicked, setNextButtonClicked] = useState(false);
  const {
    state,
    dispatch,
  }: { state: IInitialState; dispatch: React.Dispatch<any> } =
    useContext(CardInfoContext);

  const { cardNumber, holderName, expireDate, securityCode, password } = state;
  const { handleBackButtonClick } = useBackButtonHandler(dispatch);

  return (
    <>
      <PageHeader>
        <Button
          onClick={handleBackButtonClick}
          type={"button"}
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
        <CardNumberInput cardNumber={cardNumber} dispatch={dispatch} />
        <CardExpireDateInput expireDate={expireDate} dispatch={dispatch} />
        <CardHolderNameInput holderName={holderName} dispatch={dispatch} />
        <CardSecurityCodeInput
          securityCode={securityCode}
          dispatch={dispatch}
        />
        <CardPasswordInput password={password} dispatch={dispatch} />
        {isValidCardInfo(cardNumber, expireDate, securityCode, password) && (
          <Button
            type={"button"}
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
