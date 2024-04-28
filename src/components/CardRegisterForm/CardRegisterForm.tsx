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
import CardBrandSelectField from "./components/CardBrandSelectField/CardBrandSelectField";
import { useEffect } from "react";
import { REGISTER_STEP } from "@/constants/condition";
import { CardBrandType } from "@/constants/cardBrandType";

interface Props {
  cardNumbersState: ReturnType<typeof useInputs<CardNumberInputType>>;
  expirationPeriodState: ReturnType<
    typeof useInputs<ExpirationPeriodInputType>
  >;
  ownerNameState: ReturnType<typeof useInput<string>>;
  CVCNumbersState: ReturnType<typeof useInput<string>>;
  passwordState: ReturnType<typeof useInput<string>>;
  cardBrandState: ReturnType<typeof useInput<CardBrandType | null>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setIsFront: React.Dispatch<React.SetStateAction<boolean>>;
  stepPassedArr: boolean[];
}

const CardRegisterForm = ({
  cardNumbersState,
  expirationPeriodState,
  ownerNameState,
  CVCNumbersState,
  passwordState,
  cardBrandState,
  stepPassedArr,
  step,
  setStep,
  setIsFront,
}: Props) => {
  useEffect(() => {
    if (stepPassedArr[step - 1] && step <= stepPassedArr.length) {
      setStep((prev) => prev + 1);
    }

    if (step !== REGISTER_STEP.CVC) {
      setIsFront(true);
    }
  }, [step, ...stepPassedArr]);

  return (
    <S.CardFormWrapper>
      {step >= REGISTER_STEP.PASSWORD && (
        <PasswordField passwordState={passwordState} />
      )}
      {step >= REGISTER_STEP.CVC && (
        <CVCField CVCNumbersState={CVCNumbersState} setIsFront={setIsFront} />
      )}
      {step >= REGISTER_STEP.OWNER_NAME && (
        <OwnerNameField ownerNameState={ownerNameState} />
      )}
      {step >= REGISTER_STEP.EXPIRATION_PERIOD && (
        <ExpirationPeriodField expirationPeriodState={expirationPeriodState} />
      )}
      {step >= REGISTER_STEP.CARD_BRAND && (
        <CardBrandSelectField cardBrandState={cardBrandState} />
      )}
      <CardNumbersField cardNumbersState={cardNumbersState} />
    </S.CardFormWrapper>
  );
};

export default CardRegisterForm;
