import { css } from "@emotion/react";
import useCardInformation from "../../hooks/useCardInformation/useCardInformation";
import useValidation from "../../hooks/useValidation/useValidation";
import useStep from "../../hooks/useStep";
import useAllComplete from "../../hooks/useAllComplete";
import PreviewCard from "../../components/PreviewCard/PreviewCard";
import FormContainer from "../../components/FormContainer/FormContainer";
import { useNavigate } from "react-router";

const AddCard = () => {
  const navigate = useNavigate();
  const { cardInformationState, setCardInformationState, isStateCompletes } = useCardInformation();
  const { validation, isErrorCompletes } = useValidation();

  // 1. 카드번호 상태 + 유효성 검증
  const step = useStep(isStateCompletes, isErrorCompletes);

  // 2. 카드번호 상태 + 유효성 검증 완료 되었을때, 버튼 띄우기
  const complete = useAllComplete(isStateCompletes, isErrorCompletes);

  const handleComplete = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/complete", {
      state: { uniqueNumber: cardInformationState.uniqueNumber[0], company: cardInformationState.company },
    });
  };

  return (
    <div css={ContainerStyle}>
      <PreviewCard cardInformationState={cardInformationState} />
      <FormContainer
        cardInformationState={cardInformationState}
        setCardInformationState={setCardInformationState}
        validation={validation}
        step={step}
        complete={complete}
        onSubmit={handleComplete}
      />
    </div>
  );
};

export default AddCard;

const ContainerStyle = css`
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
