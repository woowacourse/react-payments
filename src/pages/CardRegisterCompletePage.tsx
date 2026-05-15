import { SubmitSuccess } from "../components/SubmitSuccess";
import { useCardForm } from "../hooks/useCardForm";

export function CardRegisterCompletePage() {
  const { cardFormState } = useCardForm();

  return (
    <SubmitSuccess
      firstNumberSegment={cardFormState.cardNumberSegments[0]}
      cardCompany={cardFormState.cardCompany}
    />
  );
}
