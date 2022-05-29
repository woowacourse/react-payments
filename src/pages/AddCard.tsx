import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import arrowBackIcon from "../assets/images/arrowBackIcon.svg";
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
import { isValidCardInfo } from "../validators/validator";
import { BACK_BUTTON_CONFIRM_MESSAGE, ROUTES } from "../constants/constants";
import { CardInfoContext } from "../contexts/CardInfoContext";
import { setInitialState } from "../reducer/cardReducer";
import { IInitialState } from "../types/cardInfoState";

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
  const navigate = useNavigate();
  const {
    state,
    dispatch,
  }: { state: IInitialState; dispatch: React.Dispatch<any> } =
    useContext(CardInfoContext);

  const { cardNumber, holderName, expireDate, securityCode, password } = state;

  const handleBackButton = () => {
    if (window.confirm(BACK_BUTTON_CONFIRM_MESSAGE)) {
      navigate(ROUTES.HOME, { replace: true });
      dispatch(setInitialState());
    }
  };

  return (
    <>
      <PageHeader>
        <Button
          onClick={handleBackButton}
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
