import { css } from "@emotion/react";
import UniqueNumberForm from "../UniqueNumberForm/UniqueNumberForm";
import ExpirationDateForm from "../ExpirationDateForm/ExpirationDateForm";
import CvcNumberForm from "../CvcNumberForm/CvcNumberForm";
import { CardStateType } from "../../types/CardInformationType";

const FormContainer = ({ cardState, dispatch }: CardStateType) => {
  const { uniqueNumber, expirationDate, cvcNumber } = cardState;
  return (
    <div css={FormContainerStyle}>
      <UniqueNumberForm uniqueNumberState={uniqueNumber} dispatch={dispatch} />
      <ExpirationDateForm expirationDateState={expirationDate} dispatch={dispatch} />
      <CvcNumberForm cvcNumberState={cvcNumber} dispatch={dispatch} />
    </div>
  );
};

export default FormContainer;

const FormContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
