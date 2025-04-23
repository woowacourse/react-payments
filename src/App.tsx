import "./App.css";
import { css } from "@emotion/react";
import FormContainer from "./components/FormContainer/FormContainer.tsx";
import useCardInformation from "./hooks/useCardInformation.tsx";
import PreviewCard from "./components/PreviewCard/PreviewCard.tsx";
import useValidation from "./hooks/useValidation/useValidation";

function App() {
  const { cardInformationState, setCardInformationState } = useCardInformation();
  const validation = useValidation();

  return (
    <div css={AppStyle}>
      <PreviewCard cardInformationState={cardInformationState} />
      <FormContainer
        cardInformationState={cardInformationState}
        setCardInformationState={setCardInformationState}
        validation={validation}
      />
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
