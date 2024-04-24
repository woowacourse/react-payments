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
import { CardType } from "@/constants/cardType";

interface Props {
  cardNumbersState: ReturnType<typeof useInputs<CardNumberInputType>>;
  expiredPeriodState: ReturnType<typeof useInputs<ExpirationPeriodInputType>>;
  ownerNameState: ReturnType<typeof useInput<string>>;
  CVCNumbersState: ReturnType<typeof useInput<string>>;
  passwordState: ReturnType<typeof useInput<string>>;
  cardTypeState: ReturnType<typeof useInput<CardType | null>>;
}

const CardRegisterForm = ({
  cardNumbersState,
  expiredPeriodState,
  ownerNameState,
  CVCNumbersState,
  passwordState,
  cardTypeState,
}: Props) => {
  const [step, setStep] = useState<number>(1);
  const cardNumbersError = cardNumbersState.isError;

  const changeStep = (newStep: number) => {
    if (!cardNumbersError) {
      if (step < newStep) {
        setStep(newStep);
      }
    }
  };

  useEffect(() => {
    if (!cardNumbersError || !cardTypeState.isError) {
      changeStep(step + 1);
    }
  }, [cardNumbersError, cardTypeState]);

  return (
    <S.CardFormWrapper>
      {step >= 6 && <PasswordField passwordState={passwordState} />}
      {step >= 5 && <CVCField CVCNumbersState={CVCNumbersState} />}
      {step >= 4 && <OwnerNameField ownerNameState={ownerNameState} />}
      {step >= 3 && (
        <ExpirationPeriodField expiredPeriodState={expiredPeriodState} />
      )}
      {step >= 2 && <CardTypeSelectField cardTypeState={cardTypeState} />}
      <CardNumbersField cardNumbersState={cardNumbersState} />
    </S.CardFormWrapper>
  );
};

export default CardRegisterForm;
