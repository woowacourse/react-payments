import "./App.css";
import { css } from "@emotion/react";
import useCardInformation from "./hooks/useCardInformation.tsx";
import PreviewCard from "./components/feature/PreviewCard/PreviewCard.tsx";
import UniqueNumberForm from "./components/feature/UniqueNumberForm/UniqueNumberForm.tsx";
import ExpirationDateForm from "./components/feature/ExpirationDateForm/ExpirationDateForm.tsx";
import CvcNumberForm from "./components/feature/CvcNumberForm/CvcNumberForm.tsx";
import PasswordForm from "./components/feature/PasswordForm/PasswordForm.tsx";
import CardIssuerForm from "./components/feature/CardIssuerForm/CardIssuerForm.tsx";

function App() {
  const { cardState, dispatch } = useCardInformation();
  const { uniqueNumber, expirationDate, cvcNumber, password, cardIssuer } = cardState;

  return (
    <div css={AppStyle}>
      <PreviewCard
        uniqueNumber={cardState.uniqueNumber}
        expirationDate={cardState.expirationDate}
        cardIssuer={cardState.cardIssuer}
      />
      <div css={FormContainerStyle}>
        <UniqueNumberForm uniqueNumberState={uniqueNumber} dispatch={dispatch} />
        <ExpirationDateForm expirationDateState={expirationDate} dispatch={dispatch} />
        <CvcNumberForm cvcNumberState={cvcNumber} dispatch={dispatch} />
        <PasswordForm passwordState={password} dispatch={dispatch} />
        <CardIssuerForm cardIssuerState={cardIssuer} dispatch={dispatch} />
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
`;

const FormContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default App;
