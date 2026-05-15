import { SubmitSuccess } from "../components/CardRegisterComplete/SubmitSuccess";
import type { CardFormState } from "../types";

interface CardRegisterCompletePageProps {
  cardFormState: CardFormState;
}

export function CardRegisterCompletePage(props: CardRegisterCompletePageProps) {
  return (
    <SubmitSuccess
      firstNumberSegment={props.cardFormState.cardNumberSegments[0]}
      cardCompany={props.cardFormState.cardCompany}
    />
  );
}
