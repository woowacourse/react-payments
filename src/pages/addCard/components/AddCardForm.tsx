import styled from "@emotion/styled";
import { STEPS } from "../constants";
import Announcement from "../../../components/@common/Announcement/Announcement";
import { CardInfo } from "../../../hooks/useCardInfo";

interface AddCardFormProps {
  currentStepIndex: number;
  cardInfo: CardInfo;
  handleCardInfo: (
    key: keyof AddCardFormProps["cardInfo"],
    value: string
  ) => void;
  isFormsCompleted: boolean;
}

export function AddCardForm({
  currentStepIndex,
  cardInfo,
  handleCardInfo,
  isFormsCompleted,
}: AddCardFormProps) {
  const visibleSteps = [];

  for (let i = currentStepIndex; i >= 0; i--) {
    const step = STEPS[i];
    const StepComponent = step.component;

    visibleSteps.push(
      <div key={step.id}>
        <Announcement main={step.messageMain} caption={step.messageCaption} />
        <StepComponent
          cardInfo={cardInfo}
          handleCardInfo={handleCardInfo}
          maxLength={step.maxLength ?? 0}
        />
      </div>
    );
  }

  return (
    <InputForm>
      {visibleSteps}
      {isFormsCompleted && <SubmitButton>확인</SubmitButton>}
    </InputForm>
  );
}

const InputForm = styled.form`
  overflow-y: auto;
  height: calc(100vh - 210px);
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding-bottom: 55px;
`;

const SubmitButton = styled.button`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 375px;
  padding: 15px 100px;
  color: white;
  background: ${({ theme }) => theme.colors.black};
`;
