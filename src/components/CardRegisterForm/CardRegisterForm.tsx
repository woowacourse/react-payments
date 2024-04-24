import S from "./style";
import useInputs from "@/hooks/useInputs";
import CardNumbersField, {
  CardNumberInputType,
} from "./components/CardNumbersField/CardNumbersField";
import ExpirationPeriodField, {
  ExpirationPeriodInputType,
} from "./components/ExpirationPeriodField/ExpirationPeriodField";
import useInput from "@/hooks/useInput";
import OwnerNameField from "./components/OwnerNameField/OwnerNameField";
import CVCField from "./components/CVCField/CVCField";
import PasswordField from "./components/PasswordField/PasswordField";
import CardTypeSelectField from "./components/CardTypeSelectField/CardTypeSelectField";
import { useEffect, useState } from "react";

interface Props {
  cardNumbersState: ReturnType<typeof useInputs<CardNumberInputType>>;
  expiredPeriodState: ReturnType<typeof useInputs<ExpirationPeriodInputType>>;
  ownerNameState: ReturnType<typeof useInput>;
  CVCNumbersState: ReturnType<typeof useInput>;
  passwordState: ReturnType<typeof useInput>;
  cardTypeState: ReturnType<typeof useInput>;
}

const CardRegisterForm = ({
  cardNumbersState,
  expiredPeriodState,
  ownerNameState,
  CVCNumbersState,
  passwordState,
  cardTypeState,
}: Props) => {
  const [step, setStep] = useState(5);
  const cardNumbersError = cardNumbersState.isError;

  useEffect(() => {
    if (!cardNumbersError) {
      if (step < 2) {
        setStep(2);
      }
    }
  }, [cardNumbersError]);

  return (
    <S.CardFormWrapper>
      {step >= 6 && <PasswordField passwordState={passwordState} />}
      {step >= 5 && <CVCField CVCNumbersState={CVCNumbersState} />}
      {step >= 4 && (
        <ExpirationPeriodField expiredPeriodState={expiredPeriodState} />
      )}
      {step >= 3 && <OwnerNameField ownerNameState={ownerNameState} />}
      {step >= 2 && <CardTypeSelectField cardTypeState={cardTypeState} />}
      <CardNumbersField cardNumbersState={cardNumbersState} />
    </S.CardFormWrapper>
  );
};

export default CardRegisterForm;
