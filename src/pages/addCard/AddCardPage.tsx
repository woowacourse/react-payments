import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Card from "../../components/CardPreview/Card";
import useCardInfo from "../../hooks/useCardInfo";
import { STEPS } from "./constants";
import { AddCardForm } from "../../components/InputForm/AddCardForm";

function AddCardPage() {
  const { cardInfo, handleCardInfo } = useCardInfo();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    const isCurrentStepValid = STEPS[currentStepIndex].validate(cardInfo);
    const isLastStep = currentStepIndex === STEPS.length - 1;

    if (isCurrentStepValid && !isLastStep) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  }, [cardInfo, currentStepIndex]);

  return (
    <AppContainer>
      <Card
        cardNumber={[
          cardInfo.firstNumber,
          cardInfo.secondNumber,
          cardInfo.thirdNumber,
          cardInfo.fourthNumber,
        ]}
        expiration={[cardInfo.month, cardInfo.year]}
        cardBrand={cardInfo.cardBrand}
      />
      <AddCardForm
        currentStepIndex={currentStepIndex}
        cardInfo={cardInfo}
        handleCardInfo={handleCardInfo}
      />
    </AppContainer>
  );
}

export default AddCardPage;

const AppContainer = styled.div`
  width: 376px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 15px 0 15px;
`;
