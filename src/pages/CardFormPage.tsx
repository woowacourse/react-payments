import "../App.css";
import { css } from "@emotion/react";
import useCardInformation from "../hooks/useCardInformation.tsx";
import PreviewCard from "../components/feature/PreviewCard/PreviewCard.tsx";
import UniqueNumberForm from "../components/feature/UniqueNumberForm/UniqueNumberForm.tsx";
import ExpirationDateForm from "../components/feature/ExpirationDateForm/ExpirationDateForm.tsx";
import CvcNumberForm from "../components/feature/CvcNumberForm/CvcNumberForm.tsx";
import PasswordForm from "../components/feature/PasswordForm/PasswordForm.tsx";
import CardIssuerForm from "../components/feature/CardIssuerForm/CardIssuerForm.tsx";
import Button from "../components/common/Button/Button.tsx";
import { useNavigate } from "react-router";
import useOpenForm from "../hooks/useOpenForm.tsx";

function CardFormPage() {
  const { cardState, dispatch } = useCardInformation();
  const { uniqueNumber, expirationDate, cvcNumber, password, cardIssuer } = cardState;
  const { isFormOpen, openNextForm } = useOpenForm();

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/complete", { state: cardState });
  };

  return (
    <div>
      <div css={AppStyle}>
        <PreviewCard
          uniqueNumber={cardState.uniqueNumber}
          expirationDate={cardState.expirationDate}
          cardIssuer={cardState.cardIssuer}
        />
        <div css={FormContainerStyle}>
          {isFormOpen("password") && <PasswordForm passwordState={password} dispatch={dispatch} />}
          {isFormOpen("cvcNumber") && (
            <CvcNumberForm
              cvcNumberState={cvcNumber}
              dispatch={dispatch}
              openNextForm={() => openNextForm("cvcNumber")}
            />
          )}
          {isFormOpen("expirationDate") && (
            <ExpirationDateForm
              expirationDateState={expirationDate}
              dispatch={dispatch}
              openNextForm={() => openNextForm("expirationDate")}
            />
          )}
          {isFormOpen("cardIssuer") && (
            <CardIssuerForm
              cardIssuerState={cardIssuer}
              dispatch={dispatch}
              openNextForm={() => openNextForm("cardIssuer")}
            />
          )}
          {isFormOpen("uniqueNumber") && (
            <UniqueNumberForm
              uniqueNumberState={uniqueNumber}
              dispatch={dispatch}
              openNextForm={() => openNextForm("uniqueNumber")}
            />
          )}
        </div>
        {
          <div css={ButtonContainerStyle}>
            <Button onClick={handleButtonClick}>확인</Button>
          </div>
        }
      </div>
    </div>
  );
}

const AppStyle = css`
  width: 376px;
  background-color: #ffffff;
  padding: 77px 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  border-radius: 20px;
  position: relative;
`;

const FormContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 400px;
  overflow-y: auto;
`;

const ButtonContainerStyle = css`
  width: 436px;
  position: absolute;
  bottom: 0;
  z-index: 100;
`;

export default CardFormPage;
