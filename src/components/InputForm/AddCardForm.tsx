import styled from "@emotion/styled";
import { STEPS } from "../../pages/addCard/constants";
import Announcement from "../@common/Announcement/Announcement";
import { CardInfo } from "../../hooks/useCardInfo";

interface AddCardFormProps {
  currentStepIndex: number;
  cardInfo: CardInfo;
  handleCardInfo: (
    key: keyof AddCardFormProps["cardInfo"],
    value: string
  ) => void;
}

export function AddCardForm({
  currentStepIndex,
  cardInfo,
  handleCardInfo,
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

  return <InputForm>{visibleSteps}</InputForm>;
}

const InputForm = styled.form`
  overflow-y: auto;
  height: calc(100vh - 210px);
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
