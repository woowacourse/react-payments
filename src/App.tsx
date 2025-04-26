import "./App.css";
import { css } from "@emotion/react";
import FormContainer from "./components/FormContainer/FormContainer.tsx";
import useCardInformation from "./hooks/useCardInformation.tsx";
import PreviewCard from "./components/PreviewCard/PreviewCard.tsx";
import useValidation from "./hooks/useValidation/useValidation";
// import useStep from "./hooks/useStep.tsx";

function App() {
  const { cardInformationState, setCardInformationState } = useCardInformation();
  const { validation, isCompletes } = useValidation();

  // useStep 훅 안에서 에러+상태를 확인해서 step을 업데이트 한다.
  // step은 상태여야한다. useMemo를 이용하여 일반 변수로 사용하려 했으나, 상태값이 변경, 즉 재수정이 일어났을 때, 상태가 바뀌어 버려 렌더링 상태가 꼬일 수 있다.

  // 1. 카드번호 상태 + 유효성 검증
  // const { step } = useStep();

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
