import { css } from "@emotion/react";
import UniqueNumberForm from "../UniqueNumberForm/UniqueNumberForm";
import ExpirationDateForm from "../ExpirationDateForm/ExpirationDateForm";
import CvcNumberForm from "../CvcNumberForm/CvcNumberForm";
import { CardStateType } from "../../types/CardInformationType";

// const UIControllerData = {
//   uniqueNumber: {
//     title: "결제할 카드 번호를 입력해 주세요",
//     description: "본인 명의의 카드만 결제 가능합니다.",
//     inputFieldData: {
//       label: "카드번호",
//       inputNumber: 4,
//       inputProps: { placeholder: ["1234", "1234", "1234", "1234"], maxLength: 4 },
//     },
//   },
//   expirationDate: {
//     title: "카드 유효기간을 입력해 주세요",
//     description: "월/년도(MMYY)를 순서대로 입력해 주세요.",
//     inputFieldData: {
//       label: "유효기간",
//       inputNumber: 2,
//       inputProps: { placeholder: ["MM", "YY"], maxLength: 2 },
//     },
//   },
//   cvcNumber: {
//     title: "CVC 번호를 입력해 주세요",
//     description: "",
//     inputFieldData: {
//       label: "cvc",
//       inputNumber: 1,
//       inputProps: { placeholder: ["123"], maxLength: 3 },
//     },
//   },
// };

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
