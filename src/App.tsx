/** @jsxImportSource @emotion/react */
import "./App.css";
import { css } from "@emotion/react";
import FormContainer from "./components/FormContainer/FormContainer.tsx";
import CardInformation from "./domain/CardInformation.tsx";
import PreviewContainer from "./components/PreviewContainer/PreviewContainer.tsx";

function App() {
  const { cardType, cardInformationState, setCardInformationState } = CardInformation();

  return (
    <div css={AppStyle}>
      <div css={PreviewCardContainerStyle}>
        <PreviewContainer cardInformationState={cardInformationState} cardType={cardType} />
      </div>
      <FormContainer cardInformationState={cardInformationState} setCardInformationState={setCardInformationState} />
    </div>
  );
}

const AppStyle = css`
  width: 376px;
  background-color: #ffffff;
  padding: 77px 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 45px;
  border-radius: 20px;
`;

const PreviewCardContainerStyle = css`
  display: flex;
  justify-content: center;
`;

export default App;
