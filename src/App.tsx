import "./App.css";
import { css } from "@emotion/react";
import FormContainer from "./components/FormContainer/FormContainer.tsx";
import useCardInformation from "./hooks/useCardInformation.tsx";
import PreviewCard from "./components/PreviewCard/PreviewCard.tsx";

function App() {
  const { cardState, dispatch } = useCardInformation();
  return (
    <div css={AppStyle}>
      <PreviewCard uniqueNumber={cardState.uniqueNumber} expirationDate={cardState.expirationDate} />
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
  align-items: center;
  gap: 45px;
  border-radius: 20px;
`;

export default App;
