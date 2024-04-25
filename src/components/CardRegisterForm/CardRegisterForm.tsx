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
import { useEffect } from "react";
import { CardType } from "@/constants/cardType";

interface Props {
  cardNumbersState: ReturnType<typeof useInputs<CardNumberInputType>>;
  expirationPeriodState: ReturnType<
    typeof useInputs<ExpirationPeriodInputType>
  >;
  ownerNameState: ReturnType<typeof useInput<string>>;
  CVCNumbersState: ReturnType<typeof useInput<string>>;
  passwordState: ReturnType<typeof useInput<string>>;
  cardTypeState: ReturnType<typeof useInput<CardType | null>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  completedArr: boolean[];
}

const CardRegisterForm = ({
  cardNumbersState,
  expirationPeriodState,
  ownerNameState,
  CVCNumbersState,
  passwordState,
  cardTypeState,
  completedArr,
  step,
  setStep,
}: Props) => {
  useEffect(() => {
    if (completedArr[step - 1] && step <= completedArr.length) {
      setStep((prev) => prev + 1);
    }
  }, [step, ...completedArr]);

  return (
    <S.CardFormWrapper>
      {step >= 6 && <PasswordField passwordState={passwordState} />}
      {step >= 5 && <CVCField CVCNumbersState={CVCNumbersState} />}
      {step >= 4 && <OwnerNameField ownerNameState={ownerNameState} />}
      {step >= 3 && (
        <ExpirationPeriodField expirationPeriodState={expirationPeriodState} />
      )}
      {step >= 2 && <CardTypeSelectField cardTypeState={cardTypeState} />}
      <CardNumbersField cardNumbersState={cardNumbersState} />
    </S.CardFormWrapper>
  );
};

export default CardRegisterForm;
