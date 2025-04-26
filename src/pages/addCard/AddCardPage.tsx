import styled from "@emotion/styled";
import useCardInfo from "../../hooks/useCardInfo";
import Card from "../../components/CardPreview/Card";
import { AddCardForm } from "./components/AddCardForm";
import { useStepManager } from "./hooks/useStepManager";

function AddCardPage() {
  const { cardInfo, handleCardInfo } = useCardInfo();
  const { currentStepIndex, isFormsCompleted } = useStepManager(cardInfo);

  return (
    <AddCardContainer>
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
        isFormsCompleted={isFormsCompleted}
      />
    </AddCardContainer>
  );
}

export default AddCardPage;

const AddCardContainer = styled.div`
  width: 376px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 15px 0 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;
