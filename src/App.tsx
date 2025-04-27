import "./App.css";
import { css } from "@emotion/react";
import useCardInformation from "./hooks/useCardInformation.tsx";
import PreviewCard from "./components/feature/PreviewCard/PreviewCard.tsx";
import UniqueNumberForm from "./components/feature/UniqueNumberForm/UniqueNumberForm.tsx";
import ExpirationDateForm from "./components/feature/ExpirationDateForm/ExpirationDateForm.tsx";
import CvcNumberForm from "./components/feature/CvcNumberForm/CvcNumberForm.tsx";
import PasswordForm from "./components/feature/PasswordForm/PasswordForm.tsx";
import CardIssuerForm from "./components/feature/CardIssuerForm/CardIssuerForm.tsx";
import Button from "./components/common/Button/Button.tsx";
import useOpenForm from "./hooks/useOpenForm.tsx";
import useCardError from "./hooks/useCardError.tsx";
import { useEffect } from "react";

function App() {
  const {
    cardState,
    dispatch,
    allComplete,
    uniqueNumberComplete,
    expirationDateomplete,
    cvcNumberComplete,
    cardIssuerComplete,
  } = useCardInformation();
  const { uniqueNumber, expirationDate, cvcNumber, password, cardIssuer } = cardState;
  const { openNextForm, isFormOpen, checkNextFormOpen } = useOpenForm();
  const { cardErrorState, dispatchError, allClear, uniqueNumberClear, expirationDateClear, cvcNumberClear } =
    useCardError();

  useEffect(() => {
    if (!checkNextFormOpen("cvcNumber") && cvcNumberClear() && cvcNumberComplete()) {
      openNextForm("cvcNumber");
    }
  }, [cardErrorState.cvcNumber]);

  useEffect(() => {
    if (!checkNextFormOpen("cardIssuer") && cardIssuerComplete()) {
      openNextForm("cardIssuer");
    }
  }, [cardState.cardIssuer]);

  useEffect(() => {
    if (!checkNextFormOpen("expirationDate") && expirationDateClear() && expirationDateomplete()) {
      openNextForm("expirationDate");
    }
  }, [cardErrorState.expirationDate]);

  useEffect(() => {
    if (!checkNextFormOpen("uniqueNumber") && uniqueNumberClear() && uniqueNumberComplete()) {
      openNextForm("uniqueNumber");
    }
  }, [cardErrorState.uniqueNumber]);

  return (
    <div>
      <div css={AppStyle}>
        <PreviewCard
          uniqueNumber={cardState.uniqueNumber}
          expirationDate={cardState.expirationDate}
          cardIssuer={cardState.cardIssuer}
        />
        <div css={FormContainerStyle}>
          {isFormOpen("password") && (
            <PasswordForm
              passwordState={password}
              dispatch={dispatch}
              errorState={cardErrorState.password}
              dispatchError={dispatchError}
            />
          )}
          {isFormOpen("cvcNumber") && (
            <CvcNumberForm
              cvcNumberState={cvcNumber}
              dispatch={dispatch}
              openNextForm={openNextForm}
              errorState={cardErrorState.cvcNumber}
              dispatchError={dispatchError}
            />
          )}
          {isFormOpen("expirationDate") && (
            <ExpirationDateForm
              expirationDateState={expirationDate}
              dispatch={dispatch}
              openNextForm={openNextForm}
              errorState={cardErrorState.expirationDate}
              dispatchError={dispatchError}
            />
          )}
          {isFormOpen("cardIssuer") && (
            <CardIssuerForm cardIssuerState={cardIssuer} dispatch={dispatch} openNextForm={openNextForm} />
          )}
          <UniqueNumberForm
            uniqueNumberState={uniqueNumber}
            dispatch={dispatch}
            openNextForm={openNextForm}
            errorState={cardErrorState.uniqueNumber}
            dispatchError={dispatchError}
          />
        </div>
        {isFormOpen("password") && allComplete() && allClear() && (
          <div css={ButtonContainerStyle}>
            <Button text={"확인"} />
          </div>
        )}
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

export default App;
