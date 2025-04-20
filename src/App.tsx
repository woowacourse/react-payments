/** @jsxImportSource @emotion/react */
import "./App.css";
import { css } from "@emotion/react";
import FormContainer from "./components/FormContainer/FormContainer.tsx";
import useCardInformation from "./hooks/useCardInformation.tsx";
import PreviewCard from "./components/PreviewCard/PreviewCard.tsx";

function App() {
  const { cardState, dispatch } = useCardInformation();
  return (
    <div css={AppStyle}>
      <div css={PreviewCardContainerStyle}>
        <PreviewCard
          cardType={"visa"}
          uniqueNumber={cardState.uniqueNumber}
          expirationDate={cardState.expirationDate}
        />
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
