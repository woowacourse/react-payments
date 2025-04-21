/** @jsxImportSource @emotion/react */
import "./App.css";
import { css } from "@emotion/react";
import FormContainer from "./components/FormContainer/FormContainer.tsx";
import CardInformation from "./domain/CardInformation.tsx";
import PreviewCard from "./components/PreviewCard/PreviewCard.tsx";

function App() {
  const { cardType, cardInformationState, setCardInformationState } = CardInformation();

  return (
    <div css={AppStyle}>
      <PreviewCard cardInformationState={cardInformationState} cardType={cardType} />
      <FormContainer cardInformationState={cardInformationState} setCardInformationState={setCardInformationState} />
    </div>
  );
}
export default App;

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
