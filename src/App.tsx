/** @jsxImportSource @emotion/react */
import "./App.css";
import { css } from "@emotion/react";
import FormContainer from "./components/FormContainer/FormContainer.tsx";
import PreviewContainer from "./components/PreviewContainer/PreviewContainer.tsx";
import useCardInformation from "./hooks/useCardInformation.tsx";

function App() {
  const { cardState, dispatch } = useCardInformation();
  return (
    <div css={AppStyle}>
      <div css={PreviewCardContainerStyle}>
        <PreviewContainer cardType={"visa"} cardState={cardState} />
      </div>
      <FormContainer cardState={cardState} dispatch={dispatch} />
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
