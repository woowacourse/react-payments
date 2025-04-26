import "./App.css";
import { css } from "@emotion/react";
import FormContainer from "./components/FormContainer/FormContainer.tsx";
import PreviewCard from "./components/PreviewCard/PreviewCard.tsx";
import useValidation from "./hooks/useValidation/useValidation";
import useCardInformation from "./hooks/\buseCardInformation/useCardInformation.tsx";
import useStep from "./hooks/useStep.tsx";
import useAllComplete from "./hooks/useAllComplete.tsx";
import Button from "./components/Button/Button.tsx";

function App() {
  const { cardInformationState, setCardInformationState, isStateCompletes } = useCardInformation();
  const { validation, isErrorCompletes } = useValidation();

  // useStep 훅 안에서 에러+상태를 확인해서 step을 업데이트 한다.
  // step은 상태여야한다. useMemo를 이용하여 일반 변수로 사용하려 했으나, 상태값이 변경, 즉 재수정이 일어났을 때, 상태가 바뀌어 버려 렌더링 상태가 꼬일 수 있다.

  // 1. 카드번호 상태 + 유효성 검증
  const step = useStep(isStateCompletes, isErrorCompletes);

  // 2. 카드번호 상태 + 유효성 검증 완료 되었을때, 버튼 띄우기

  const complete = useAllComplete(isStateCompletes, isErrorCompletes);

  return (
    <div css={AppStyle}>
      <PreviewCard cardInformationState={cardInformationState} />
      <FormContainer
        cardInformationState={cardInformationState}
        setCardInformationState={setCardInformationState}
        validation={validation}
        step={step}
      />
      <div css={ButtonWrapperStyle}>{complete && <Button text="완료" />}</div>
    </div>
  );
}
export default App;

const AppStyle = css`
  box-sizing: border-box;
  height: calc(100% - 70px);
  position: relative;
  width: 400px;
  background-color: #ffffff;
  padding: 77px 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  border-radius: 20px;
`;

const ButtonWrapperStyle = css`
  position: absolute;
  width: 100%;
  bottom: 20px;
  z-index: 99;
`;
